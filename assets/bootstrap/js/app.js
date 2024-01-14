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

document.addEventListener("DOMContentLoaded", function () {
    // Check if the user has previously accepted cookies
    if (!getCookie("cookieConsent")) {
        // If not, show the cookie consent message
        document.getElementById("cookie-consent").style.display = "block";
    }
});

function acceptCookies() {
    // Set a cookie to remember that the user has accepted cookies
    setCookie("cookieConsent", "accepted", 365);
    // Hide the cookie consent message
    document.getElementById("cookie-consent").style.display = "none";
}

function rejectCookies() {
    // Delete the cookie to reject cookies
    deleteCookie("cookieConsent");
    // Hide the cookie consent message
    document.getElementById("cookie-consent").style.display = "none";
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}