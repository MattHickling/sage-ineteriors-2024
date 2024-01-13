$(document).ready(function () {
    $('.testimonial-carousel').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var logoImage = document.getElementById("logoImage");

    if (logoImage.complete) {
        logoImage.classList.add("loaded");
    } else {
        logoImage.onload = function () {
            logoImage.classList.add("loaded");
        };
    }
});

document.addEventListener('DOMContentLoaded', function () {
var yearElement = document.getElementById('current-year');
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
yearElement.textContent = currentYear;
});