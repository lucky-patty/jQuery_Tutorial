// Put everytime you gonna write jQuery
$(document).ready(function(){

  // Hide element
  $("#show").hide();

  // Add Click funtion to element
  $("#test").click(function(){

    // Check whether element is hide
    if($("#show").is(":hidden")){
      // If hide then show element
      $("#show").show();
    }else{
      // If show then hide element
      $("#show").hide();
    }

  });

});
