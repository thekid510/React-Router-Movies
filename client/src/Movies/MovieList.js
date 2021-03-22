import React from 'react';
import { Link, link, useRouteMatch } from 'react-router-dom'
export default function MovieList({movies}) {
  const { url } = useRouteMatch();

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link key ={movie.id} to={`/movies/${movie.id}`}>
          <MovieDetails movie={movie} />
        </Link>
        
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
