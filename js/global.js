


$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});





$(document).ready(function(){

    $('.sand').click(function(){
        $('header ul').slideToggle(200);
    });

});



$( document ).ready(function(){
//   Hide the border by commenting out the variable below
    var $on = 'section';
    $($on).css({
      'background':'none',
      'border':'none',
      'box-shadow':'none'
    });
}); 

$(document).ready(function(){

   $(".card-1").click(function (e) {
        $("#card1").removeClass('non-active');

        $("#card2 , #card3").addClass('non-active');
   });


   $(".card-2").click(function (e) {
        $("#card2").removeClass('non-active');

        $("#card1,#card3").addClass('non-active');
   });



    $(".card-3").click(function (e) {
        $("#card3").removeClass('non-active');

        $("#card2 , #card1").addClass('non-active');
   });



});