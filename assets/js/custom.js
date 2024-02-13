$(document).ready(function(){   
    $('.hero-slide-box').slick({
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 1500,
        speed: 2000,
        arrows:false,
        slidesToShow: 4,
        slidesToScroll: 1 ,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


    $('.C-name-slider').slick({
        dots: false,
        infinite: true,
        autoplay:false,
        autoplaySpeed: 2000,
        speed: 1600,
        arrows:true,
        slidesToShow: 5,
        slidesToScroll: 1 ,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.latest-from-blogs-block').slick({
        dots: false,
        infinite: true,
        autoplay:false,
        autoplaySpeed: 2000,
        speed: 1600,
        arrows:true,
        centerPadding:'100px',
        slidesToShow: 3,
        slidesToScroll: 1 ,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


    $(".tropical-punch-slider").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        autoplay:false,
        centerPadding: '200px',
        arrows:true,
        autoplaySpeed: 2000,
        speed: 2000,
        slidesToScroll: 1,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            centerPadding: '50px'
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            centerPadding: '0px'
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            centerPadding: '0px'
          }
        }
      ]
    });
});
const toggle = document.getElementById("toggle");
    toggle.onclick = function(){
    toggle.classList.toggle("active");
    }

const backToTopLink = document.getElementById('backToTopLink');
  backToTopLink.addEventListener('click', () => {
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  });