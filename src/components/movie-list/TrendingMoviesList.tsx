import { Box, Grid, Paper } from "@mui/material";
import { MovieDataType } from "../../types";
import TrendingMovieCard from "../movie/TrendingMovieCard";

interface TrendingMoviesListProps {
  trendingMovies: MovieDataType[];
}

const TrendingMoviesList: React.FC<TrendingMoviesListProps> = ({
  trendingMovies,
}) => {
  return (
    <Box
      className="trending-movies"
      sx={{ display: "flex", gap: 2, overflowX: "scroll" }}
    >
      {trendingMovies.map((movie) => (
        <Grid item key={movie.id}>
          <Paper elevation={0} sx={{ background: "transparent" }}>
            <TrendingMovieCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box>
  );
};
export default TrendingMoviesList;
