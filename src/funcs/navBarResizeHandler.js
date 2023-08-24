export const handleResize = () => {
  const windowWidth = window.innerWidth;

  const logoEl = document.getElementById("logo");
  const navLinks = document.getElementById("navLinks");
  const nav = document.getElementById("nav");

  if (windowWidth >= 768) {
    navLinks.append(logoEl);
  } else {
    const hamburger = nav.lastChild;
    hamburger.before(logoEl);
  }
};
