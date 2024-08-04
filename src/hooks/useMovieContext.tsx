import { useContext } from "react";
import { MovieContextType } from "../types";
import { MovieContext } from "../context/MovieContext";

const useMovieContext = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useMovieContext must be used within MovieProvider");
  }
  return context;
};
export default useMovieContext;
