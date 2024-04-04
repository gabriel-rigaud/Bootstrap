<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<!-- Header -->
<header>
   <?php include 'header.php'; ?>
</header>

<!-- Body -->
<div class="container">
    <h1>Contenu de la page</h1>
    <p>Ceci est le contenu principal de la page.</p>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#papillonModal">
        Papillon
    </button>
    <button type="button" class="btn btn-danger" id="rebootButton">
        Rebooter le Monde
    </button>
    <div class="jumbotron mt-3">
        <h1 class="display-4">Bonjour, monde!</h1>
        <p class="lead">Ceci est un simple jumbotron.</p>
        <hr class="my-4">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>

    <!-- Liste groupée à droite -->
    <div class="list-group mt-3">
        <a href="#" class="list-group-item list-group-item-action active">Élément 1</a>
        <a href="#" class="list-group-item list-group-item-action">Élément 2</a>
        <a href="#" class="list-group-item list-group-item-action">Élément 3</a>
        <a href="#" class="list-group-item list-group-item-action">Élément 4</a>
        <a href="#" class="list-group-item list-group-item-action">Élément 5</a>
    </div>

    <!-- Boutons de la progress bar -->
    <div class="mt-3">
        <button type="button" class="btn btn-primary mr-2" id="progressForward">Avancer</button>
        <button type="button" class="btn btn-primary" id="progressBackward">Reculer</button>
        <div class="progress mt-3">
            <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>

    <!-- Formulaire -->
    <div class="mt-3">
        <form>
            <div class="form-group">
                <label for="email">Email :</label>
                <input type="email" class="form-control" id="email" placeholder="Entrez votre email">
            </div>
            <div class="form-group">
                <label for="password">Mot de passe :</label>
                <input type="password" class="form-control" id="password" placeholder="Entrez votre mot de passe">
            </div>
            <button type="submit" class="btn btn-primary" id="submitForm">Valider</button>
        </form>
    </div>
</div>

<!-- Footer -->
<footer class="bg-light text-center text-lg-start">
    <?php include 'footer.php'; ?>
</footer>


</body>
</html>