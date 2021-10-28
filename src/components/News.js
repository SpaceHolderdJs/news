import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../thunks";

import gsap from "gsap";

import Button from "./layout/Button";
import List from "./layout/List";
import Card from "./Card";

import styles from "../styles/news.module.scss";

const News = () => {
  const news = useSelector((store) => store.news);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const container = useRef();

  useEffect(() => {
    const element = container.current;
    gsap.fromTo(
      element,
      { translateX: "-100%" },
      { translateX: "0%", duration: 2, ease: "elastic" }
    );
  }, []);

  return (
    <div className={`column centered container ${styles.news}`} ref={container}>
      <h1>Getting any news you need by request</h1>
      <section className="row centered">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button text="search" onClick={() => dispatch(fetchNews(value))} />
      </section>
      {news && (
        <List news={news}>
          {news.map((n) => (
            <Card news={n} />
          ))}
        </List>
      )}
    </div>
  );
};

export default News;
