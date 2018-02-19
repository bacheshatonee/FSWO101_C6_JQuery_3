var fontShift = 0;
$(document).ready(function(){


  var unhideFirst = function(){
        $("#firstDiv").css("visibility", "visible");
  }

  var unhideSecond = function(){
        $("#secondDiv").css("visibility", "visible");
  }




  $("#firstDiv").mousedown(function(){

    if (fontShift == 0) {
      $(this).css("font-family", "Supermercado One");
      fontShift = 1;
    }else if (fontShift == 1) {
      $(this).css("font-family", "Kavivanar");
      $(this).css("font-size", "250%");
      fontShift = 0;
    }
  });

  $("#secondDiv").mousedown(function(){

    if (fontShift == 0) {
      $(this).css("font-family", "Supermercado One");
      fontShift = 1;
    }else if (fontShift == 1) {
      $(this).css("font-family", "Kavivanar");
      $(this).css("font-size", "250%");
      fontShift = 0;
    }
  });




  $("#firstDiv").mouseenter(function(){
      $(this).css("color", "red");
      $(this).css("background-color", "black");
    });

  $("#firstDiv").mouseleave(function(){
      $(this).css("color", "black");
      $(this).css("background-color", "red");
    });

  $("#secondDiv").mouseenter(function(){
      $(this).css("color", "blue");
      $(this).css("background-color", "green");
    });

  $("#secondDiv").mouseleave(function(){
      $(this).css("color", "green");
      $(this).css("background-color", "blue");
    });



  $("#firstDiv").dblclick(function(){
      $(this).css("visibility", "hidden");
      setTimeout(unhideFirst, 3000);
    });

  $("#secondDiv").dblclick(function(){
      $(this).css("visibility", "hidden");
      setTimeout(unhideSecond, 3000);
    });

});
