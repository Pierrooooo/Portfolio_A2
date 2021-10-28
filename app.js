var header = document.getElementById("header")
window.onscroll = function() {scroling_effect()}
function scroling_effect() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.boxShadow = "inset 0px -4px 8px rgba($color: #110F0E, $alpha: 0.1)"
    console.log()
} else{
    header.style.boxShadow = ""
}
}