
function returnHome(){

  //These are the things that need to disapear:
  // partI
  // white_hex , concatinate , subtitle , behind (includes giffer ) , back_w (includes inner_g and inner_butt),
  // back_space , slash
  //
  // also remeber to change page address slowly (window.location.href = "hello.html")


  var cover = document.getElementById("cover");
  var hex = document.getElementById("Hexaco");
  var position = -400; //initial position is -300% as it is above page
  var i = 0;
  var j = 0.05;
  var init_op = 0;
  var coin = 0;

  var top = document.body.scrollTop;
  document.body.style.overflow = "hidden";
  //document.body.style.position = "fixed";

  let loop = setInterval(function(){

//If you're at the top of the page ... OR ...
      if(top == 0){
        if((i > 100)&&(j == 1)){
          window.location.href = "hello.html";
          clearInterval(loop);
          return;
        }else{
          i = i + 1;
          cover.style.top = position+i+"%";
          setTimeout(
            function(){if(j < 1){
              j = j + 0.01;
            }else{
              j = 1;
            }}, 50);
          hex.style.opacity = j;

        }
      }else{

// This scrolling back to the top was taken from https://stackoverflow.com/questions/15935318/smooth-scroll-to-top   //

// click return and it will slowly scroll up. Modifying "window.scrollTo(0, c - c / 400);"
// the "400" is a hardcoded value and if you increse it it will slow down, visa-versa
        const scrollToTop = () => {
          const c = document.documentElement.scrollTop || document.body.scrollTop;
          if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 400);
          }
        };
        scrollToTop();
//here I added a timeout so that it can get to the top, momentarily rest then exit
        setTimeout(function(){coin = 1;}, 1000)

      }

//If coin is given 1 - due to you being at the top of the page, you can then
// start scrolling to 'blank' the page
      if(coin == 1){
        if((i > 100)&&(j == 1)){
          window.location.href = "hello.html";
          clearInterval(loop);
          return;
        }else{
          i = i + 1;
          cover.style.top = position+i+"%";
          setTimeout(
            function(){if(j < 1){
              j = j + 0.01;
            }else{
              j = 1;
            }}, 50);
          hex.style.opacity = j;

        }
      }

  }, 20);



  }
