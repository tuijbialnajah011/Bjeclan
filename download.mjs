import fs from 'fs';

async function download() {
  try {
    const res = await fetch('https://testproxy-aistudio.miraheze.org/w/api.php?action=query&format=json');
    console.log(res.status);
  } catch (e) {
    console.error(e);
  }
}
download();
