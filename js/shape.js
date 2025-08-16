"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  //메인비주얼 텍스트들 모션효과
  function animateText(element) {
    return gsap
      .timeline()
      .fromTo(
        element,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2 },
        "-=1.2"
      );
  }
  gsap
    .timeline()
    .add(animateText(".v_title1"))
    .add(animateText(".v_title2"))
    .add(animateText(".v_title3"));

  //back_shape들 모션
  gsap
    .timeline()
    //shape_1
    .fromTo(
      ".shape_1",
      { scale: 0, rotate: 0 },
      { scale: 1, rotate: 360, duration: 0.8 }
    )
    .to(
      ".shape_1",
      {
        y: 10,
        duration: 0.8,
        ease: "linear",
        yoyo: true, //둥실
        repeat: -1, //infinite
      },
      "+=0.2"
    )
    .fromTo(
      ".shape_2",
      { y: -500, x: 500 },
      { y: 0, x: 0, duration: 0.8 },
      "-=1.5"
    )
    .to(
      ".shape_2",
      { y: 10, duration: 0.8, ease: "linear", yoyo: true, repeat: -1 },
      "+=0.2"
    )
    .fromTo(".shape_3", { y: 500 }, { y: 0, duration: 0.8 }, "-=1.2")
    .to(
      ".shape_3",
      {
        y: 10,
        duration: 0.8,
        ease: "linear",
        yoyo: true,
        repeat: -1,
      },
      "+=0.2"
    )
    .fromTo(".shape_4", { x: 500 }, { x: 0, duration: 0.8 }, "-=1")
    .to(
      ".shape_4",
      {
        y: 10,
        duration: 0.8,
        ease: "linear",
        yoyo: true,
        repeat: -1,
      },
      "+=0.2"
    )
    //shape_5
    .fromTo(".shape_5", { y: -500 }, { y: 0, duration: 0.8 }, "-=1.5")
    .to(
      ".shape_5",
      { y: 10, duration: 0.8, ease: "linear", yoyo: true, repeat: -1 },
      "+=0.2"
    )
    //shape_6
    .fromTo(
      ".shape_6",
      { x: -500, y: -500 },
      { x: 0, y: 0, duration: 0.8 },
      "-=1.4"
    )
    .to(
      ".shape_6",
      { y: 10, duration: 0.8, ease: "linear", yoyo: true, repeat: -1 },
      "+=0.2"
    )
    //shape_7
    .fromTo(".shape_7", { x: -1000 }, { x: 0, duration: 0.8 }, "-=1.3")
    .to(
      ".shape_7",
      { y: 10, duration: 0.8, ease: "linear", yoyo: true, repeat: -1 },
      "+=0.2"
    )
    //shape_8
    .fromTo(".shape_8", { x: 500 }, { x: 0, duration: 0.8 }, "-=1") //지연시간
    .to(
      ".shape_8",
      { y: 10, duration: 0.8, ease: "linear", yoyo: true, repeat: -1 },
      "+=0.2"
    )
    //shape_9
    .fromTo(
      ".shape_9",
      { x: -800, y: 800 },
      { x: 0, y: 0, duration: 0.8 },
      "-=2"
    ) //지연시간
    .to(
      ".shape_9",
      { y: 10, duration: 0.8, ease: "linear", yoyo: true, repeat: -1 },
      "+=0.2"
    )
    //shape_10
    .fromTo(".shape_10", { y: 500 }, { y: 0, duration: 0.8 }, "-=1.5") //지연시간
    .to(
      ".shape_10",
      { y: 10, duration: 0.8, ease: "linear", yoyo: true, repeat: -1 },
      "+=0.2"
    )
    //shape_11
    .fromTo(".shape_11", { y: 500 }, { y: 0, duration: 0.8 }, "-=2") //지연시간
    .to(
      ".shape_11",
      { y: 10, duration: 0.8, ease: "linear", yoyo: true, repeat: -1 },
      "+=0.2"
    )
    //shape_12
    .fromTo(".shape_12", { x: -500 }, { x: 0, duration: 0.8 }, "-=1") //지연시간
    .to(
      ".shape_12",
      { y: 10, duration: 0.8, ease: "linear", yoyo: true, repeat: -1 },
      "+=0.2"
    );

  // ---------------------------------
});
