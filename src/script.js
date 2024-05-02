//Crée un tableau de mot
const tableauMot = ['proute', 'banane', 'voiture', 'cacahuete', 'serpent', 'kebab','ordinateur','programmation','intelligence','algorithmique','internet','openai','apprentissage','intelligenceartificielle','machinelearning','python','javascript','cryptographie','communication','science','technologie'];
//crée un tableau de lettre que l'on va utiliser pour faire les bouttons
const tableauLettre = 'abcdefghijklmnopqrstuvwxyz'.split('');
const clavier = document.querySelector('.game');
const affichage = document.querySelector('.affichage');
const affichageLettreJouer = document.querySelector('.lettreJouer');
let score = 0;
let manque = 0;
//récupérer un mot aleatoire dans le tableau
let mot = tableauMot[Math.floor(Math.random() * tableauMot.length)];
//Creation de l'affichage des espace pour que le joueur sache combien il y'a de lettre a trouver
const motPendu = Array.from({ length: mot.length }, () => '_');

//Boucle Pour crée les boutton de mon clavier pour que le joueur puisse jouer
for (const lettre of tableauLettre) {
    const boutton = document.createElement('button');
    boutton.className = 'boutton';
    boutton.id = lettre;
    boutton.innerHTML = lettre;
    boutton.addEventListener('click', matchLettre);
    clavier.appendChild(boutton);
}

//affiché le nombre de lettre du mot
motPendu.forEach((_, i) => {
    const guess = document.createElement('span');
    guess.className = 'guess';
    guess.innerHTML = '_';
    guess.id = i;
    affichage.appendChild(guess);
});

function matchLettre() {
    // Empêcher les clics multiples sur la même lettre
    const bouttonClick = this;
    if (bouttonClick .disabled) return; 
    bouttonClick .disabled = true;
    //récupérer le caractére du joueur
    let lettre = bouttonClick.id;
    const lettrePendu = mot.split('');
    const pendu = document.querySelector('img')
    correspondanceTrouvee = false;
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
            correspondanceTrouvee = true;
        };
    };
    //si aucun match mettre une erreur et un baton
    if (!correspondanceTrouvee) {
        manque++;
        pendu.src = 'img/pendu' + manque + '.svg';
        // Ajoute la classe CSS pour la couleur incorrecte
        bouttonClick.classList.add('incorrect'); 
    } else {
         // Ajoute la classe CSS pour la couleur correcte
         bouttonClick.classList.add('correct');
    }
    //si les point sont égale au nombre de lettre dans le mot alors victoire
    if (score == mot.length) {
        afficherModalVictoire()
        // afficher une modale victoire
    };
    if (manque == 10) {
        afficherModalDefaite()
    };
};

// Afficher la modal de victoire
function afficherModalVictoire() {
    document.getElementById('modalVictoire').style.display = 'block';
}

// Afficher la modal de défaite
function afficherModalDefaite() {
    document.getElementById('modalDefaite').style.display = 'block';
}

// Fermer la modal lorsqu'on clique sur le bouton de fermeture ou en dehors de la modal
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}
