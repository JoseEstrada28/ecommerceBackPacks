
///////////////ANIMATIONS
//las animaciones funcionan dando click, por ejemplo se podria utilizar para un "ver menos"
$(document).ready(function(){
  $(`#fadeout`).click(function(){
    $(`#blogTitle`).fadeOut(1000)
  });
  $(`#fadein`).click(function(){
    $(`#blogTitle`).fadeIn(1000)})
    $(`#tog`).click(function(){
      $(`#blogTitle`).fadeToggle()})
});




$('.slider').slick({
  //dot none = false
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  /AJAX///////////////
  $.ajax({
    url: "js/data.json",
    method: "GET",
    dataType: "JSON",
    success: function (data, status, jqXHR){
      console.log(data);
      console.log(status);
      console.log(jqXHR);
    },
    error: function (jqXHR, status, error){
      console.log(jqXHR);
      console.log(status);
      console.log(error);
    }


  });

  $.get( "js/data.json", function( data ) {
    $( "name1" )
      .append(  + data.name )
      .append(  data.price);
  }, "json" );
  
  