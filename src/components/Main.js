import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import styles from "../styles/main.module.scss";

const Main = () => {
  const container = useRef();
  useEffect(() => {
    const element = container.current;
    gsap.fromTo(
      element,
      { translateX: "200%" },
      { translateX: "0%", duration: 2, ease: "elastic" }
    );
  }, []);

  return (
    <div ref={container} className={`column container ${styles.main}`}>
      <h1>Main</h1>
    </div>
  );
};

export default Main;
