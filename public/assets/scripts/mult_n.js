/* eslint-disable no-unused-vars */
function isMulti8(num){
  return num % 8 === 0 ? `${num} 👍 truthy` : `↓${num - (num % 8)} or ↑${num - (num % 8) + 8}`
}
// !important fn à charger dans le context du DOM
// ES<5
function output(dom_val,dom_res) {
  dom_res.innerHTML = isMulti8(dom_val)
}
