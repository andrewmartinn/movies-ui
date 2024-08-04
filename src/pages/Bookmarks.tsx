import { useEffect, useState } from "react";
import { MovieDataType } from "../types";
import SearchBar from "../components/common/SearchBar";
import { Box, Typography } from "@mui/material";
import MovieList from "../components/movie-list/MovieList";
import useMovieContext from "../hooks/useMovieContext";

const Bookmarks: React.FC = () => {
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
              Bookmarks
            </Typography>
            <MovieList
              recommendedMovies={movies.filter(
                (movie) => movie.isBookmarked !== false
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
export default Bookmarks;
