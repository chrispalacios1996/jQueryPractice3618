// $(document).ready(function() {
//
//   console.log('test');
//
//   var box = $("#box");
//   var button = $("create");
//   button.click(function(){
//
//     box.html('<p>Hello, I was created by the button below</p>');
//     box.css("display", "none");
//   });
//
//   box.css("font-family", "monospace");
//   box.css("color", "red");
//
//   box.click(function(){
//
//   box.alert("");
//   })
//
// });
$(document).ready(function(){
  console.log("Check");

  var butLeft = $("#left");
  var butRight = $("#right");
  var butUp = $("#up");
  var butDown = $("#down");
  var box = $("#box");

  box.css("background-color", "darkgrey");
  box.css("height", "200px");
  box.css("width", "200px");
  box.css("border-radius", "25px 25px 25px 25px");
  box.css("text-align", "center");
  butLeft.css("color", "white");
  butLeft.css("background-color", "green");
  butLeft.css("font-family", "monospace");
  butLeft.css("text-decoration", "underline");

  butLeft.click(function() {
    box.css("margin-left", "+=50");
    })
  butRight.click(function() {
    box.css("margin-left", "-=50");
  })


  butLeft.hover(function(){
    butLeft.css("cursor", "pointer");
  })

  var selector = "#controller";
  $("#controller").keydown(function(eventData){
   console.log("gg");
   var box = $("box");
   if ( eventData.keyCode == 37) {
     console.log("Left arrow key press");
     box.css("margin-left", "-=100px");
   } else if (eventData.keyCode == 39) {
     box.css("margin-left", "+=100px");
   }







  })



































})








// $('#cops').css( {
//   "height": "200px",
//   "width": "200px",
//   "background-color": "black",
//   "color": "red",
//   "text-decoration": "line-through",
//   "text-align": "center",
// })
//
// $('#cops').click(function() {
//   $('#cops').css('margin-left', '+=100');
// } )
//
// $('#cops').hover(function() {
//   $('#cops').css('cusrsor', 'pointer');
//   $('#cops').css('background-color', 'blue');
// } , function (){
//   $('#cops').css('background-color', 'red');
//   $('#cops').css('color', 'darkgrey');
// })

// $('#cops').css( {
//   "background-color": "color",
// })
// $('#ball').hover(function() {
//   $('#ball')
