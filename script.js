  let g = function update() {
  let date = new Date(); 
  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  h.innerHTML = hours;

 let c = date.getMinutes()
    if(c<10) c = '0' + c
  m.innerHTML = c
    
 let d = date.getSeconds()
    if(d<10) d = '0' + d
  s.innerHTML = d

}
let id = setInterval(g,1000)

document.getElementById("btn2").addEventListener("click", ()=>{
  clearInterval(id)
   clearInterval(ut)
})

 document.getElementById("btn1").addEventListener("click", ()=>{
   id = setInterval(g,1000)
   setInterval(change, 1000)
 })


var i = 0;
function change() {
  var doc = document.body
  var colors = [];
  while (colors.length < 100) {
    do {
        var color = Math.floor((Math.random()*1000000)+1);
    } while (colors.indexOf(color) >= 0);
    colors.push("#" + ("000000" + color.toString(16)).slice(-6));
}
  doc.style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
}
 let ut = setInterval(change, 1000);

  
