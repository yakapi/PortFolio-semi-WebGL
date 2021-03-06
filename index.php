<?php
$menu = false;
$content_foot = 'développeur web junior';
$competene_color = 'royalblue';
 ?>
<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Barlier Victor :: Accueil</title>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body id="bdy">
    <script type="text/javascript" src="js/redirect.js"></script>
    <!-- Loader -->
    <div id="loader" class="loader">
      <div class="encard-loader">
        <img src="img/loader1.svg" alt="loader">
      </div>
    </div>
    <header class="header">
      <!-- WebGL -->
      <div id="scene-container"></div>
      <div id="star-container"></div>
      <!-- Contenu Central -->
      <div id="content-container">
        <h1 class="name-title">BARLIER VICTOR</h1>
      </div>
      <!-- Barre Social -->
      <div id="social-bar">
        <ul class="m-social-bar">
          <li><a class="encard-social-bar" target="_blank" href="https://www.linkedin.com/in/victor-barlier"><img src="img/linkedin-white.svg" alt="LinkedIn-White"></a></li>
          <li><a class="encard-social-bar" target="_blank" href="https://www.facebook.com/victor.barlier"><img src="img/facebook-white.svg" alt="Facebook-White"></a></li>
          <li><a class="encard-social-bar" target="_blank" href="https://www.instagram.com/d_cay.420"><img src="img/instagram-white.svg" alt="Instagram-White"></a></li>
          <li><a class="encard-social-bar" target="_blank" href="https://github.com/yakapi"><img src="img/github-white.svg" alt="Github-White"></a></li>
        </ul>
      </div>
      <!-- Barre de Navigation -->
      <nav>
        <h2 class="name-title spec-size">BV</h2>
        <div id="burger" class="encard-burger">
          <div id="burger-ligne1" class="b-line1"></div>
          <div id="burger-ligne2" class="b-line2"></div>
          <div id="burger-ligne3" class="b-line3"></div>
        </div>
      </nav>
      <!-- Barre type Footer -->
      <div class="bottom-header">
        <h2 class="glitch" data-text="[ <?php echo $content_foot ?> ]">[ <?php echo $content_foot ?> ]</h2>
      </div>
      <!-- Menu de Navigation -->
      <div id="menu" class="menu">
        <!-- Main Navigation -->
        <ul class="menu-navigation">
          <?php require 'content/main-menu.php'; ?>
        </ul>
        <!-- Social Media -->
        <ul class="menu-social">
          <li><a class="encard-social" href="https://www.linkedin.com/in/victor-barlier"><img src="img/linked.svg" alt="LinkedIn"></a></li>
          <li><a class="encard-social" href="https://www.facebook.com/victor.barlier"><img src="img/facebook.svg" alt="Facebook"></a></li>
          <li><a class="encard-social" href="https://www.instagram.com/d_cay.420"><img src="img/instagram.svg" alt="Instagram"></a></li>
          <li><a class="encard-social" href="https://github.com/yakapi"><img src="img/github.svg" alt="Github"></a></li>
        </ul>
      </div>
      <!-- Menu Compétence -->
      <div id="menu-competence" class="menu-competence">
        <div id="arrow-right" class="encard-arrow-right">
          <img src="img/arrow-right.svg" alt="flèche-droite-compétences">
        </div>
        <div class="content-competence">
          <div class="front-end">
            <h3>Front-End</h3>
            <div class="front-array">
              <?php require 'content/front-end.php'; ?>
            </div>
          </div>
          <div class="back-end">
            <h3>Back-End</h3>
            <div class="back-array">
              <?php require 'content/back-end.php'; ?>
            </div>
          </div>
          <div class="framework">
            <h3>Framework/CMS</h3>
            <div class="framework-array">
              <?php require 'content/framework.php'; ?>
            </div>
          </div>
          <div class="logiciel">
            <h3>Logiciel</h3>
            <div class="logiciel-array">
              <?php require 'content/logiciel.php'; ?>
            </div>
          </div>
        </div>
      </div>
      <!-- Menu Portfolio -->
      <div id="menu-portfolio" class="menu-portfolio">
        <div id="arrow-down" class="encard-arrow-down">
          <img src="img/arrow-down.svg" alt="flèche-bas-portfolio">
        </div>
        <div class="project-box">
          <div class="project-arrow-left"></div>
          <div class="project-content">
            <?php require 'content/project.php'; ?>
          </div>
          <div class="project-arrow-right"></div>
        </div>
      </div>
      <!-- Menu Music -->
      <div id="menu-music" class="menu-music">
        <div id="arrow-up" class="encard-arrow-up">
          <img src="img/arrow-up.svg" alt="flèche-bas-music">
        </div>
        <div class="music-box">
          <div class="music-button">
            <a class="music-link" href="passion.php"><span class="glitch music-txt" data-text="Voir Plus">Voir Plus</span></a>
          </div>
          <div class="music-content">
            <div class="music-zone">
              <iframe width="100%" height="100%" src="https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fericprydz%2Feric-prydz-presents-epic-radio-on-beats-1-ep24%2F" frameborder="0" ></iframe>
            </div>
            <div class="music-zone">
              <iframe width="100%" height="100%" src="https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fadambeyer%2Fdcr515-drumcode-radio-live-adam-beyer-studio-mix-recorded-in-ibiza%2F" frameborder="0" ></iframe>
            </div>
            <div class="music-zone">
              <iframe width="100%" height="100%" src="https://www.mixcloud.com/widget/iframe/?light=1&feed=%2FAmelie_Lens%2Famelie-lens-awakenings-festival-2020-online-weekender%2F" frameborder="0" ></iframe>
            </div>
          </div>
        </div>
      </div>
      <!-- Menu Contact -->
      <div id="menu-contact" class="menu-contact">
        <div id="arrow-right2" class="encard-arrow-right">
          <img src="img/arrow-right.svg" alt="flèche-droite-compétences">
        </div>
        <div class="contact-box">
          <h3>Contactez Moi</h3>
          <form id="contact-form" class="contact-form" action="index.php" method="post" >
            <div class="contact-input">
              <label for="contact-prenom">votre prénom:</label>
              <input id="contact-prenom" class="contactput" type="text" name="prenom" placeholder="ex: Jean">
              <div class="error-zone">

              </div>
            </div>
            <div class="contact-input">
              <label for="contact-nom">votre nom:</label>
              <input id="contact-nom" class="contactput" type="text" name="nom" placeholder="ex: valjean">
              <div class="error-zone">

              </div>
            </div>
            <div class="contact-input">
              <label for="contact-mail">votre e-mail:</label>
              <input id="contact-mail" class="contactput" type="text" name="email" placeholder="ex: jean@valjean.fr">
              <div class="error-zone">

              </div>
            </div>
            <div class="contact-input">
              <label for="contact-message">votre message:</label>
              <textarea id="contact-message" class="message-area" name="message"></textarea>
              <div class="error-zone">

              </div>
            </div>
            <div class="contact-input">
              <div class="submit-zone">
                <button class="contact-submit" type="submit" name="contact-sub" value="Envoyer">Envoyer</button>
              </div>
            </div>
            <div class="contact-input">
              <div id="final-response" class="error-zone"></div>
            </div>
          </form>
        </div>
      </div>
    </header>
    <script type="text/javascript" src="js/three.min.js"></script>
    <script type="text/javascript" src="js/script-effect.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="js/burger.js"></script>
    <script type="text/javascript" src="js/mail.js"></script>
    <script type="text/javascript" src="js/loader.js"></script>
  </body>
</html>
