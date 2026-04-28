import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import https from "https";
import http from "http";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Image proxy route
  app.get("/api/proxy-image", async (req, res) => {
    const targetUrl = req.query.url as string;
    
    if (!targetUrl) {
      res.status(400).send("URL parameter is required");
      return;
    }

    try {
      const proxyRes = await fetch(targetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Referer': targetUrl,
        }
      });

      res.status(proxyRes.status);
      
      proxyRes.headers.forEach((value, key) => {
        if (key.toLowerCase() !== 'content-encoding') {
          res.setHeader(key, value);
        }
      });
      
      const buffer = await proxyRes.arrayBuffer();
      res.end(Buffer.from(buffer));
      
    } catch (err) {
      console.error('Error proxying image:', err);
      if (!res.headersSent) {
        res.status(500).send("Error fetching image");
      }
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
