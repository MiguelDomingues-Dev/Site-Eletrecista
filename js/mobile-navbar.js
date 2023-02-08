class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      console.log(index / 7 + 0.3);
      link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

// modo - DARK

const changeThemeBtn = document.querySelector("#change-theme");

// Toggle dark mode
function toggleDarkmode() {
  document.body.classList.toggle("dark");
}

// Load light or dark mode
function loadTheme() {
    const darkMode = localStorage.getItem("dark");

    if(darkMode) {
      toggleDarkmode();
    }
}

loadTheme ();

changeThemeBtn.addEventListener("change", function() {
  toggleDarkmode();

  // Save or remove dark mode
  localStorage.removeItem("dark");

    if(document.body.classList.contains("dark") ) {
      localStorage.setItem("dark", 1);
    }
});

