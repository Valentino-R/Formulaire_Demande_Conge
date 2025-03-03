//récuperation de l'email du Msp
let baliseEmailMsp = document.getElementById("emailmsp")
let emailMsp = baliseEmailMsp.value

//récuperation de l'email du Rs
let baliseEmailRs = document.getElementById("emailrs")
let emailRs = baliseEmailRs.value

//récuperation de la réponce du msp
//let baliseReponceMsp = document.getElementById("reponsemsp")
//let reponceMsp = baliseReponceMsp.value$

//récuperation de la réponce du msp
//let baliseReponceRs = document.getElementById("reponsers")
//let reponceRs = baliseReponceRs.value

//mets la date de base du clalendrier à la date du jour
document.getElementById("datedebut").value = new Date()

//mets la date de base du clalendrier à la date du jour
document.getElementById("datefin").value = new Date()

//mets l'heure de base du selcteur d'heure à 8h00
document.getElementById("heurdebut").value = "08:00"

//mets l'heure de base du selcteur d'heure à 8h00
document.getElementById("heurfin").value = "08:00"

//
document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(document.getElementById("typeabs").value)
    
//récupération des info du bénéficiaire
let infoBenef ={
    "nom" : document.getElementById("nom").value,
    "prenom" : document.getElementById("prenom").value,
    "email" : document.getElementById("emailbenef").value,
}

//récupération des info de la demande de congé.
let infoDemande = {
    "typeabs" : document.getElementById("typeabs").value,
    "datedebut" : document.getElementById("datedebut").value,
    "datefin" : document.getElementById("datefin").value,
    "heurdebut" : document.getElementById("heurdebut").value,
    "heurfin" : document.getElementById("heurfin").value,
    "motif" : document.getElementById("motif").value,
}

//Masquage du formulair pout la simulation de changement de page   
document.getElementById("form").classList.add("hide")

//Démasquage de la partie validation du msp
document.getElementById("simumsp").classList.remove("hide")

//transpher des info saisie dans le formulaire sur la "nouvelle page"
document.getElementById("infoconge").innerHTML = `<div>
        <p>Info demande de congé</p>
        <p>Nom/Prénom: ${infoBenef.prenom +" "+infoBenef.nom} </p>
        <p>Email: ${infoBenef.email} </p>
        <p>Type d'absence: ${infoDemande.typeabs} </p>
        <p>Date: Du ${infoDemande.datedebut +" au "+ infoDemande.datefin}  </p>
        <p>Heure: De ${infoDemande.heurdebut +" à "+ infoDemande.heurfin} </p>
        <p>Motif: ${infoDemande.motif} </p>
    </div>`
})



