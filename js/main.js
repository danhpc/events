function xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}

function slideInvestors() {
    var wrap_nhadattu = new Swiper('.wrap-nhadattu .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.wrap-nhadattu .slide-button-next',
            prevEl: '.wrap-nhadattu .slide-button-prev',
        },
        /*breakpoints: {
            1023: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            }
        }*/
    });
}

function slideGallery() {
    var slideGallery = new Swiper('.list-gallery.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 2,
        loop: false,
        pagination: {
            el: '.list-gallery .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.section-gallery .slide-button-next',
            prevEl: '.section-gallery .slide-button-prev',
        },
        breakpoints: {
            600: {
                slidesPerView: 'auto',
            }
        }
    });
}

if ($(window).width() <= 1024) {

    /* Show Hide Menu Mobile */
    $(".hamburger").click(function() {
        $("body").toggleClass("show-left-meu");
        $(this).toggleClass("active");
    });
    /* /Show Hide Menu Mobile */
    $(".section-route .view-all").click(function() {
        $(".section-route .timeline-route").toggleClass("show-all");
    });
}


$(".section-route .view-all").click(function() {
    $(".section-route .timeline-route").toggleClass("active");
    var text_route = $(".section-route .view-all").text();
    if (text_route == "Thu gọn") {
        $(".section-route .view-all").text("Xem toàn bộ");
    } else {
        $(".section-route .view-all").text("Thu gọn");
    }
});

$(document).ready(function() {
    slideInvestors();
    slideGallery();
});

$(window).on("load", function() {});
$(window).on("resize", function() {});