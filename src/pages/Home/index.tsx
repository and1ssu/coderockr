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
  const [data, setData] = useState<IData[]>();

  useEffect(() => {
    api.get("/articles?per_page=1&_page=5").then(({ data }) => {
      setData(data);
    });
  }, []);
  console.log(data?.length);
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
      })}
    </div>
  );
}
