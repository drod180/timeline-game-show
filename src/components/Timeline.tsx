import { createSignal } from "solid-js";
import question_mark from '../images/question_mark.png';
import movie_image from '../images/movie_image.jpg';
import "./Timeline.css";

export default function Timeline() {
  const [movies, setMovies] = createSignal([{src: movie_image, isHover: false}]);
  const [activeMovie, setActiveMovie] = createSignal(null);

  function handleGuessClick(src, index) {
    const newMovies = [...movies()];
    newMovies.splice(index, 0, {src: src, isHover: false});
    setMovies([...newMovies])
    setMovies(movies().filter((movie) => movie.isHover === false));
    setActiveMovie(null);
    
  }

  function handleMouseOverMovie(movie) {
    if (activeMovie() !== movie) {
      setMovies(movies().filter((movie) => movie.isHover === false));
      setActiveMovie(movie);

      const newMovies = [...movies()];
      const index = newMovies.indexOf(movie);
      if (index !== -1) {
        newMovies.splice(index + 1, 0, {src: question_mark, isHover: true});
        newMovies.splice(index, 0, {src: question_mark, isHover: true});
      }
      setMovies([...newMovies])
      
    }
  }


  return (
    <div class="timeline-container">
      <div class="topline-container">
        {movies().map((movie, index) => (
        <img
          class="movie-content" 
          src={movie.src} 
          alt={`Movie ${index}`} 
          onClick={movie.isHover ? () => handleGuessClick(movie_image, movies().indexOf(movie)) : undefined}
          onMouseOver={!movie.isHover ? () => handleMouseOverMovie(movie) : undefined}
        />
      ))}
      </div>
      <div class="botline-container">
        <div class="line-container">
          <div class="line" />
        </div>
      </div>
    </div>
  );
}
