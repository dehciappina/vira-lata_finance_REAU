const header = document.querySelector('header')

window.onscroll = function() {
    if(document.documentElement.scrollTop > (window.innerHeight /3)) {
        header.style.transform = 'translateY(0)';
    } else {
        header.style.transform = 'translateY(-100%)';
    }
}