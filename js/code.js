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




  /////Buys

let buy1 = document.getElementById("add1");

let buy2 = document.getElementById("add2");

let buy3 = document.getElementById("add3");

let buy4 = document.getElementById("add4");

let buy5 = document.getElementById("add5");

let buy6 = document.getElementById("add6");

let buy7 = document.getElementById("add7");

let buy8 = document.getElementById("add8");

let buy9 = document.getElementById("add9");



buy1.addEventListener("click", compra1);
buy2.addEventListener("click", compra2);
buy3.addEventListener("click", compra3);
buy4.addEventListener("click", compra4);
buy5.addEventListener("click", compra5);
buy6.addEventListener("click", compra6);
buy7.addEventListener("click", compra7);
buy8.addEventListener("click", compra8);
buy9.addEventListener("click", compra9);

function compra1(){
  let producto1 = "Aster Backpack";
  document.uno.innerHTML = producto1;
}