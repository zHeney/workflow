
( function( $ ) {
$( document ).ready(function() {

// ----------------------------------- TEXT EFFECT

/*const text = document.querySelectorAll(".moving_effect1");
const halfX = window.innerWidth / 2;
const halfY = window.innerHeight / 2;

text.forEach((el, i) => {
  TweenMax.to(el, 1, {
    z: 1 * (i + 8) });

});

document.addEventListener("mousemove", e => {
  text.forEach((el, i) => {
    TweenMax.to(el, 2.0, {
      x: (e.clientX - halfX) * (i + 1) * 0.001,
      y: (e.clientY - halfY) * (i + 1) * 0.001 });

  });
});

// ------- on categories

const text2 = document.querySelectorAll(".category");
const halfX2 = window.innerWidth / 2;
const halfY2 = window.innerHeight / 2;

text2.forEach((el, i) => {
  TweenMax.to(el, 1, {
    z: 1 * (i + 8) });

});

document.addEventListener("mousemove", e => {
  text2.forEach((el, i) => {
    TweenMax.to(el, 2.0, {
      x: (e.clientX - halfX2) * (i + 1) * 0.02,
      y: (e.clientY - halfY2) * (i + 1) * 0.02 });

  });
});*/

// ----------------------------------- add class to thumbs

$(".h").hover(
  function () {
    $(this).addClass('hover');
    // $(this).css("background-color", "yellow");
  },
  function () {
    $(this).removeClass('hover');
    // $(this).css("background-color", "initial");
  },
  );


// ----------------------------------- SCROLL MAGIC

// ---------------------------------- Scene - blur SOC

var controller = new ScrollMagic.Controller();

var Scene0 = new ScrollMagic.Scene({
    triggerElement: "#socials",
    triggerHook: 0.4,
    reverse: true

  })
  .setClassToggle(".socials", "m-socials")
  // .addIndicators()
  .addTo(controller);

// ---------------------------------- Scene - increase size SOC section

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = TweenMax.to("#socials", 0.5, {scale: 1.2,yoyo: true});
// var tween = gsap.to("#socials", {duration:2, scale: 1.1,yoyo: true});

// build scene and set duration to window height
var scene = new ScrollMagic.Scene({triggerElement: "#socials", duration: "100%", offset: -300})
        .setTween(tween)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

// ---------------------------------- Scene - change BG (brownt-to-grey)

var Scene3 = new ScrollMagic.Scene({
    triggerElement: "#WebDesign",
    triggerHook: 0.7

  })
  .setClassToggle("#home", "greyBody")
  // .addIndicators()
  .addTo(controller);

// ---------------------------------- Scene - undelining WebDesign

var Scene1 = new ScrollMagic.Scene({
    triggerElement: "#WebDesign",
    triggerHook: 0.7, // show, when scrolled 10% into view
    duration: 0, // hide 10% before exiting view (80% + 10% from bottom)
    offset: 0 // move trigger to center of element
    // reverse: false
  })
  .setClassToggle("#WebDesign", "undrline-active") // add class to reveal

  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

// ---------------------------------- Scene - undelining APP Mobile

var Scene2 = new ScrollMagic.Scene({
    triggerElement: "#mob",
    triggerHook: 0.7

  })
  .setClassToggle("#mob", "undrline-active")
  // .addIndicators()
  .addTo(controller);

// ---------------------------------- Scene - scrolling fade opacity to up

  var Scene5 = new ScrollMagic.Scene({
      triggerElement: "#mob",
      triggerHook: 1,
      // reverse: false

    })
    .setClassToggle("#mob", "fadeup-category")
    // .addIndicators()
    .addTo(controller);

// ---------------------------------- Scene - translateY to up projects

$('.projects_thumbs').each(function(){

  // console.log(this);

  var Scene4 = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 1,
      // reverse: false

    })
    .setClassToggle(this, "fadeup")
    // .addIndicators()
    .addTo(controller);
});

// ---------------------------------- Scene - scrolling fade opacity to up

  // var tween = TweenMax.fromTo("#webDesign_cont", 0.5, {autoAlpha:0}, {autoAlpha:1});
  // var Scene5 = new ScrollMagic.Scene({
  //     triggerElement: "#webDesign_cont",
  //     duration: "30%",
  //     triggerHook: 0.9
  // })
  //         .setTween(tween)
  //         // .addIndicators() // add indicators (requires plugin)
  //         .addTo(controller);



// ----------------------------------- SLICK SLIDER

$('.thumbnails').slick({
  asNavFor: '.main_image',
  adaptiveHeight: 'true',
  respondTo: 'min',
  variableWidth: 'true',
  // mobileFirst: 'true',
  rtl: 'true',
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  centerMode: false,
  focusOnSelect: true
});

  $('.main_image').slick({
    asNavFor: '.thumbnails',
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  });

$('.thumbs_mob').slick({
  asNavFor: '.main_image_mob',
  adaptiveHeight: 'true',
  respondTo: 'min',
  variableWidth: 'true',
  // mobileFirst: 'true',
  rtl: 'true',
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  centerMode: false,
  focusOnSelect: true
});

  $('.main_image_mob').slick({
    asNavFor: '.thumbs_mob',
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true
  });


$('.thumbnails').css({
  'height':'80px'
});

// ----------------------------------- CHANGE BG COLOR

// var scroll_pos = 0;
// $(document).scroll(function() {
//     scroll_pos = $(this).scrollTop();
//     if(scroll_pos > 1200) {
//         $("#home").css('background-color', '#e7e7e7');
//     } else {
//         $("#home").css('background-color', 'rgb(47, 35, 35)');
//     }
// });

// ----------------------------------- Velocity JS

/* $("#anchortop")
      .velocity("transition.slideUpIn", { stagger: 250 }, 1250)
      .delay(650);
*/

// ----------------------------------- SMOOTH SCROLL

$('.smooth').click(function(event) {
event.preventDefault();
var href=$(this).attr('href');
var target=$(href);
var top=target.offset().top;
$('html,body').animate({
  scrollTop: top
}, 1000);
});



});
} )( jQuery );
