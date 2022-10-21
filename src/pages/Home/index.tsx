import { useCallback, useEffect, useState } from "react";

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

  const getData = useCallback(async () => {
    try {
      const { data } = await api.get("/articles");
      setData(data);
    } catch (error: any) {
      const logError = { ...error };
      console.log(logError);
    }
  }, []);
  console.log(data);
  useEffect(() => {
    getData();
  }, [getData]);

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
