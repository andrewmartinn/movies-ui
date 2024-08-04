export interface MovieDataType {
  id: number;
  title: string;
  year: string;
  rating: string;
  image: string;
  category: "Movie" | "Show";
  isBookmarked: boolean;
  isTrending: boolean;
}

export interface MovieState {
  movies: MovieDataType[];
}

export interface MovieContextType extends MovieState {
  dispatch: React.Dispatch<MovieAction>;
}

export interface MovieProviderProps {
  children: React.ReactNode;
}

export type MovieActionType = "TOGGLE_BOOKMARK";

interface toggleBookmarkAction {
  type: MovieActionType;
  payload: number;
}

export type MovieAction = toggleBookmarkAction;
