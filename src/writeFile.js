const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('Fichier welcome.txt créé avec succès');
});

// Pour lire et afficher le contenu du fichier hello.txt
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
