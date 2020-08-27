let burger = document.getElementById('burger')
let burger_ligne1 = document.getElementById('burger-ligne1')
let burger_ligne2 = document.getElementById('burger-ligne2')
let burger_ligne3 = document.getElementById('burger-ligne3')
let menu = document.getElementById('menu')

burger.addEventListener('click', ()=>{
  burger_ligne2.classList.toggle('line-fx2')
  burger_ligne3.classList.toggle('line-fx3')
  burger_ligne1.classList.toggle('line-fx1')
  menu.classList.toggle('menu-fx')
})
let social_bar = document.getElementById('social-bar')
let competence_button = document.getElementById('competence')
let competence_menu = document.getElementById('menu-competence')
let arrow_right = document.getElementById('arrow-right')
let portfolio_button = document.getElementById('portfolio')
let portfolio_menu = document.getElementById('menu-portfolio')
let arrow_down = document.getElementById('arrow-down')
let passion_button = document.getElementById('passion')
let passion_menu = document.getElementById('menu-music')
let arrow_up = document.getElementById('arrow-up')
let contact_button = document.getElementById('contact')
let contact_menu = document.getElementById('menu-contact')
let arrow_right2 = document.getElementById('arrow-right2')
// Affiche Compétences
competence_button.addEventListener('click', ()=>{
  let menu_portfolio_anim = document.getElementsByClassName('menu-portfolio-anim')
  let menu_music_anim = document.getElementsByClassName('menu-music-anim')
  let menu_contact_anim = document.getElementsByClassName('menu-contact-anim')
  competence_menu.classList.toggle('menu-competence-anim')
  arrow_right.classList.toggle('arrow-right-fx')
  burger_ligne2.classList.toggle('line-fx2')
  burger_ligne3.classList.toggle('line-fx3')
  burger_ligne1.classList.toggle('line-fx1')
  menu.classList.toggle('menu-fx')
  if (menu_portfolio_anim.length > 0) {
    portfolio_menu.classList.toggle('menu-portfolio-anim')
    arrow_down.classList.toggle('arrow-down-fx')
  }else if (menu_music_anim.length > 0) {
    passion_menu.classList.toggle('menu-music-anim')
    arrow_up.classList.toggle('arrow-up-fx')
    social_bar.classList.toggle('left-100')
  }else if (menu_contact_anim.length > 0) {
    contact_menu.classList.toggle('menu-contact-anim')
    arrow_right2.classList.toggle('arrow-right-fx')
  }else {
    console.log('existe pas');
  }
})
arrow_right.addEventListener('click', ()=>{
  competence_menu.classList.toggle('menu-competence-anim')
  arrow_right.classList.toggle('arrow-right-fx')
})

// Affiche Portfolio
portfolio_button.addEventListener('click', ()=>{
  let menu_competence_anim = document.getElementsByClassName('menu-competence-anim')
  let menu_music_anim = document.getElementsByClassName('menu-music-anim')
  let menu_contact_anim = document.getElementsByClassName('menu-contact-anim')
  portfolio_menu.classList.toggle('menu-portfolio-anim')
  arrow_down.classList.toggle('arrow-down-fx')
  burger_ligne2.classList.toggle('line-fx2')
  burger_ligne3.classList.toggle('line-fx3')
  burger_ligne1.classList.toggle('line-fx1')
  menu.classList.toggle('menu-fx')
  if (menu_competence_anim.length > 0) {
    competence_menu.classList.toggle('menu-competence-anim')
    arrow_right.classList.toggle('arrow-right-fx')
  }else if (menu_music_anim.length > 0) {
    passion_menu.classList.toggle('menu-music-anim')
    arrow_up.classList.toggle('arrow-up-fx')
    social_bar.classList.toggle('left-100')
  }else if (menu_contact_anim.length > 0) {
    contact_menu.classList.toggle('menu-contact-anim')
    arrow_right2.classList.toggle('arrow-right-fx')
  }else {
    console.log('existe pas');
  }
})
arrow_down.addEventListener('click', ()=>{
  portfolio_menu.classList.toggle('menu-portfolio-anim')
  arrow_down.classList.toggle('arrow-down-fx')
})
// Affiche Passion
passion_button.addEventListener('click', ()=>{
  let menu_competence_anim = document.getElementsByClassName('menu-competence-anim')
  let menu_portfolio_anim = document.getElementsByClassName('menu-portfolio-anim')
  let menu_contact_anim = document.getElementsByClassName('menu-contact-anim')
  passion_menu.classList.toggle('menu-music-anim')
  arrow_up.classList.toggle('arrow-up-fx')
  burger_ligne2.classList.toggle('line-fx2')
  burger_ligne3.classList.toggle('line-fx3')
  burger_ligne1.classList.toggle('line-fx1')
  menu.classList.toggle('menu-fx')
  social_bar.classList.toggle('left-100')
  if (menu_competence_anim.length > 0) {
    competence_menu.classList.toggle('menu-competence-anim')
    arrow_right.classList.toggle('arrow-right-fx')
  }else if (menu_portfolio_anim.length > 0) {
    portfolio_menu.classList.toggle('menu-portfolio-anim')
    arrow_down.classList.toggle('arrow-down-fx')
  }else if (menu_contact_anim.length > 0) {
    contact_menu.classList.toggle('menu-contact-anim')
    arrow_right2.classList.toggle('arrow-right-fx')
  }else {
    console.log('existe pas');
  }
})
arrow_up.addEventListener('click', ()=>{
  passion_menu.classList.toggle('menu-music-anim')
  arrow_up.classList.toggle('arrow-up-fx')
  social_bar.classList.toggle('left-100')
})
// Affiche Contact
contact_button.addEventListener('click', ()=>{
  let menu_competence_anim = document.getElementsByClassName('menu-competence-anim')
  let menu_portfolio_anim = document.getElementsByClassName('menu-portfolio-anim')
  let menu_passion_anim = document.getElementsByClassName('menu-music-anim')
  contact_menu.classList.toggle('menu-contact-anim')
  arrow_right2.classList.toggle('arrow-right-fx')
  burger_ligne2.classList.toggle('line-fx2')
  burger_ligne3.classList.toggle('line-fx3')
  burger_ligne1.classList.toggle('line-fx1')
  menu.classList.toggle('menu-fx')
  if (menu_competence_anim.length > 0) {
    competence_menu.classList.toggle('menu-competence-anim')
    arrow_right.classList.toggle('arrow-right-fx')
  }else if (menu_portfolio_anim.length > 0) {
    portfolio_menu.classList.toggle('menu-portfolio-anim')
    arrow_down.classList.toggle('arrow-down-fx')
  }else if (menu_passion_anim.length > 0) {
    passion_menu.classList.toggle('menu-music-anim')
    arrow_up.classList.toggle('arrow-up-fx')
    social_bar.classList.toggle('left-100')
  }else {
    console.log('existe pas');
  }
})
