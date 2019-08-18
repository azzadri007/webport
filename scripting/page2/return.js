
function returnHome(){

  var opac = document.getElementById("slash");
  var hold = 0;
  opac.style.display = "block";
  opac.style.opacity = 1;
  for(var i = 0; i<1; i = i + 0.0001){
    hold = opac.style.opacity;
    opac.style.opacity = hold + i;
  }
  setTimeout(function(){window.location.href="hello.html"}, 1000);
}
