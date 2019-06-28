# Help 8pt Grid Sys

<form onsubmit="return false">
  <div>
    <label>Grab your value:</label>
    <input id="gridSys8Value" type="text" placeholder="is a multiple of 8 ?" />
    <button id="grid8helper"
      onclick="output(document.getElementById('gridSys8Value').value,document.getElementById('gridSys8Render'));">
      OK
    </button>
    <span id="gridSys8Render" class="result"> </span>
  </div>
</form>
