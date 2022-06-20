const plat = 20;
const boissonAlcoolisee = 8;
const boissonNonAlcoolisee = 5;
const majeur = 18;

// Création des variables avec choix utilisateur
let age = prompt("Quel âge avez vous  (Uniquement en chiffre)?");

let credit = prompt("Combien d'argent avez-vous ?");

let choix;

// BOUCLE WHILE TANT QUE LE CREDIT EST SUPERIEUR A 5 ET QUE LE CHOIX EST DIFFERENT DE SORTIR
do {
  //CHoix utilisateur
  choix = prompt(
    `Vous disposez de ${credit} euros.
      -----------------------------------
      Que voulez vous choisir ?
      -----------------------------------
      1/ Plat (20 euros)
      2/ Boisson Alcoolisée (Majeur uniquement, 8 euros)
      3/ Boisson non Alcoolisée (5 euros)
      4/ Sortir
      ------------------------------------
  `
  );

  // Début des conditions des choix de l'utilisateur
  if (Number(choix) === 1 || choix.toLowerCase() == "plat") {
    // Vérification du crédit de l'utilisateur
    if (credit >= plat) {
      credit = credit - plat;
      alert("Voici votre plat bien chaud il vous reste " + credit + " euros");
    } else {
      alert("Commande refusée argent insuffisant.");
    }
  } else if (choix == "2" || choix.toLocaleLowerCase == "boisson alcoolisée") {
    if (age < majeur) {
      alert("Tu n'as pas l'âge pour boire de l'alcool");
    } else if (credit < boissonAlcoolisee) {
      alert("Commande refusée argent insuffisant.");
    } else {
      credit -= boissonAlcoolisee;
      alert("Commande acceptée il vous reste " + credit + " euros");
    }
  } else if (
    choix == "3" ||
    choix.toLocaleLowerCase == "boisson non alcoolisée"
  ) {
    if (credit >= boissonNonAlcoolisee) {
      credit -= boissonNonAlcoolisee;
      alert("Voici votre soda il vous reste " + credit + " euros");
    } else {
      alert("Commande refusée argent insuffisant");
    }
  } else if (choix == "4") {
    alert("A bientot");
  } else {
    alert("Je n'ai pas compris veuillez réessayer");
  }
} while (credit >= boissonNonAlcoolisee && choix != "4");