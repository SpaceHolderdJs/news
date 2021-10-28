import React, { useState } from "react";
import Button from "./layout/Button";

import styles from "../styles/card.module.scss";

const Card = ({ news }) => {
  const [full, setFull] = useState(false);

  const {
    author,
    link,
    media,
    published_date,
    rank,
    rights,
    title,
    summary,
    topic,
    _id,
  } = news;

  const date = new Date(Date.parse(published_date));

  if (full)
    return (
      <div className={`column ${styles.cardFull}`}>
        <h3>{title}</h3>
        <section className="row ">
          <div
            style={{ background: `url(${media})` }}
            className={styles.img}></div>
          <p>{summary}</p>
        </section>
        <a href={link}>View original</a>
        <Button text="Hide" onClick={() => setFull(false)} />
      </div>
    );
  else
    return (
      <div className={`row centered sp-btw shadow ${styles.cardSmall}`}>
        <section className="row">
          <div
            style={{ background: `url(${media})` }}
            className={styles.img}></div>
          <p>{title}</p>
        </section>
        <Button text="View" onClick={() => setFull(true)} />
        <span>
          {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
        </span>
      </div>
    );
};

export default Card;
