
const bt  = document.querySelector('#grid8helper')
const userVal = document.querySelector('#gridSys8Value')
// ES5 arrow fn not run on ipad3<2015 ???
// const isMulti8 = (num) => num % 8 === 0 ? `${num} is truthy` : `↓${num - (num % 8)} or ↑${num - (num % 8) + 8}`
// const output = () => {
//   const showRes = document.querySelector('#gridSys8Render')
//   console.log( isMulti8(document.getElementById('gridSys8Value').value) );
//   showRes.innerHTML = isMulti8(document.getElementById('gridSys8Value').value)
// }
function isMulti8(num){
  return num % 8 === 0 ? `${num} is truthy` : `↓${num - (num % 8)} or ↑${num - (num % 8) + 8}`
}

// !important fn à charger dans le context du DOM
// ES<5
function output() {
  const showRes = document.querySelector('#gridSys8Render');
  console.log( isMulti8(document.getElementById('gridSys8Value').value) );
  showRes.innerHTML = isMulti8(document.getElementById('gridSys8Value').value);
}

// document.getElementById('gridSys8Value').value ? bt.onclick = output() : null

