import { MovieDataType } from "../../types";

interface MovieCardProps {
  movie: MovieDataType;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  console.log("COMPONENT: MovieCard", movie);
  return <div>MovieCard</div>;
};
export default MovieCard;
