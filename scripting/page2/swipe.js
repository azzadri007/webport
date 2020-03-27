/* Click on R2 and all the pannels slide up and the progress bar (side pannel) appears 
      as well as main bar moving to left */
$(document).on('click', '.bar_R2', function () {
  $(".bar_R1, .bar_L1, .bar_L2, .bar_MR, .bar_ML, .title_Box").animate({'top':"-=600px"}, 1000);
  $(".bar_R2").delay(1000).animate({'left':"80px"}, 1200);
  $("#bar_Progress").delay(1800).animate({'left':"-10px"}, 500);
  //Do again so all the bars are fully out the picture(sometimes this bugs out)
  $(".bar_R1, .bar_L1, .bar_L2, .bar_MR, .bar_ML, .title_Box").delay(1000).animate({'top':"-=600px"}, 1000);
});
/* Doing the same for the Right side */
$(document).on('click', '.bar_R1', function () {
  $(".bar_R2, .bar_L1, .bar_L2, .bar_MR, .bar_ML, .title_Box").animate({'top':"-=600px"}, 1000);
  $(".bar_R1").delay(1000).animate({'left':"80px"}, 1200);
  $("#bar_Progress").delay(1800).animate({'left':"-10px"}, 500);
  $(".bar_R2, .bar_L1, .bar_L2, .bar_MR, .bar_ML, .title_Box").delay(1000).animate({'top':"-=600px"}, 1000);
});$(document).on('click', '.bar_MR', function () {
  $(".bar_R1, .bar_L1, .bar_R2, .bar_L2, .bar_ML, .title_Box").animate({'top':"-=600px"}, 1000);
  $(".bar_MR").delay(1000).animate({'left':"80px", 'top':"50px"}, 1200);
  $("#bar_Progress").delay(1800).animate({'left':"-10px"}, 500);
  $(".bar_R1, .bar_L1, .bar_R2, .bar_ML, .bar_L2, .title_Box").delay(1000).animate({'top':"-=600px"}, 1000);
});

//Left Side
$(document).on('click', '.bar_L1', function () {
  $(".bar_R1, .bar_R2, .bar_L2, .bar_MR, .bar_ML, .title_Box").animate({'top':"-=600px"}, 1000);
  $(".bar_L1").delay(1000).animate({'margin-left':"-600px", 'top':"12px"}, 1200);
  $("#bar_Progress").delay(1800).animate({'left':"-10px"}, 500);
  $(".bar_R1, .bar_R2, .bar_L2, .bar_MR, .bar_ML, .title_Box").delay(1000).animate({'top':"-=600px"}, 1000);
});$(document).on('click', '.bar_L2', function () {
  $(".bar_R1, .bar_L1, .bar_R2, .bar_MR, .bar_ML, .title_Box").animate({'top':"-=600px"}, 1000);
  $(".bar_L2").delay(1000).animate({'margin-left':"-600px", 'top':"12px"}, 1200);
  $("#bar_Progress").delay(1800).animate({'left':"-10px"}, 500);
  $(".bar_R1, .bar_L1, .bar_R2, .bar_MR, .bar_ML, .title_Box").delay(1000).animate({'top':"-=600px"}, 1000);
});$(document).on('click', '.bar_ML', function () {
  $(".bar_R1, .bar_L1, .bar_R2, .bar_MR, .bar_L2, .title_Box").animate({'top':"-=600px"}, 1000);
  $(".bar_ML").delay(1000).animate({'margin-left':"-600px",'top':"50px"}, 1200);
  $("#bar_Progress").delay(1800).animate({'left':"-10px"}, 500);
  $(".bar_R1, .bar_L1, .bar_R2, .bar_MR, .bar_L2, .title_Box").delay(1000).animate({'top':"-=600px"}, 1000);
});