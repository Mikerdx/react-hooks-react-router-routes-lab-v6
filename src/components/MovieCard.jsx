import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function MovieCard({ id, title }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>{title}</Link>
    </div>
  );
}

export default MovieCard;
