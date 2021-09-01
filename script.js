

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav-bg").style.backgroundColor = "#FEFEFE";
  } else {
    document.getElementById("nav-bg").style.backgroundColor = "";
  }
}
