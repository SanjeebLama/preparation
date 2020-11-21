const _flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    { x: 100, y: -20 },
    { x: 300, y: 10 },
    { x: 500, y: 100 },
    { x: 750, y: -100 },
    { x: 350, y: -50 },
    { x: 600, y: 100 },
    { x: 800, y: 0 },
    { x: window.innerWidth, y: 150 },
  ],
};

const _tween = new TimelineLite();

_tween.add(
  TweenLite.to(".paper-plane", 1, {
    bezier: _flightPath,
    ease: Power1.easeInOut,
  })
);

const _controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 3000, //scroll time here
  triggerHook: 0,
})
  .setTween(_tween)
  //   .addIndicators()  Indicatior here
  .setPin(".animation")
  .addTo(_controller);
