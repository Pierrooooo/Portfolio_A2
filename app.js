var header = document.getElementById("header")
window.onscroll = function() {scroling_effect()}
function scroling_effect() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.boxShadow = "inset 0px -4px 8px rgba($color: #110F0E, $alpha: 0.1)"
} else{
    header.style.boxShadow = ""
}
}

function tp_top() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function tp_lower() {
    window.scrollTo({top: 1000, behavior: 'smooth'});
}