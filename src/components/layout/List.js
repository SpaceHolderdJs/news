import React, { useState, useCallback, useEffect } from "react";
import Button from "./Button";
import Card from "../Card";

import styles from "../../styles/layout/list.module.scss";

const List = ({ children }) => {
  const sortTypes = ["time", "rank", "none"];
  const [sort, setSort] = useState();
  const [sortedData, setSortedData] = useState([]);

  const sortByDate = useCallback(
    (children) => {
      const sorted = [...children].sort((n1, n2) => {
        const date1 = new Date(Date.parse(n1.props.news.published_date));
        const date2 = new Date(Date.parse(n2.props.news.published_date));

        return +date1 > +date2 ? 1 : -1;
      });
      setSortedData(sorted);
    },
    [children]
  );

  const sortByRank = useCallback(
    (children) => {
      const sorted = [...children].sort(
        (n1, n2) => +n1.props.news.rank - +n2.props.news.rank
      );
      setSortedData(sorted);
    },
    [children]
  );

  useEffect(() => {
    children.length &&
      sort &&
      (sort === "time" ? sortByDate(children) : sortByRank(children));
  }, [sort, children]);

  return (
    <div className={`column ${styles.list}`}>
      <section className={`row centered shadow ${styles.sorting}`}>
        Sorting:
        {sortTypes.map((type) => (
          <div className={sort === type && styles.activeBtn}>
            <Button
              text={type}
              onClick={() => setSort(type === "none" ? null : type)}
            />
          </div>
        ))}
      </section>
      {!sort ? children : sortedData}
    </div>
  );
};

export default List;
