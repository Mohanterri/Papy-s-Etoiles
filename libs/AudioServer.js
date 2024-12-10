'use server'

import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const id = url.pathname.slice(1); // Récupérer l'id de l'URL

    // Enregistrer l'id dans un fichier JSON (exemple)
    const data = JSON.parse(fs.readFileSync('ids.json', 'utf8') || '[]');
    data.push(id);
    fs.writeFileSync('ids.json', JSON.stringify(data));

    // Si c'est le premier enregistrement pour cet id, créer un nouveau fichier
    const filename = `audio_${id}.pcm`;
    let writeStream = fs.createWriteStream(filename, { flags: 'a' });

    req.on('data', (chunk) => {
        writeStream.write(chunk);
    });

    req.on('end', () => {
        writeStream.end();
    });

    res.statusCode = 200;
    res.end();
});

server.listen(80, () => {
    console.log('Server listening on port 80');
});