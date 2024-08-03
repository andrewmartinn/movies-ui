import { useState } from "react";

import SearchBar from "../components/common/SearchBar";
import TrendingMoviesList from "../components/movie-list/TrendingMoviesList";
import MovieList from "../components/movie-list/MovieList";

import { Box, Typography } from "@mui/material";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <Box>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Box py={2}>
        {searchTerm === "" ? (
          <Box width="100%">
            <Box width="100%">
              <Typography variant="h5" component="h2" my={4} fontWeight={500}>
                Trending
              </Typography>
              <TrendingMoviesList />
            </Box>
            <Box width="100%">
              <Typography variant="h5" component="h2" my={4} fontWeight={500}>
                Recommend For You
              </Typography>
              <MovieList />
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Typography variant="h5" component="h2" my={4} fontWeight={500}>
              Search Results for {searchTerm}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default Home;
