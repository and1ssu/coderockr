import { useContext } from "react";

import { DataContext } from ".";
import { IContext } from "./types";

export function useCreateData(): IContext {
  const context = useContext(DataContext);
  return context;
}
