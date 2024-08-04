import { MovieDataType } from "../../types";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import useMovieContext from "../../hooks/useMovieContext";

interface TrendingMovieCardProps {
  movie: MovieDataType;
}

const TrendingMovieCard: React.FC<TrendingMovieCardProps> = ({ movie }) => {
  const { dispatch } = useMovieContext();

  const handleToggleBookmark = (id: number) => {
    dispatch({ type: "TOGGLE_BOOKMARK", payload: id });
  };

  return (
    <Card elevation={0} sx={{ background: "transparent" }}>
      <CardContent
        sx={{
          padding: 0,
          position: "relative",

          display: "flex",
        }}
      >
        <img
          src={movie.image}
          alt={movie.title}
          style={{ width: "300px", height: "100%", borderRadius: "8px" }}
        />
        <Box
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgcolor="rgba(0,0,0,0.28)"
          borderRadius="8px"
        />
        <Stack
          mt={"6"}
          spacing={0}
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={4}
        >
          <Grid container alignItems={"center"} spacing={1}>
            <Grid item sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LiveTvIcon sx={{ fill: "#e0e0e0" }} />
              <Typography
                fontSize={12}
                fontWeight={700}
                color={"#e0e0e0"}
                aria-label="rating"
              >
                {movie.category}
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                fontSize={10}
                fontWeight={700}
                color={"#e0e0e0"}
                aria-label="rating"
              >
                {movie.rating}
              </Typography>
            </Grid>
          </Grid>

          <Typography
            fontSize={19}
            fontWeight={500}
            color={"#e0e0e0"}
            p={0}
            aria-label="title"
          >
            {movie.title}
          </Typography>
          <Typography
            fontSize={12}
            fontWeight={700}
            color={"#e0e0e0"}
            aria-label="rating"
          >
            {movie.year}
          </Typography>
        </Stack>
        <Box position="absolute" top={2} right={2}>
          <IconButton
            onClick={() => handleToggleBookmark(movie.id)}
            sx={{
              background: "black",
              "&:hover": { background: "black", opacity: 0.8 },
            }}
          >
            {movie.isBookmarked ? (
              <BookmarkIcon sx={{ fill: "#e0e0e0" }} />
            ) : (
              <BookmarkBorderIcon sx={{ fill: "#e0e0e0" }} />
            )}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
export default TrendingMovieCard;
