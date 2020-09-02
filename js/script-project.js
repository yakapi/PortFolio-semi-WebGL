let portfolioleft = document.querySelector('.portfolio-content-left')
let height_portfolioleft = parseInt(window.getComputedStyle(portfolioleft).getPropertyValue("height"));
let half_portfolioleft = height_portfolioleft - 150

let zone_image = document.querySelector('.zone-image')
let zone_story = document.querySelector('.zone-story')
let encard_image = document.querySelector('.encard-image-portfolio')

let pos_story = parseInt(window.getComputedStyle(zone_story).getPropertyValue("margin-top"));
let height_encard = parseInt(window.getComputedStyle(encard_image).getPropertyValue("height"));
let height_image = height_encard * 3
let limite_top = height_image - half_portfolioleft
// let limite_top = height_portfolioleft + 150
// let limite_top = pos_image + height_portfolioleft - 150


let pos_m_top = 75
let move_pos = 0
let move_pos2 = 0

let social_bar2 = document.getElementById('social-bar')
 social_bar2.addEventListener('wheel', (e)=>{
   if (e.deltaY < 0) {
     // scroll up
     if (move_pos > 0) {
       move_pos -= 50
       move_pos2 -= 25
       new_move_pos = pos_m_top - move_pos
       new_move_pos2 = pos_m_top - move_pos2
       zone_image.style.marginTop = new_move_pos + "px"
       zone_story.style.marginTop = new_move_pos2 + "px"
       if (new_move_pos2 < pos_story) {
         setTimeout(()=>{
           move_pos2 = 0
           zone_story.style.marginTop = 105 + "px"
         },150)
       }
     }
   }else if(e.deltaY > 0) {
     // scroll down
     console.log(limite_top);
     if (move_pos <= limite_top) {
       move_pos += 50
       move_pos2 += 25
       new_move_pos = pos_m_top - move_pos
       new_move_pos2 = pos_m_top - move_pos2
       zone_image.style.marginTop = new_move_pos + "px"
       zone_story.style.marginTop = new_move_pos2 + "px"
       if (new_move_pos2 < pos_story) {
         setTimeout(()=>{
           move_pos2 = 0
           zone_story.style.marginTop = 105 + "px"
         },150)
       }
     }
   }
 })
