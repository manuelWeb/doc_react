// fx   -> refacto for loop by ES5 spread operator
// see index.html *addBlank to fix
function addBlank() {

  var links = document.links
  for (var i = 0, linksLength = links.length; i < linksLength; i++) {
    const reghttp = /htt[ps]*/
    // python -m SimpleHTTPServer
    // const reghttpexclud = /htt[ps]:\/\/localhost:\d{4,}/
    // local html firefox
    // const reghttpexclud = /file:\/\/\/*/
    // macfly VPS OVH
    // const reghttpexclud = /http:\/\/www.macfly*/
    // const reghttpexclud = /http:\/\/macfly*/
    const reghttpexclud = /file:\/\/\/*|htt[ps]:\/\/localhost:\d{4,}|\d{4,}.*|http:\/\/www.macfly|http:\/\/macfly*/

    if ( reghttp.test(links[i].href) && !reghttpexclud.test(links[i].href) )
    {
      console.log(`accepted link: ${links[i]}`)
      links[i].target = '_blank'
    }
    if(reghttpexclud.test(links[i].href)) {
      console.log(`banned link: ${links[i]}`)
    }
  }

}