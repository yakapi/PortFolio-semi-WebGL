// récupération des fléches
let arrow_left_music = document.getElementById('arrow-left-music')
let arrow_right_music = document.getElementById('arrow-right-music')
let arrow_right_festival = document.getElementById('arrow-right-festival')
let arrow_left_festival = document.getElementById('arrow-left-festival')
// récupération des zones d'affichage (screen, image festival et music, barrette-coulissante festival et music)
let over_zone_festival = document.querySelector('.over-zone-festival')
let festival_zone = document.querySelectorAll('.festival-zone')
let music_zone = document.querySelectorAll('.music-length')
let festival_coulissant = document.querySelector('.zone-festival')
let music_coulissant = document.querySelector('.zone-music')
// Définition du nombre d'élément déja affiché
let over_size_festival = parseInt(window.getComputedStyle(over_zone_festival).getPropertyValue("width"));
let approx_nb_oversize_festival = over_size_festival / 210
let nb_oversize_festival = Math.round(approx_nb_oversize_festival)
// Définiton du nombre total d'élement + nombre de click possible
let size_festival_coulissant = festival_zone.length
let nb_clickright_coulissant = size_festival_coulissant - nb_oversize_festival
let size_music_coulissant = music_zone.length
let nb_clickright_mcoulissant = size_music_coulissant - nb_oversize_festival
// Mise en place du score de localisation des barrette coulissante
let score_festival_coulissant = 0
let movement_festival_coulissant = 0
let score_music_coulissant = 0
let movement_music_coulissant = 0
// function du click de la flèche droite (festival)
arrow_right_festival.addEventListener('click', ()=>{
  if (score_festival_coulissant != nb_clickright_coulissant) {
    score_festival_coulissant += 1
    movement_festival_coulissant += 210
    festival_coulissant.style.transform = "translateX(-"+movement_festival_coulissant+"px)"
  }
})
//function du click de la flèche gauche (festival)
arrow_left_festival.addEventListener('click', ()=>{
  if (score_festival_coulissant != 0){
    score_festival_coulissant -= 1
    movement_festival_coulissant -= 210
    festival_coulissant.style.transform = "translateX(-"+movement_festival_coulissant+"px)"
    }
})
// function du click de la flèche droite (music)
arrow_right_music.addEventListener('click', ()=>{
  if (score_music_coulissant != nb_clickright_mcoulissant) {
    score_music_coulissant += 1
    console.log(score_music_coulissant);
    movement_music_coulissant += 210
    music_coulissant.style.transform = "translateX(-"+movement_music_coulissant+"px)"
  }
})
// function du click de la flèche gauche (music)
arrow_left_music.addEventListener('click', ()=>{
  if (score_music_coulissant != 0) {
    score_music_coulissant -= 1
    movement_music_coulissant -= 210
    music_coulissant.style.transform = "translateX(-"+movement_music_coulissant+"px)"
  }
})
