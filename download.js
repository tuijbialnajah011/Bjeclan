import fs from "fs";
async function download() {
  try {
    const res = await fetch("https://files.catbox.moe/w6ws8n.jpg", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5"
      },
      signal: AbortSignal.timeout(1e4)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync("public/rudy.jpg", Buffer.from(buffer));
    console.log("Downloaded to public/rudy.jpg");
  } catch (e) {
    console.error(e);
  }
}
download();
