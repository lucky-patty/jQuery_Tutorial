$(document).ready(function(){

  $("#show").hide();

  $("#test").click(function(){

    if($("#show").is(":hidden")){
      $("#show").show();
    }else{
      $("#show").hide();
    }  
  });

});
