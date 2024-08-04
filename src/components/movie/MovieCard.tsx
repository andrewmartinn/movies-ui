import { MovieDataType } from "../../types";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import useMovieContext from "../../hooks/useMovieContext";

interface MovieCardProps {
  movie: MovieDataType;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { dispatch } = useMovieContext();

  const handleToggleBookmark = (id: number) => {
    dispatch({ type: "TOGGLE_BOOKMARK", payload: id });
  };
  return (
    <Card
      variant="outlined"
      sx={{
        background: "transparent",
        color: "#e0e0e0",
        my: 3,
        border: "none",
      }}
    >
      <CardContent sx={{ padding: 0, position: "relative" }}>
        <img
          src={movie.image}
          alt={movie.title}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
          }}
        />

        <Grid container spacing={1} alignItems={"center"}>
          <Grid item>
            <Typography
              fontSize={12}
              fontWeight={700}
              color={"#e0e0e0"}
              aria-label="rating"
            >
              {movie.year}
            </Typography>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: "4px",
                height: "4px",
                background: "#BDBDBD",
                borderRadius: "50%",
              }}
            />
          </Grid>
          <Grid item sx={{ display: "flex", gap: 1 }}>
            <LiveTvIcon sx={{ fill: "#e0e0e0", fontSize: "14px" }} />
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
            <Box
              sx={{
                width: "4px",
                height: "4px",
                background: "#BDBDBD",
                borderRadius: "50%",
              }}
            />
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
          fontSize={16}
          fontWeight={500}
          color={"#e0e0e0"}
          p={0}
          aria-label="title"
        >
          {movie.title}
        </Typography>
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
export default MovieCard;
