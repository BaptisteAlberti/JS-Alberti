const form = document.querySelector("form");

const errorMessage = document.querySelector("#error-message");

form.addEventListener("submit", (event) => {
    //Vérifier que les champs du formulaire sont valides.
    verifieChamps();
    //Si les champs du formulaire sont valides, soumettre le formulaire.
    event.preventDefault();
});

//Si les champs sont vides, renvoyer un message d'erreur. 
function verifieChamps() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const messageInput = document.getElementById("message").value;
    
    if (firstName ==="" || lastName==="" || message==="") {
        errorMessage.style.display = "block";
    } 
    else {
        const div_container = document.createElement("div");
        const comment_container = document.createElement("div");
        const user = document.createElement("h3");
        user.innerText = firstName +" "+ lastName;
        const message_container = document.createElement("div");
        const message = document.createElement("p");
        message.innerText = messageInput;

        const commentList = document.querySelector("#comment-list");

        div_container.appendChild(comment_container);
        comment_container.appendChild(user);
        comment_container.appendChild(message_container);
        message_container.appendChild(message);
        commentList.appendChild(div_container);
        console.log(message)

        div_container.className = "flex space-x-4 text-sm text-gray-500";
        comment_container.className = "flex-1 py-10 ";
        user.className = "font-medium text-gray-900";
        message_container.className = "prose prose-sm mt-4 max-w-none text-gray-500";
        
}};


//Une fois le commentaire correctement créé, il faut l'ajouter à ceux déjà existants.

//Une fois le commentaire envoyé, il faut supprimer le contenu des champs du formulaire. 

//La page ne doit pas se recharger quand un utilisateur écrit un commentaire. 
