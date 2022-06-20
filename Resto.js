const Plat = 20;
const BoissonNonAlcoolisée = 5;
const BoissonAlcoolisée = 8;
const sortie = "A bientot";

let Age = prompt("saisissez votre age");
let Credit = prompt("combien d'argent avez vous");
let Choix;

while (Credit >= 5 && Choix != 4) {
    Choix = prompt(
        `Vous disposez de ${Credit} euros.
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
    if (Choix == "1") {
        if (Credit > Plat) {
            Credit = Credit - Plat;
            alert("Commande acceptée voici votre plat il vous reste " + Credit + " euros ");
        }

        else {
            alert("Vous n avez pas assez d argent commandez autre chose");
        }
    }
    if (Choix == "2") {
        if (Age < 18) {
            alert("Vous n avez pas l age de boire de l alcool");
        }
        else if (Credit < BoissonAlcoolisée) {
            alert("Va travailler");
        }
        else {
            Credit >= BoissonAlcoolisée;
            Credit = Credit - BoissonAlcoolisée;
            alert(`Commande acceptée voici votre boisson il vous reste ${Credit} euros}`);
        }
    }
    if (Choix == "3") {
        if (Credit >= BoissonNonAlcoolisée)
            Credit = Credit - BoissonNonAlcoolisée;
        alert("Commande acceptée voici votre soda il vous reste" + Credit + "euros");
    }
    else {
        if (Credit < BoissonNonAlcoolisée){
        alert("non, reviens demain");
        }
    }
    if  (Choix == "4") {
        alert(" A bientot ");
    }
}

