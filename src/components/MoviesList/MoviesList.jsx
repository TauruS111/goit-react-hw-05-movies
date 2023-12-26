import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      {movies.length > 0 ? (
        movies.map(movieData => (
          <div key={movieData.id}>
            <Link to={`/movies/${movieData.id}`} state={{ from: location }}>
              <p>{movieData.title}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>Oops 😢 not found film</p>
      )}
    </div>
  );
};

export default MoviesList;
