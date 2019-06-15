/* eslint-disable no-unused-vars */
function isMulti8(num){
  return num % 8 === 0 ? `${num} 👍 truthy` : `↓${num - (num % 8)} or ↑${num - (num % 8) + 8}`
}

// !important fn à charger dans le context du DOM
// ES<5
function output() {
  const showRes = document.querySelector('#gridSys8Render');
  console.log( isMulti8(document.getElementById('gridSys8Value').value) );
  showRes.innerHTML = isMulti8(document.getElementById('gridSys8Value').value);
}
