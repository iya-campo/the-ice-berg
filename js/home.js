// smooth scroll to sections
var $root = $("html, body");

$('a[href^="#"]').click(function () {
  $root.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    "slow"
  );

  return false;
});

// smooth scroll to bottom
$(".scroll-top-btn").click(function () {
  $root.animate(
    {
      scrollTop: 0,
    },
    "slow"
  );

  return false;
});

// show back-to-top button
window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    $(".scroll-top-btn").css({ visibility: "visible", opacity: "1" });
  } else {
    $(".scroll-top-btn").css({ visibility: "hidden", opacity: "0" });
  }
};

const waveDirection = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    { x: -400 } 
  ]
};

const tween1 = new TimelineLite();
const tween2 = new TimelineLite();

tween1.add(
  TweenLite.to(".animation-1 .wave", 1, {
    bezier: waveDirection,
    ease: Power1.easeInOut
  })
);

tween2.add(
  TweenLite.to(".animation-2 .wave", 1, {
    bezier: waveDirection,
    ease: Power1.easeInOut
  })
);

const controller1 = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
  triggerElement: ".animation-1",
  duration: 1000,
  triggerHook: 1
})
.setTween(tween1)
// .addIndicators()
.addTo(controller1);

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".animation-2",
  duration: 1000,
  triggerHook: 1
})
.setTween(tween2)
// .addIndicators()
.addTo(controller2);

$(function() {  
  $("body").niceScroll(
    {horizrailenabled: false}
  );
});

// alert('Debug!');

AOS.init();