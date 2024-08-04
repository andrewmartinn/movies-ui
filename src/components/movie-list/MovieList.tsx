import { Grid } from "@mui/material";
import { MovieDataType } from "../../types";
import MovieCard from "../movie/MovieCard";

interface MovieListProps {
  recommendedMovies?: MovieDataType[];
  searchResults?: MovieDataType[];
}

const MovieList: React.FC<MovieListProps> = ({
  recommendedMovies,
  searchResults,
}) => {
  return (
    <Grid
      mt={-3}
      container
      columnSpacing={{ xs: 0, sm: 1, md: 2 }}
      rowSpacing={0}
      sx={{ width: "100%", ml: 0 }}
    >
      {recommendedMovies && (
        <>
          {recommendedMovies.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={3} lg={3}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </>
      )}
      {searchResults && (
        <>
          {searchResults.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={3} lg={3}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
};
export default MovieList;
