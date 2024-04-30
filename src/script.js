//Crée un tableau de mot
const tableauMot = ['proute', 'banane', 'voiture', 'cacahuete', 'serpent', 'kebab'];
//crée un tableau de lettre que l'on va utiliser pour faire les bouttons
let tableauLettre = [];
tableauLettre = 'abcdefghijklmnopqrstuvwxyz'.split('');
clavier = document.querySelector('.game');
affichage = document.querySelector('.affichage');
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
for (let i = 0; i < mot.length; i++) {
    const guess = document.createElement('p');
    guess.className = 'guess';
    guess.innerHTML = '_';
    guess.id = i;
    affichage.appendChild(guess);
};
function matchLettre() {
    //récupérer le caractére du joueur
    let lettre = this.id;
    let tempScore = score;
    let result = [];
    let lettrePendu = mot.split('');
    const resultat = document.querySelectorAll('p');
    const pendu = document.querySelector('img')
    const lettreJouer = document.createElement('p');
    lettreJouer.innerHTML = lettre;
    affichage.appendChild(lettreJouer);
    //Match le caractére avec toutes les lettres du tableau et affiché les lettres correspondantes
    for (let i = 0; i < mot.length; i++) {
        if (lettrePendu[i] == lettre) {
            score++
            result.push(lettrePendu[i],);
            resultat.innerHTML = result;
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
