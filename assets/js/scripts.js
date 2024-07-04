// mobile menu
let menu=document.querySelector('header .menu');
let li=Array.from(document.querySelectorAll('header .menu  > ul > li'));

document.getElementById('hamicon').addEventListener('click',function () {
  menu.classList.add('active');
  document.getElementById('hamicon').classList.add('active');
  document.getElementById('menuOverlay').classList.add('active');
  document.getElementById('menuOverlay').addEventListener('click',function () {
    this.classList.remove('active');
    menu.classList.remove('active');
  })
})
document.getElementById('closeMenu').addEventListener('click',function () {
  menu.classList.remove('active');
  document.getElementById('hamicon').classList.remove('active');
  document.getElementById('menuOverlay').classList.remove('active');
})

li.forEach((item)=>{
  item.addEventListener('click',function () {
    item.querySelector('ul').classList.toggle('active');
    item.querySelector('svg').classList.toggle('active');
    item.querySelector('a').classList.toggle('mobileactive');
  })
})

// dropdown menu

let dropdownBtn= document.getElementById('dropdownBtn');

dropdownBtn.addEventListener('click',function () {
  this.nextElementSibling.classList.toggle('active');
})

// scroll event
window.addEventListener('scroll',()=>{
  if (window.scrollY>40) {
    document.querySelector('header').style.backgroundColor='white';
    document.querySelector('header').style.boxShadow=' 0 0 50px 0 rgba(0, 0, 0, 0.1)'
  } else {
    document.querySelector('header').style.backgroundColor='transparent';
    document.querySelector('header').style.boxShadow='none'
  }
})
// fancybox

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// swiper
var doctors= new Swiper(".doctors", {
  loop: true,
  spaceBetween: 35,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination:{
    el:'.swiper-pagination'
  }
});
var testimonials= new Swiper(".testimonials", {
  loop: true,
  spaceBetween: 35,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination:{
    el:'.swiper-pagination2'
  }
});
var blog= new Swiper(".blog", {
  loop: true,
  spaceBetween: 35,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination:{
    el:'.swiper-pagination3'
  }
});
// tabs

let tabs = Array.from(document.getElementsByClassName('tabs'))
let tabContent = Array.from(document.querySelectorAll('.tabContent > div'));

tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
      tabs.forEach((tabs) => {tabs.classList.remove('active')});
      tab.classList.add('active')
        let tabId = tab.dataset.id;
        tabContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
    })
})

  // aos
  AOS.init();

  // go to up

window.addEventListener('scroll',()=>{
  if (window.scrollY>390) {
    document.querySelector('.goToUp').classList.add('active');
  } else {
    document.querySelector('.goToUp').classList.remove('active');
  }
})

// dark mode

const switchTheme = ()=>{
 const routeElm = document.documentElement;
 let dataTheme = routeElm.getAttribute('data-theme'),
     newTheme;

     newTheme= (dataTheme === 'light') ? 'dark' : 'light';

     routeElm.setAttribute('data-theme', newTheme);
}

document.querySelector('#theme-switcher').addEventListener('click', switchTheme);

// select 2

$( '#basic-usage' ).select2( {
  theme: "bootstrap-5",
  width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
  placeholder: $( this ).data( 'placeholder' ),
} );

// datapicker

jalaliDatepicker.startWatch();

// parallex motion


let parallexBox = document.getElementById('parallexBox');
let parallexContent = document.querySelector('#parallexBox > div');
let sliderWidth=parallexBox.offsetWidth;
let sliderHeight=parallexBox.offsetHeight;
let sliderContentMovement=60;

let parallexBox2 = document.getElementById('parallexBox2');
let parallexContent2 = document.querySelector('#parallexBox2 > div');
let sliderWidth2=parallexBox.offsetWidth;
let sliderHeight2=parallexBox.offsetHeight;
let sliderContentMovement2=15;

let parallexBox3 = document.getElementById('parallexBox3');
let parallexContent3 = document.querySelector('#parallexBox3 img[alt="shape"]');
let sliderWidth3=parallexBox.offsetWidth;
let sliderHeight3=parallexBox.offsetHeight;
let sliderContentMovement3=30;


parallexBox.addEventListener('mousemove',function (event) {
    movement(event)
  })

  parallexBox2.addEventListener('mousemove',function (event) {
    movement2(event)
  })

  parallexBox3.addEventListener('mousemove',function (event) {
    movement3(event)
  })

function movement(event) {
    let mouseX=Math.floor(-(event.offsetX-(sliderWidth/3))*(sliderContentMovement/sliderWidth));
    let mouseY=Math.floor(-(event.offsetY-(sliderHeight/3))*(sliderContentMovement/sliderHeight));

    parallexContent.style.transform=`translate(${mouseX}px,${mouseY}px)`;
}

function movement2(event) {
  let mouseX=Math.floor(-(event.offsetX-(sliderWidth2/3))*(sliderContentMovement2/sliderWidth2));
  let mouseY=Math.floor(-(event.offsetY-(sliderHeight2/3))*(sliderContentMovement2/sliderHeight2));

  parallexContent2.style.transform=`translate(${mouseX}px,${mouseY}px)`;
}

function movement3(event) {
  let mouseX=Math.floor(-(event.offsetX-(sliderWidth3/3))*(sliderContentMovement3/sliderWidth3));
  let mouseY=Math.floor(-(event.offsetY-(sliderHeight3/3))*(sliderContentMovement3/sliderHeight3));

  parallexContent3.style.transform=`translate(${mouseX}px,${mouseY}px)`;
}