
// !important fn à charger dans le context du DOM
// ES<5
export default function output() {
  function isMulti8(num) {
    return num % 8 === 0
      ? `${num} is truthy`
      : `↓${num - (num % 8)} or ↑${num - (num % 8) + 8}`
  }
  const showRes = document.querySelector('#gridSys8Render')
  console.log(isMulti8(document.getElementById('gridSys8Value').value))
  showRes.innerHTML = isMulti8(document.getElementById('gridSys8Value').value)
}

