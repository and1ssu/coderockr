import { createContext, useCallback, useMemo, useState } from "react";

import { api } from "../../services/api";
import { Iarticles, IContext, IDataProvider } from "./types";

export const DataContext = createContext<IContext>({} as IContext);

export function DataProvider({ children }: IDataProvider): JSX.Element {
  const [articles, setArticles] = useState<Iarticles[]>([]);

  const getArticle = useCallback(async (currentPage: number) => {
    try {
      const { data } = await api.get<Iarticles[]>(
        `/articles?_page=1&_limit=${currentPage}`
      );

      setArticles(data);
    } catch (error) {
      error;
    }
  }, []);

  const memoValue = useMemo(() => {
    return { getArticle, articles };
  }, [getArticle, articles]);

  return (
    <DataContext.Provider value={memoValue}>{children}</DataContext.Provider>
  );
}
