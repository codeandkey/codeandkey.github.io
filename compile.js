// PUG rendering script.
// usage: node compile.js <src.pug> <dst.html>

let fs      = require('fs');
let process = require('process');
let pug     = require('pug')

function usage(code) {
    console.log(`Usage: ${process.argv[0]} <src.pug> <dst.html>`); 
    process.exit(code);
}

if (process.argv.length < 4) {
    usage(-1);
}

if (process.argv[2] == '--help' || process.argv[2] == '-h') {
    usage(0);
}

let src = process.argv[2];
let dst = process.argv[3];

let html = pug.renderFile(src, {pretty: true});

fs.writeFile(dst, html, (err) => {
    if (err) {
        console.error(`Error opening ${dst} for writing: ` + err);
        process.exit(-1);
    }
});
