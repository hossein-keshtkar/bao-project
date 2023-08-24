import React, { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ContentsSmall from "./components/ContentsSmall";
import ContentsBig from "./components/ContentsBig";
import "./app.css";

const Form = lazy(() => import("./components/Form"));
const Footer = lazy(() => import("./components/Footer"));
const FooterBig = lazy(() => import("./components/FooterBig"));

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const resizeHandler = () => {
      const screenWidth = window.innerWidth;
      setWidth(screenWidth);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <main className="App">
      <Navbar />
      <Header />
      {width >= 768 ? <ContentsBig /> : <ContentsSmall />}
      <Suspense fallback={<div>Loading...</div>}>
        <Form />
        {width >= 768 ? <FooterBig /> : <Footer />}
      </Suspense>
    </main>
  );
}

export default App;
