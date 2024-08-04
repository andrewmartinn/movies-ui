import { useEffect, useState } from "react";
import useMovieContext from "../hooks/useMovieContext";
import { Box, Typography } from "@mui/material";
import SearchBar from "../components/common/SearchBar";
import MovieList from "../components/movie-list/MovieList";
import { MovieDataType } from "../types";

const TvShows: React.FC = () => {
  const { movies } = useMovieContext();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<MovieDataType[]>([]);

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
            <Typography variant="h5" component="h2" my={4} fontWeight={500}>
              TV Shows
            </Typography>
            <MovieList
              recommendedMovies={movies.filter(
                (movie) => movie.category !== "Movie"
              )}
            />
          </Box>
        ) : (
          <Box width="100%">
            <Typography variant="h5" component="h2" my={4} fontWeight={500}>
              Search Results for "{searchTerm}"
            </Typography>
            <MovieList searchResults={searchResults} />
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default TvShows;
