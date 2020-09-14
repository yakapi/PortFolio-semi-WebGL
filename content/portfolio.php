<?php
  $project_name = $_GET['project_name'];
  if ($project_name == "animopolis") {
    $image1 = "img/mockup/animopolis-iMac.png";
    $alt1 = "iMac-Animopolis";
    $image2 = "img/mockup/animopolis-macbook.png";
    $alt2 = "MacBook-Animopolis";
    $image3 = "img/mockup/Animopolis-XR.png";
    $alt3 = "iPhone-Animopolis";

    $titre = "ANIMOPOLIS";
    $date = "Février 2020";
    $categorie = "Site Vitrine";
    $propos = "A partir d’un projet commandité par Animopolis, il m’a été demandé de réaliser un site-vitrine de son espace d’animalerie.
L’objectif était de concevoir un site-vitrine moderne et respectant la charte graphique de son image de marque.";
    $moyens = 'content/moyens/moyen-animopolis.php';
    $link = "https://animopolis.fr";
    $link_title = "Animopolis";
  }elseif ($project_name == "bombermeuh") {
    $image1 = "img/mockup/iMac-bombermeuh.png";
    $alt1 = "iMac-Bombermeuh";
    $image2 = "img/mockup/macbook-bombermeuh.png";
    $alt2 = "MacBook-Bombermeuh";
    $image3 = "img/mockup/macbook-bombermeuh2.png";
    $alt3 = "MacBook-Bombermeuh2";

    $titre = "BOMBERMEUH";
    $date = "Novembre 2019";
    $categorie = "Javascript sans librairie ni canvas";
    $propos = "A partir d’un projet de groupe, il m’a été demandé de réaliser un site-vitrine pour présenter un futur jeu mobile. L’objectif était de réaliser un site « One Page » permettant de présenter le jeu et les nouvelles mises à jour ainsi que d’avoir un aperçu démo du jeu.";
    $moyens = 'content/moyens/moyen-bombermeuh.php';
    $link = "https://bombermeuh.victorbarlier.fr/";
    $link_title = "Bombermeuh";
  }elseif ($project_name == "votekick") {
    $image1 = "img/mockup/iMac-votekick.png";
    $alt1 = "iMac-Votekick";
    $image2 = "img/mockup/macbook-votekick.png";
    $alt2 = "MacBook-Votekick";
    $image3 = "img/mockup/VoteKick-XR.png";
    $alt3 = "iPhone-Votekick";

    $titre = "VoteKick DJ";
    $date = "Mai 2020";
    $categorie = "Site Vitrine et Booking pour DJ";
    $propos = "A partir d’un projet commandité par un DJ, il m’a été demandé de réaliser un site-vitrine correspondant a son style de musique.
L’objectif était de concevoir un site-vitrine moderne et respectant la charte graphique de son image de marque.";
    $moyens = 'content/moyens/moyen-votekick.php';
    $link = "http://victorbarlier.com/votekick-dev/";
    $link_title = "Votekick";
  }

 ?>

<div class="portfolio-content-left">
  <div class="zone-image">
    <!-- iMac -->
    <div class="encard-image-portfolio">
      <img src="<?php echo $image1 ?>" alt="<?php echo $alt1 ?>">
    </div>
    <!-- MacBook -->
    <div class="encard-image-portfolio">
      <img src="<?php echo $image2 ?>" alt="<?php echo $alt2 ?>">
    </div>
    <!-- iPhone -->
    <div class="encard-image-portfolio">
      <img src="<?php echo $image3 ?>" alt="<?php echo $alt3 ?>">
    </div>
  </div>
</div>
<div class="portfolio-content-right">
    <div class="zone-story">
      <h2><?php echo $titre ?></h2>
      <div class="date-creation marbox">
        <h4 class="title-story">DATE</h4>
        <p class="marp"><?php echo $date ?></p>
      </div>
      <div class="categorie marbox">
        <h4 class="title-story">Catégorie</h4>
        <p class="marp"><?php echo $categorie ?></p>
      </div>
      <div class="a-propos marbox">
        <h4 class="title-story">A PROPOS DU PROJET</h4>
        <p class="marp"><?php echo $propos ?></p>
      </div>
      <div class="moyen-utilise marbox">
        <h4 class="title-story">Moyens Utilisé</h4>
        <ul class="marp">
          <?php require $moyens ?>
        </ul>
      </div>
      <div class="voir-plus marbox">
        <a class="btn-voir" href="<?php echo $link ?>" target="_blank" title="<?php echo $link_title ?>">Voir Plus</a>
      </div>
      <div class="scroll marbox">
        <p>Scroll Down</p>
      </div>
    </div>
</div>
