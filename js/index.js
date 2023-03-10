/*smallnav2*/
const icon = document.querySelector(".icon2");
const nav = document.querySelector(".aa");
const closee = document.querySelector(".close");
const search = document.querySelector(".search");
icon.addEventListener("click", function () {
    nav.classList.toggle("nav-height");
    icon.classList.remove(noneicon2);
    closee.classList.add(flexclose);
    search.classList.remove(nonesearch);

});



/*bigsizesecondnavigation*/
/*zirmenu1*/

const menu1 = document.querySelector(".submenuMen");
const menu2 = document.querySelector(".zirmenu1");

document.querySelector("body").addEventListener("mouseover", function (k) {
    if (k.target == menu1 || k.target == menu2) {
        menu2.classList.add("dflex");
    }
});

menu1.addEventListener("mouseout", function () {
    menu2.classList.remove("dflex");
});

menu2.addEventListener("mouseleave", function () {
    menu2.classList.remove("dflex");
});
/*zirmenu2*/
const menu11 = document.querySelector(".submenuWomen");
const menu22 = document.querySelector(".zirmenu2");

document.querySelector("body").addEventListener("mouseover", function (y) {
    if (y.target == menu11 || y.target == menu22) {
        menu22.classList.add("dflexx");
    }
});

menu11.addEventListener("mouseout", function () {
    menu22.classList.remove("dflexx");
});

menu22.addEventListener("mouseleave", function () {
    menu22.classList.remove("dflexx");
});
/*zirmenu3*/
const menu111 = document.querySelector(".submenuCeramic");
const menu222 = document.querySelector(".zirmenu3");

document.querySelector("body").addEventListener("mouseover", function (z) {
    if (z.target == menu111 || z.target == menu222) {
        menu222.classList.add("dflexxx");
    }
});

menu111.addEventListener("mouseout", function () {
    menu222.classList.remove("dflexxx");
});

menu222.addEventListener("mouseleave", function () {
    menu222.classList.remove("dflexxx");
});
/*zirmenu4*/
const menu1111 = document.querySelector(".submenuFeel");
const menu2222 = document.querySelector(".zirmenu4");

document.querySelector("body").addEventListener("mouseover", function (n) {
    if (n.target == menu1111 || n.target == menu2222) {
        menu2222.classList.add("dflexxxx");
    }
});

menu1111.addEventListener("mouseout", function () {
    menu2222.classList.remove("dflexxxx");
});

menu2222.addEventListener("mouseleave", function () {
    menu2222.classList.remove("dflexxxx");
});
/*zirmenusearch*/
const menu11111= document.querySelector(".search1");
const menu22222= document.querySelector(".zirmenusearch");

document.querySelector("body").addEventListener("click", function (w) {
    if (w.target == menu11111 || w.target == menu22222) {
        menu22222.classList.add("dflexxxxx");
    }
});

menu11111.addEventListener("mouseout", function () {
    menu22222.classList.remove("dflexxxxx");
});

menu22222.addEventListener("mouseleave", function () {
    menu22222.classList.remove("dflexxxxx");
});


/*firstslider*/
const image = document.querySelector(".pickfirstimg");
const iconLeft = document.querySelector(".iconL");
const iconRight = document.querySelector(".iconR");
let activeImage = 0;

iconLeft.addEventListener("click", function () {
    activeImage--;
    iconRight.style.opacity = 1;
    if (activeImage == 0) {
        activeImage = 0;
        iconLeft.style.opacity = 0.2;
    }
    let imageWidth = image.clientWidth;
    image.style.marginLeft = `-${activeImage * imageWidth / 4}px`;
});

iconRight.addEventListener("click", function () {
    activeImage++;
    iconLeft.style.opacity = 1;
    if (activeImage >= 3) {
        activeImage = 3;
        iconRight.style.opacity = 0.2;
    }

    let imageWidth = image.clientWidth;
    image.style.marginLeft = `-${activeImage * imageWidth / 4}px`;
});
/*slider2*/
const image2 = document.querySelector(".pickfirstimg2");
const iconLeft2 = document.querySelector(".iconL2");
const iconRight2 = document.querySelector(".iconR2");
let activeImage2 = 0;

iconLeft2.addEventListener("click", function () {
    activeImage2--;
    iconRight2.style.opacity = 1;
    if (activeImage2 == 0) {
        activeImage2 = 0;
        iconLeft2.style.opacity = 0.2;
    }
    let imageWidth2 = image2.clientWidth;
    image2.style.marginLeft = `-${activeImage2 * imageWidth2/8 }px`;
});

iconRight2.addEventListener("click", function () {
    activeImage2++;
    iconLeft2.style.opacity = 1;
    if (activeImage2 >= 3) {
        activeImage2 = 3;
        iconRight2.style.opacity = 0.2;
    }

    let imageWidth2 = image2.clientWidth;
    image2.style.marginLeft = `-${activeImage2 * imageWidth2/8}px`;
});
/*footer befor md*/

const submenu = document.querySelectorAll(".zzmenu");
const item= document.querySelectorAll(".submenu11");


item[0].addEventListener("click", function () {
  submenu[0].classList.toggle("sub-height");
  submenu[1].classList.remove("sub-height");
  submenu[2].classList.remove("sub-height");
});
item[1].addEventListener("click", function () {
    submenu[0].classList.remove("sub-height");
    submenu[1].classList.toggle("sub-height");
    submenu[2].classList.remove("sub-height");
  });
  item[2].addEventListener("click", function () {
    submenu[0].classList.remove("sub-height");
    submenu[1].classList.remove("sub-height");
    submenu[2].classList.toggle("sub-height");
  });
