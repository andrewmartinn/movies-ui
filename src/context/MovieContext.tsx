import { createContext, useReducer } from "react";
import {
  MovieContextType,
  MovieDataType,
  MovieState,
  MovieProviderProps,
} from "../types";
import { moviesData } from "../data/moviesData";
import movieReducer from "./MovieReducer";

export const MovieContext = createContext<MovieContextType | undefined>(
  undefined
);

const MovieList: MovieDataType[] = moviesData;

const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const initialState: MovieState = {
    movies: MovieList,
  };
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
