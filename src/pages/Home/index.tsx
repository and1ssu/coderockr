import { useEffect, useState } from "react";

import Cards from "../../components/Cards";
import { api } from "../../services/api";
import useStyles from "./styled";

interface IData {
  id: string;
  author: string;
  title: string;
  article: string;
  imageUrl: string;
}

export default function Home(): JSX.Element {
  const classes = useStyles();
  const [data, setData] = useState<IData[]>([]);
  const [currentPage, setCurrentPage] = useState(5);

  useEffect(() => {
    api.get(`/articles?_page=1&_limit=${currentPage}`).then(({ data }) => {
      setData(data);
    });
  }, [currentPage]);

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
      {data?.map((item) => {
        return (
          <Cards
            key={item.id}
            author={item.author}
            title={item.title}
            article={item.article}
            imageUrl={item.imageUrl}
          />
        );
      })}{" "}
      <li id="sentinela" />
    </div>
  );
}
