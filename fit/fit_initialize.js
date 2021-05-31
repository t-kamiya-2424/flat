// JavaScript Document

$(function(){
  if(window.innerWidth >= 640) {
    //pc
    $(".txt").fitText(10);
  	$("h1").fitText(10);
  } else {
    //sp
    $(".txt").fitText(4);
    $("h1").fitText(2.7);

    $(".h4").fitText(3);

    // top
    $("#news").fitText(3);
    $("#news-tit").fitText(3);
    $("#pro-txt01").fitText(2);
    $("#pro-txt02").fitText(3);
    $("#map-tit").fitText(2);



    // top
    $(".com-tit01").fitText(2);
    $(".com-tit02").fitText(1.8);


    // good
    $(".good01").fitText(2.5);

      // pr
    $(".pr").fitText(2);
    $(".pr-bg").fitText(2.5);

      //ac
    $("ac-bg").fitText(2.5);
  }
});
