const tl = new TimelineLite();

tl.to(".img", 1, {
  transform: "scale(5)",
  ease: Power2.easeOut,
});

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".hello",
  duration: 1200,
  triggerHook: 0,
})
  .setTween(tl)

  .addTo(controller);

const tl2 = new TimelineLite();

tl2.fromTo(
  ".img",
  1,
  {
    filter: "brightness(100%)",
    ease: Power2.easeOut,
  },
  {
    filter: "brightness(10%)",
    ease: Power2.easeOut,
  }
);

const controller2 = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
  triggerElement: "500%",
  duration: 1000,
  triggerHook: 0.2,
})
  .setTween(tl2)
  .addTo(controller2);
