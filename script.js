const form = document.getElementById("error-message")

form.addEventListener("submit", (event) => {
    //Vérifier que les champs du formulaire sont valides.

    //Si les champs du formulaire sont valides, soumettre le formulaire.
    event.preventDefault();
});

//Si les champs sont vides, renvoyer un message d'erreur. 
function VerifieChamps() {
    if (firstName ="") {
    alert ("Tous les champs doivent être remplis.");
    return false;
} else {
    errorMessage.style.display = "none";
    return true;
}};

//Une fois le commentaire correctement créé, il faut l'ajouter à ceux déjà existants.

//Une fois le commentaire envoyé, il faut supprimer le contenu des champs du formulaire. 

//La page ne doit pas se recharger quand un utilisateur écrit un commentaire. 
