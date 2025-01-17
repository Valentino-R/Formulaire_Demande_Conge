//récuperation de l'email du Msp
let baliseEmailMsp = document.getElementById("emailmsp")
let emailMsp = baliseEmailMsp.value

//récuperation de l'email du Rs
let baliseEmailRs = document.getElementById("emailrs")
let emailRs = baliseEmailRs.value

//récuperation de la réponce du msp
let baliseReponceMsp = document.getElementById("reponsemsp")
let reponceMsp = baliseReponceMsp.value

//récuperation de la réponce du msp
let baliseReponceRs = document.getElementById("reponsers")
let reponceRs = baliseReponceRs.value

//récupération des info du bénéficiaire
let infoBenef ={
    "nom" : document.getElementById("nom").value,
    "prenom" : document.getElementById("prenom").value,
    "email" : document.getElementById("emailbenef").value,
}

//récupération des info de la demande de congé
let infoDemande = {
    "datedebut" : document.getElementById("datedebut").value,
    "datefin" : document.getElementById("datefin").value,
    "heurdebut" : document.getElementById("heurdebut").value,
    "heurfin" : document.getElementById("heurfin").value,
    "motif" : document.getElementById("motif").value,
}