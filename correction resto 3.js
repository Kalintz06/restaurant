// CREATION DE MES FONCTIONS

function restoCommande() {
    /**
     * ATELIER RESTO COMMANDE P1
     */
  
    // Création des constantes
    const plat = 20;
    const boissonAlcoolisee = 8;
    const boissonNonAlcoolisee = 5;
    const majeur = 18;
  
    // Création des variables avec choix utilisateur
    let age = prompt("Quel âge avez vous  (Uniquement en chiffre)?");
  
    let credit = prompt("Combien d'argent avez-vous ?");
  
    boucleCommande(
      plat,
      boissonNonAlcoolisee,
      boissonAlcoolisee,
      credit,
      age,
      majeur
    );
  }
  
  function verifCredit(credit) {
    if (credit > 20) {
      alert("Vous pouvez tout commander !");
    } else if (credit > 8) {
      alert("Vous pouvez commander un Soda ou une boisson alcoolisée");
    } else {
      alert("Vous pouvez commander un Soda");
    }
  }
  
  // FONCTION BOUCLE
  function boucleCommande(
    plat,
    boissonNonAlcoolisee,
    boissonAlcoolisee,
    credit,
    age,
    majeur
  ) {
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
      } else if (
        choix == "2" ||
        choix.toLocaleLowerCase == "boisson alcoolisée"
      ) {
        if (age < majeur) {
          alert("Tu n'as pas l'âge pour boire de l'alcool");
        } else if (credit < boissonNonAlcoolisee) {
          alert("Commande refusée argent insuffisant.");
        } else {
          credit -= boissonNonAlcoolisee;
          alert("Commande acceptée il vous reste " + credit + " euros");
        }
      } else if (
        choix == "3" ||
        choix.toLocaleLowerCase == "boisson non alcoolisée"
      ) {
        if (credit >= boissonAlcoolisee) {
          credit -= boissonAlcoolisee;
          alert("Voici votre soda il vous reste " + credit + " euros");
        } else {
          alert("Commande refusée argent insuffisant");
        }
      } else if (choix == "4") {
        alert("A bientot");
      } else {
        alert("Je n'ai pas compris veuillez réessayer");
      }
      // APPEL DE MA FONCTION VERIFCREDIT
      verifCredit(credit);
    } while (credit >= boissonAlcoolisee && choix != "4");
  }
  // Fonction principale
  
  // APPEL DE MA FONCTION PRINCIPAL
  restoCommande();
  scriptP3.js
  4 Ko