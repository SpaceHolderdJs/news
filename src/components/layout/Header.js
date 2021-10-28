import React from "react";

import { useDispatch } from "react-redux";
import { changeTab } from "../../thunks";

import styles from "../../styles/layout/header.module.scss";

const Header = () => {
  const tabs = ["news", "main"];
  const dispatch = useDispatch();

  return (
    <div className={`row centered shadow ${styles.header}`}>
      <div className={`row centered sp-btw ${styles.container}`}>
        <h1>News</h1>
        <section className="row centered">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={styles.link}
              onClick={() => dispatch(changeTab(tab))}>
              {tab}
            </button>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Header;
