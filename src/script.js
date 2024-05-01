//Crée un tableau de mot
const tableauMot = ['proute', 'banane', 'voiture', 'cacahuete', 'serpent', 'kebab'];
//crée un tableau de lettre que l'on va utiliser pour faire les bouttons
let tableauLettre = [];
tableauLettre = 'abcdefghijklmnopqrstuvwxyz'.split('');
clavier = document.querySelector('.game');
affichage = document.querySelector('.affichage');
affichageLettreJouer = document.querySelector('.lettreJouer');
let score = 0;
let manque = 0;
for (let i = 0; i < tableauLettre.length; i++) {
    const boutton = document.createElement('button');
    boutton.className = 'boutton';
    boutton.id = tableauLettre[i];
    boutton.innerHTML = tableauLettre[i];
    boutton.addEventListener('click', matchLettre);
    clavier.appendChild(boutton);
};
//récupérer un mot aleatoire dans le tableau
let mot = tableauMot[Math.floor(Math.random() * tableauMot.length)];
//affiché le nombre de lettre du mot
let motPendu = [];

    for (let i = 0; i < mot.length; i++) {
        motPendu.push('_');
        const guess = document.createElement('span');
        guess.className = 'guess';
        guess.innerHTML = motPendu[i];
        guess.id = i;
        affichage.appendChild(guess);
    }

function matchLettre() {
    //récupérer le caractére du joueur
    let lettre = this.id;
    let tempScore = score;
    let lettrePendu = mot.split('');
    const pendu = document.querySelector('img')
    const lettreJouer = document.createElement('span');
    lettreJouer.innerHTML = lettre;
    affichageLettreJouer.appendChild(lettreJouer);
    //Match le caractére avec toutes les lettres du tableau et affiché les lettres correspondantes
    for (let i = 0; i < mot.length; i++) {
        if (lettrePendu[i] == lettre) {
            const remplacement = document.getElementById(i);
            const resultat = document.createElement('span');
            resultat.className = 'resultat';
            resultat.innerHTML = lettrePendu[i];
            resultat.id = i;
            score++
            remplacement.replaceWith(affichage.appendChild(resultat));
            
        };
    };
    //si aucun match mettre une erreur et un baton
    if (tempScore == score) {
        manque++;
        pendu.src = 'img/pendu' + manque + '.svg';
    };
    //si les point sont égale au nombre de lettre dans le mot alors victoire
    if (score == mot.length) {
        alert('victoire');
        // afficher une modale victoire
    };
    if (manque == 10) {
        alert('ta perdu gros nez');
    };
};
