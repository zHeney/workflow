
( function( $ ) {
$( document ).ready(function() {


// ----------------------------------- TEXT EFFECT

const text = document.querySelectorAll(".moving_effect1");
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

//-------------------------------------------------------------------------
// try to stop movie

/*$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
    TweenMax.to(el, 2.0, {
      x: (e.clientX - halfX) * (i + 1) * 0,
      y: (e.clientY - halfY) * (i + 1) * 0 });
  };
});*/


/*$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll <= 500){

document.addEventListener("mousemove", e => {
  text.forEach((el, i) => {
    TweenMax.to(el, 2.0, {
      x: (e.clientX - halfX) * (i + 1) * 0.001,
      y: (e.clientY - halfY) * (i + 1) * 0.001 });
  });
});};

});
*/
//-------------------------------------------------------------------------

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
});


// ----------------------------------- add class on hover to thumbs

// $(".h").hover(
//   function () {
//     $(this).addClass('hover');
//     // $(this).css("background-color", "yellow");
//   },
//   function () {
//     $(this).removeClass('hover');
//     // $(this).css("background-color", "initial");
//   },
//   );


// SCROLL MAGIC

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

var controller = new ScrollMagic.Controller();
// build tween
var tween = TweenMax.to("#socials", 0.5, {scale: 1.2,yoyo: true});
// var tween = gsap.to("#socials", {duration:2, scale: 1.1,yoyo: true});

// build scene and set duration to window height
var scene = new ScrollMagic.Scene({triggerElement: "#socials", duration: "100%", offset: -300})
        .setTween(tween)
        // .addIndicators()
        .addTo(controller);

// ---------------------------------- Scene - change BG

var BG = new ScrollMagic.Scene({
    triggerElement: "#WebDesign",
    triggerHook: 0.7

  })
  .setClassToggle("#home", "greyBody")
  // .addIndicators()
  .addTo(controller);

var BG = new ScrollMagic.Scene({
    triggerElement: "#graphdesign",
    triggerHook: 0.9

  })
  .setClassToggle("#home", "blackBody")
  // .addIndicators()
  .addTo(controller);


// ---------------------------------- Scene - undelining WebDesign

$('.category').each(function(){

  // console.log(this);

  var Scene4 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7,
      duration: "90%"
      // reverse: false

    })
    .setClassToggle(this, "undrline-active")
    // .addIndicators()
    .addTo(controller);
});

// ---------------------------------- Scene - scrolling fade opacity to 1


$('.category').each(function(){

  var Scene4 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 1,
      // reverse: false

    })
    .setClassToggle(this, "fadeup-category")
    // .addIndicators()
    .addTo(controller);
});

// ---------------------------------- Scene - translateY to up thumbs

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

// ---------------------------------- Scene - graphdesign section effect

var controller = new ScrollMagic.Controller();
var tween = TweenMax.to("#graphdesign_cont", 0.5, {
  autoAlpha:1,
  y: 0,
  x: 0,
  yoyo: true
});

var scene = new ScrollMagic.Scene({
  triggerElement: "#graphdesign",
  duration: "78%",
  offset: 100
})

  .setTween(tween)
  // .addIndicators()
  .addTo(controller);


// ----------------------------------- SLICK SLIDER

$('.thumbnails').slick({
  asNavFor: '.main_image',
  adaptiveHeight: 'true',
  respondTo: 'min',
  variableWidth: 'true',
  // mobileFirst: 'true',
  rtl: 'true',
  slidesToShow: 10,
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

//  with arrows

$('.thumbs_mob').slick({
  asNavFor: '.main_image_mob',
  adaptiveHeight: 'true',
  respondTo: 'min',
  variableWidth: 'true',
  // mobileFirst: 'true',
  rtl: 'true',
  slidesToShow: 9,
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

$('#graphdesign_cont').slick({
  mobileFirst: 'true',
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});


$('.thumbnails').css({
  'height':'80px'
});

// ----------------------------------- Velocity JS

/* $("#anchortop")
      .velocity("transition.slideUpIn", { stagger: 250 }, 1250)
      .delay(650);
*/

// ----------------------------------- SMOOTH SCROLL

$('.smooth').click(function(event) {

  // $(this).mousedown(function(){
  //   setTimeout(function(){ $(this).mouseup(); }, 5000);
  // });

  event.preventDefault();
  var href=$(this).attr('href');
  var target=$(href);
  var top=target.offset().top;

  $('html,body').delay(100).animate({
    scrollTop: top
  }, 1000);

});

//----------------------------------- Disable hover OnScroll on the Body

// var timer;
// var scrolled = false;
// $(document).scroll(function(){
//     if(scrolled == false){
//         scrolled = true;
//         $(".h").addClass('disable-hover');
//     }

//     clearTimeout(timer);
//     timer = setTimeout(function(){
//         $(".h").removeClass('disable-hover');
//         scrolled = false;
//      },150);
// });


//----------------------------------- Disable hover OnScroll on the Body

});
} )( jQuery );



// ------------------- LOTTIE

// var animation = bodymovin.loadAnimation({
//   container: document.getElementById('anim1'),
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'animations/Smart_spending.json'
// })



// ------- Toggle class (add/delete)

/*
$("#button").click(function() {
  $('.transform').toggleClass('class');
});
*/