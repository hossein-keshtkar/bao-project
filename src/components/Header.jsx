import React from "react";

import HeaderSmall from "./HeaderSmall";

import HeaderBig from "./HeaderBig";

const Header = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const resizeHandler = () => {
      const windowWidth = window.innerWidth;
      setWidth(windowWidth);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return <header>{width >= 768 ? <HeaderBig /> : <HeaderSmall />}</header>;
};

export default Header;
