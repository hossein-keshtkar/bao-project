export const handleResize = () => {
  const windowWidth = window.innerWidth;

  const logoEl = document.getElementById("logo");
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.getElementById("navbar-hamburger");

  if (windowWidth >= 768) {
    navLinks.append(logoEl);
  } else {
    hamburger.before(logoEl);
  }
};
