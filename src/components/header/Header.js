import PlayButton from '../ui/buttons/playButton/PlayButton';
import axios from '../../axios';
import requests from '../../requests';
import { useEffect } from 'react';
import { useState } from 'react';
import './Header.css';

const Header = () => {
	const [movie, setMovie] = useState();

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
		}
		fetchData();
	}, []);

	return (
		// In this case char "?" means if movie is ever undefined it wont crash
		<header
			className='header-container'
			style={{
				backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
				backgroundSize: 'cover',
			}}
		>
			<div className='wrapper header-text-container'>
				<h1 className='header-title'>
					{movie?.name || movie?.title || movie?.original_name}
				</h1>
				<p className='header-description'>{movie?.overview}</p>
				<div className='header-buttons-container'>
					<PlayButton isRowButton={false} movieId={movie?.id} />
				</div>
			</div>
		</header>
	);
};

export default Header;
