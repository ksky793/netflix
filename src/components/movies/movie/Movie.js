import axios from '../../../axios';
import { API_KEY } from '../../../requests';
import { useEffect } from 'react';
import PlayButton from '../../ui/buttons/playButton/PlayButton';
import './Movie.css';
import { useState } from 'react';
const Movie = ({ movie, isPosterPath }) => {
	const BASE_URL = 'https://image.tmdb.org/t/p/original/';

	const backdropPathUrl = `${BASE_URL}${movie?.backdrop_path}`;

	const posterPathUrl = `${BASE_URL}${movie?.poster_path}`;

	// console.log(movie);

	const [movieGenres, setMovieGenres] = useState();

	useEffect(() => {
		async function fetchData() {
			const genres = await axios.get(
				`/movie/${movie?.id}?api_key=${API_KEY}&language=en-US`
			);

			setMovieGenres(genres.data.genres);

			console.log(movie);
			return genres;
		}
		fetchData();
	}, []);
	return (
		<div className='movie-container'>
			<div
				className={isPosterPath ? 'poster-size' : 'backdrop-size'}
				style={{
					backgroundImage: `url('${
						isPosterPath ? posterPathUrl : backdropPathUrl
					}')`,
				}}
			>
				<div className='movie-text-container'>
					<h3 className='movie-title'>{movie.title || movie.name}</h3>
					<PlayButton isRowButton={true} movieId={movie?.id} />
					<h4 className='movie-vote-average'>
						Popularity: {movie.vote_average}
					</h4>
					<ul className='movie-genres-list'>
						{movieGenres &&
							movieGenres.map((genre, index) => (
								<li className='movie-genre' key={index}>
									{genre.name}
								</li>
							))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Movie;
