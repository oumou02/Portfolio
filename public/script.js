
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;

});


var typed = new Typed('.typed', {
  strings: ["Hello to all, my name is Axel", "After obtaining the baccalaureate, I decided to integrate a school thaat trains on a GOAL, the training offered is Networks and Telecommunications, I learn to code C langage, HTML, but also build a network, I still pratice in English. This training is beneficial because it is general enough to learn certain skills. I am a student but i also have a job on the weekends, which consists of coaching children i Basketball to improve my sociability and it is a passion. "],
  typeSpeed: 20,
});
  

let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 10000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }
});


AOS.init();