import { useState, useEffect } from "react";
import "./index.css";
import Header from "./layouts/headerlayout";
import Main from "./layouts/mainlayout";
import Footer from "./layouts/footerlayout";
import Loading from "./components/loading/loading.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init();

    if (location.pathname === "/") {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);
  return (
    <>
      <div className="wrapper ">
        {loading && <Loading />}
        <a href="tel:+998940511494" className="call-button">
          <button className="call-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="feather-phone-outgoing"
            >
              <path
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                fill="white"
              ></path>
            </svg>
          </button>
        </a>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
