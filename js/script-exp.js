// console.log(all_box);
// let array_size_all_box = [];
// for (var i = 0; i < all_box.length; i++) {
//   size_all_box = parseInt(window.getComputedStyle(all_box[i]).getPropertyValue("height"));
//   array_size_all_box.push(size_all_box)
// }
// if (array_size_all_box[1] < array_size_all_box[0]) {
//     all_box[1].style.height = array_size_all_box[0] + "px"
// }
//
// if (array_size_all_box[0] < array_size_all_box[1]) {
//   all_box[0].style.height = array_size_all_box[1]
// }
let box_acs = document.getElementById('box-acs')
let box_illico = document.getElementById('box-illico')

let size_box_acs = parseInt(window.getComputedStyle(box_acs).getPropertyValue("height"));
let size_box_illico = parseInt(window.getComputedStyle(box_illico).getPropertyValue("height"));

if (size_box_acs < size_box_illico) {
  box_acs.style.height = size_box_illico + "px"
}
if (size_box_illico < size_box_acs) {
  box_illico.style.height = size_box_acs + "px"
}
