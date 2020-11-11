window.onscroll = function() {
    headerControll()
};

var header = document.getElementById("mainHeader");
var headPos = header.offsetTop;

function headerControll() {
  if (window.pageYOffset > headPos) {
    header.classList.add("fix-header");
  } else {
    header.classList.remove("fix-header");
  }
}