<div class="main-carousel">
      <div class="carousel">
        <div class="items">
          <img src="https://images.clickfunnels.com/d4/b69c48d1044cf68d715cecaecced32/slider-1.png" alt="" class="carousel-image current" id="sliders1"/>
          <img src="https://images.clickfunnels.com/75/4a20eae4734801809cc3787d9aba85/slider-2.png" alt="" class="carousel-image" id="sliders2"/>
          <img src="https://images.clickfunnels.com/8b/4edbfb723d4995b8b6f8010b4ea265/slider-3.png" alt="" class="carousel-image" id="sliders3"/>
          <img src="https://images.clickfunnels.com/ac/4c9f37bca54b4ba40cc1995baff334/slider-4.png" alt="" class="carousel-image" id="sliders4"/>
          <img src="https://images.clickfunnels.com/14/be632c4fc54974a7337d4a0b66a2ed/slider-5.png" alt="" class="carousel-image" id="sliders5" />
        </div>
      </div>
      <div class="buttons">
        <i class="fas fa-arrow-left fa-3x" id="prevBtnmb"></i>
        <i class="fas fa-arrow-right fa-3x" id="nextBtnmb"></i>
      </div>
      <div class="nav-dots">
        <div class="dot active"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
<style>
.main-carousel {
    position: relative;
    height: 600px;
    .carousel {
      margin: 30px 0 30px 0;
      width: 100%;
      .items {
        width: 100%;
        .carousel-image {
          width: 100%;
          height: auto;
           object-fit: cover;
          position: absolute;
          opacity: 0;
          transition: 0.5s all;
          background-image: linear-gradient(350deg,#e0fafa,#fffcd9);
        }
        .current {
          opacity: 1;
        }
      }
    }
    .buttons {
      #prevBtnmb,
      #nextBtnmb {
        outline: none;
        font-weight: 600 !important;
        cursor: pointer;
        color: navyblue;
        position: absolute;
        background-color: #e7e7e7;
        padding: 10px 11px;
        border-radius: 50%;
        border: 2px solid rgba(29,78,216,0);
        transform: translateY(-50%);
        box-shadow: 0 0 1rem rgba(29,78,216,0);
        opacity: .7;
        &:hover {
          opacity: 1;
          border-color: #2a2552;
        }
      }
      #prevBtnmb {
        top: 67%;
        left: 3%;
      }
      #nextBtnmb {
        top: 67%;
        right: 3%;
      }
    }
  .fa-3x {
    font-size: 18px !important;
}
    .nav-dots {
      width: 200px;
      height: 40px;
      display: flex;
      justify-content: space-around;
      position: absolute;
      top: 135%;
      left: 50%;
      transform: translate(-50%, 0%);
      z-index: 99;
      .dot {
        width: 10px;
        height: 10px;
        background-color: #000;
        border-radius: 50%;
        opacity: 0.5;
        cursor: pointer;
      }
      .active {
        opacity: 1;
      }
    }
  }
  img#sliders1 {
    padding: 6% 0%;
    background: #ffffff !important;
}
.buttons
#prevBtn, #nextBtn:hover {
    border-color: #2a2552;
}
@media only screen and (min-width: 0px) and (max-width: 770px) {
  .buttons {
    #nextBtnmb
{
      top: 35% !important;
      right: 1% !important;
    }
  }
  .buttons {
    #prevBtnmb
{
      top: 35% !important;
      left: 1% !important;
    }
 }
  .main-carousel {
  .nav-dots
{
    top: 50% !important;
  }
}
}
</style>
<script>
  // ============================== Carousel slider =====================================
const images = document.querySelectorAll(".carousel-image");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector("#prevBtnmb");
const nextBtn = document.querySelector("#nextBtnmb");
const nextSlide = () => {
  const currentSlide = document.querySelector(".current");
  currentSlide.classList.remove("current");
  if (currentSlide.nextElementSibling) {
    currentSlide.nextElementSibling.classList.add("current");
  } else {
    images[0].classList.add("current");
  }
  dotsNextSlide();
};
const prevSlide = () => {
  const currentSlide = document.querySelector(".current");
  currentSlide.classList.remove("current");
  if (currentSlide.previousElementSibling) {
    currentSlide.previousElementSibling.classList.add("current");
  } else {
    images[images.length - 1].classList.add("current");
  }
  dotsPrevSlide();
};
nextBtn.addEventListener("click", k => {
  nextSlide();
});
prevBtn.addEventListener("click", k => {
  prevSlide();
});
// =================== Dots ===========================
const dotsNextSlide = () => {
  const dotActive = document.querySelector(".active");
  dotActive.classList.remove("active");
  if (dotActive.nextElementSibling) {
    dotActive.nextElementSibling.classList.add("active");
  } else {
    dots[0].classList.add("active");
  }
  dotActive.classList.remove("active");
};
const dotsPrevSlide = () => {
  const dotActive = document.querySelector(".active");
  dotActive.classList.remove("active");
  if (dotActive.previousElementSibling) {
    dotActive.previousElementSibling.classList.add("active");
  } else {
    dots[dots.length - 1].classList.add("active");
  }
  dotActive.classList.remove("active");
};
const dotJump = () => {
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const dotActive = document.querySelector(".active");
      dotActive.classList.remove("active");
      dot.classList.add("active");
      const imageTarget = images[index];
      const currentSlide = document.querySelector(".current");
      currentSlide.classList.remove("current");
      imageTarget.classList.add("current");
    });
  });
};
dotJump();
</script>
