let h = window.innerHeight;
document.getElementById("menu-principal-page").setAttribute("style", "height: " + h + "px")

$(window).resize(function () {
    h = window.innerHeight
    document.getElementById("menu-principal-page").setAttribute("style", "height: " + h + "px")
})


$('.menu-services-text').hover(function () {
    if ($('#menu-services').hasClass('menu-services-active')) {
        setTimeout(function () {
            $('#menu-color-fondo-reveal').css({
                "left": "-70%"
            })
        }, 100)
    }
})
$('.menu-services-text').mouseleave(function () {
    setTimeout(function () {
        $('#menu-color-fondo-reveal').css({
            "left": "0"
        })
    }, 100)
})

$('#retract-menu').click(function () {
    $('#menu-services').attr('class', "menu-services-inactive")
    setTimeout(() => {
        for(i = 1; i <= slideLenght; i++){
            var id = "img-sample" + i;
            if(document.getElementById("img-sample" + i).children[2].tagName == "VIDEO"){
                document.getElementById("img-sample" + i).children[2].play();
            }
        }
    }, 700);
    
})
$('#expand-menu-services').click(function () {
    $('#menu-services').attr('class', "menu-services-active")
    setTimeout(() => {
        for(i = 1; i <= slideLenght; i++){
            var id = "img-sample" + i;
            if(document.getElementById("img-sample" + i).children[2].tagName == "VIDEO"){
                document.getElementById("img-sample" + i).children[2].pause();
            }
        }
    }, 700);
})

var timeout = setTimeout("updateClock()", 3000)

var totalTime = 1;

function updateClock() {
    var date = document.getElementById('date-pag')
    date.innerHTML = parseInt(date.textContent) + totalTime;
    if (parseInt(date.textContent) >= 2022) {
        date.innerHTML = 2023;
        setTimeout("showTitle()", 500)
    } else {
        totalTime + 1;
        setTimeout("updateClock()", 25);
    }
}

function showTitle() {
    document.getElementById("date-load-num").setAttribute("class", "date-load")
    document.getElementById("titulobamboom").setAttribute("class", "bamboom-screen-title-load")
    setTimeout("showPage()", 1500);
}

function showPage() {
    document.getElementById("pantalla-carga").setAttribute("class", "page-showinfo")
    setTimeout(function () {
        $('header').attr("class", "")
        setTimeout(() => {
            document.getElementById("download-catalog-container").setAttribute("class", "download-catalog")
            setTimeout(() => {
                document.getElementById("wrapper-inactive").removeAttribute("id")
            }, 200);
        }, 500);
    }, 700)
}

$(".menu-services-text").hover(function () {
    let index = $(this).index();
    document.getElementById("vid0").setAttribute("class", "video-menu")
    document.getElementById("video-menu-source0").pause()
    document.getElementById("vid1").setAttribute("class", "video-menu")
    document.getElementById("video-menu-source1").pause()
    document.getElementById("vid2").setAttribute("class", "video-menu")
    document.getElementById("video-menu-source2").pause()
    document.getElementById("vid3").setAttribute("class", "video-menu")
    document.getElementById("video-menu-source3").pause()
    document.getElementById("vid" + index).setAttribute("class", "video-menu-active")
    document.getElementById("video-menu-source" + index).play()
})

let slideIndex = 1;
let slides = document.getElementsByClassName("img-sample-principal")
let slideLenght = slides.length;
slides[0].setAttribute("class", "img-sample-principal-active")

function showSlides() {
    console.log(slideIndex)
    for (i = 1; i <= slideLenght; i++) {
        var id = "img-sample" + i;
        if (slideIndex != i) {
            document.getElementById(id).setAttribute("class", "img-sample-principal")
            if(document.getElementById(id).children[2].tagName == "VIDEO"){
                var idtemp = id;
                setTimeout(() => {
                    document.getElementById(idtemp).children[2].pause();  
                }, 500);
            } 
        } else {
            document.getElementById(id).setAttribute("class", "img-sample-principal-active")
            if(document.getElementById(id).children[2].tagName == "VIDEO"){
                document.getElementById(id).children[2].play();    
            } 
        }
    }
}

function SlideAuto(){
    slideIndex++;
    if (slideIndex > slideLenght) {
        slideIndex = 1;
    }
    showSlides();
}

var SlidesImages = setInterval(SlideAuto, 30000);

let prev = document.getElementById("prev");
let next = document.getElementById("next");

prev.addEventListener("click", function () {
    slideIndex -= 1;
    if (slideIndex < 1) {
        slideIndex = slideLenght;
    }
    showSlides();
});

next.addEventListener("click", function () {
    slideIndex++;
    if (slideIndex > slideLenght) {
        slideIndex = 1;
    }
    showSlides();
});

$("#prev, #next").hover(function () {
    clearInterval(SlidesImages);
})
$("#prev, #next").mouseleave(function () {
    SlidesImages = setInterval(SlideAuto, 30000);
})

