function start() {

    var bar_L = document.getElementsByClassName('bar_L');
    var bar_R = document.getElementsByClassName('bar_R');

    var init_pos = bar_L.style.top;
    var position = init_pos;
    var j = 0;

// ------------------------------------------------------------------
let loop = setInterval(function(){


      if((position == (0+"%")){
        clearInterval(loop);
        return;
      }else{

        position = position + 1;
        bar_L.style.top = position+"%";
        bar_R.style.top = position+"%";

        setTimeout(function(){j =j+1;}, 50);
      }
}, 20);

};





    window.onload = start();
