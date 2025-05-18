import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Router from "./Router";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
