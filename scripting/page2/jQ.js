$('#clickbox').click(function(){
    $('#title').slideDown();

});

$$(document).ready(function(){
  $("#clickbox").click(function(){
      $("#partI").animate({top: '2000px';},1000);
  });
});



/*
function onclickUp(){
    var page1 = document.getElementById("partI");
    var page2 = document.getElementById("partII");

    for(var i=1000; i > 0; i--){
      page1.style.top = page1.style.top - (page1.style.top * (1/i));
    }
    page1.style.visibility = "hidden";
    setTimeout(function(){page2.style.visibility = "visible";}, 1000);


}
*/
