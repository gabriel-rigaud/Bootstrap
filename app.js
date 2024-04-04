// Fonction pour générer une citation aléatoire de Blade Runner
function randomQuote() {
    const quotes = [
        "Toutes ces moments se perdront dans l'oubli comme des larmes dans la pluie.",
        "Je veux dire, comme si j'avais été fait pour ça. Je n'ai jamais rien choisi. C'est ça, être vivant ?",
        "Je veux plus de vie, fumier !",
        "Il y a des moments où se taire est un acte de foi."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Action pour le bouton "Rebooter le Monde"
$('#rebootButton').click(function() {
    const randomQuoteText = randomQuote();
    $('.jumbotron h1').text(randomQuoteText);
});

// Action pour la pagination
$('.pagination .page-link').click(function() {
    const newContent = "Nouveau contenu de la pagination";
    $('.jumbotron').html(newContent);
});

// Action pour rendre un élément de la liste groupée actif
$('.list-group-item').click(function() {
    $('.list-group-item').removeClass('active');
    $(this).addClass('active');
});

// Action pour faire progresser la progress bar
$('#progressForward').click(function() {
    let newValue = $('.progress-bar').attr('aria-valuenow');
    newValue = parseInt(newValue) + 10;
    if (newValue > 100) newValue = 100;
    $('.progress-bar').css('width', newValue + '%').attr('aria-valuenow', newValue);
});

// Action pour faire reculer la progress bar
$('#progressBackward').click(function() {
    let newValue = $('.progress-bar').attr('aria-valuenow');
    newValue = parseInt(newValue) - 10;
    if (newValue < 0) newValue = 0;
    $('.progress-bar').css('width', newValue + '%').attr('aria-valuenow', newValue);
});

// Variables pour suivre l'état des touches pressées
let keysPressed = [];

// Fonction pour vérifier l'ordre des touches pressées
function checkKeys(event) {
    keysPressed.push(event.key);
    if (keysPressed.length === 3 && keysPressed[0] === "d" && keysPressed[1] === "g" && keysPressed[2] === "c") {
        // Afficher la modale récapitulant les informations du formulaire
        $('#exampleModal').modal('show');
        keysPressed = [];
    } else if (keysPressed.length > 3) {
        keysPressed = [];
    }
}

// Ajouter un gestionnaire d'événements pour les touches pressées
$(document).keydown(checkKeys);

// Action pour valider le formulaire
$('#submitForm').click(function(event) {
    event.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val();
    if (email !== '' && password !== '') {
        // Changer aléatoirement la couleur du jumbotron
        const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        $('.jumbotron').removeClass('bg-primary bg-secondary bg-success bg-danger bg-warning bg-info bg-dark').addClass('bg-' + randomColor);
    }
});


// Démarrer la barre de progression au début
$(document).ready(function() {
    $('.progress-bar').css('width', '0%').attr('aria-valuenow', 0);
});
