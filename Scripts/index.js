document.addEventListener("scroll", function() {
    var navbar = document.querySelector("nav");
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop === 0) {
      navbar.classList.add("transparent");
    } else {
      navbar.classList.remove("transparent");
    }
  });  