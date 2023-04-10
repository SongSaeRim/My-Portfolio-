$(window).on('load', function() {
    $('#load').fadeOut(2000);
});

$(function () {
    $('#fullpage').fullpage({
        anchors: ['#section1', '#section2', '#section3', '#section4', '#section5'],
        navigation: false,
        normalScrollElements: '.modal', 
    });
});

$(function () {
    $('a').on('click', function () {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 800);
    });
});


$(window).scroll(function () {
    if ($(this).scrollTop() >= 600) {
        $('#toggle').fadeIn();
    } else {
        $('#toggle').fadeOut();
    }
});
$(function () {
    $('#toggle > .menubtn').click(function () {
        $(this).toggleClass('active');
        $('.toggle_mainmenu').toggle(600);
    });
})

$(window).scroll(function () {
    if($(this).scrollTop() >= 1500){
        $('.chart1').easyPieChart;
        $('.chart2').easyPieChart;
    }
        $('.chart1').easyPieChart({
            barColor: '#B9CDE5',
            trackColor: '#f5edea',
            scaleColor: '#fff',
            lineCap: 'butt',
            lineWidth: 20,
            size: 130,
            animate: 1700,
            onStart: $.noop,
            onStop: $.noop
        });
        $('.chart2').easyPieChart({
            barColor: '#B9CDE5',
            trackColor: '#f5edea',
            scaleColor: '#fff',
            lineCap: 'butt',
            lineWidth: 20,
            size: 130,
            animate: 1700,
            onStart: $.noop,
            onStop: $.noop
        });
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1500) {
            $('#topbtn').fadeIn(600);
            $('#bottombtn').fadeOut(600);
        } else {
            $('#topbtn').fadeOut(600);
            $('#bottombtn').fadeIn(600);
        }
    });
    // 슬라이드
    $('.slide').slick({
        index: 1,
        slide: 'div',
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        speed: 1300,
        dots: true,
        dotsClass: 'dots_custom',
        arrows: true,
        prevArrow: '',
        nextArrow: '',
        draggable: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

$(window).scroll(function () {
    if ($(this).scrollTop() >= 400) {
        $('.section01').fadeIn(500);
    } else {
        $('.section01').fadeOut(500);
    }
});


$(window).scroll(function () {
    if ($(this).scrollTop() >= 900) {
        $('.section02').fadeIn(500);
    }  else {
        $('.section02').fadeOut(600);
    } 
});
$(window).scroll(function () {
    if ($(this).scrollTop() >= 900) {
        $('.slide').fadeIn(800);
    }  else {
        $('.slide').fadeOut(600);
    } 
});


$(window).scroll(function () {
    if ($(this).scrollTop() >= 1800) {
        $('.section03').fadeIn(500);
    }  else {
        $('.section03').fadeOut(600);
    } 
});


$(window).scroll(function () {
    if ($(this).scrollTop() >= 2400) {
        $('#fade04').fadeIn(500);
    } 
    else {
        $('#fade04').fadeOut(600);
    } 
});
$(window).scroll(function () {
    if ($(this).scrollTop() >= 2400) {
        $('.secright').fadeIn(500);
    } 
    else {
        $('.secright').fadeOut(600);
    } 
});
// let observer = new IntersectionObserver((e)=>{
//     e.forEach((섹션)=>{
//         if(섹션.isIntersecting){
//             섹션.target.style.opacity = 1;
//         } 
//         섹션.intersectionRatio
//     })
// })


