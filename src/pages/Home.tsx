import { useEffect, useState } from "react";

import SearchBar from "../components/common/SearchBar";
import TrendingMoviesList from "../components/movie-list/TrendingMoviesList";
import MovieList from "../components/movie-list/MovieList";

import { Box, Typography } from "@mui/material";
import { MovieDataType } from "../types";
import useMovieContext from "../hooks/useMovieContext";

const Home: React.FC = () => {
  const { movies } = useMovieContext();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<MovieDataType[]>([]);

  const trendingList = movies.filter((movie) => movie.isTrending === true);
  const recommendList = movies.filter((movie) => movie.isTrending !== true);

  useEffect(() => {
    if (movies) {
      if (searchTerm !== "") {
        const filteredResults = movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log(filteredResults);
        setSearchResults(filteredResults);
      } else {
        setSearchResults([]);
      }
    }
  }, [movies, searchTerm]);

  return (
    <Box>
      <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Box py={2}>
        {searchTerm === "" && searchResults.length === 0 ? (
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
