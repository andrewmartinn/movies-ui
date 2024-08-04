import { Box, Grid, Paper } from "@mui/material";
import { MovieDataType } from "../../types";
import MovieCard from "../movie/MovieCard";

interface MovieListProps {
  recommendedMovies: MovieDataType[];
}

const MovieList: React.FC<MovieListProps> = ({ recommendedMovies }) => {
  console.log("COMPONENT: MovieList", recommendedMovies);
  return (
    <Box sx={{ display: "flex", gap: 2, overflowX: "scroll" }}>
      {recommendedMovies.map((movie) => (
        <Grid item key={movie.id}>
          <Paper elevation={0}>
            <MovieCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box>
  );
};
export default MovieList;
