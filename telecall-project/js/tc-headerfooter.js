window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 165 || document.documentElement.scrollTop > 165) {
    document.getElementById("bottom-style-nav").style.top = "0";
  } else {
    document.getElementById("bottom-style-nav").style.top = "-90px";
  }
}