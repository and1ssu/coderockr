import { useEffect, useState } from "react";

import Cards from "../../components/Cards";
import { useCreateData } from "../../context/DataProvider/useCreateData";
import useStyles from "./styled";

export default function Home(): JSX.Element {
  const classes = useStyles();
  const { getArticle, articles } = useCreateData();

  const [currentPage, setCurrentPage] = useState(5);

  useEffect(() => {
    getArticle(currentPage);
  }, [getArticle, currentPage]);

  useEffect(() => {
    const intersectionObserver: any = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 2);
      }
    });

    intersectionObserver.observe(document.querySelector("#sentinela"));

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <div className={classes.bg}>
      {articles?.map((item, index) => {
        return (
          <Cards
            key={index}
            author={item.author}
            title={item.title}
            article={item.article}
            imageUrl={item.imageUrl}
          />
        );
      })}
      <li id="sentinela" />
    </div>
  );
}
