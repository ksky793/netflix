import { useEffect } from 'react';
import { useState } from 'react';
import axios from '../../../axios';
import './Row.css';

import Movie from '../../movies/movie/Movie';
const Row = (props) => {
	const [movies, setMovies] = useState();

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(props.fetchUrl);
			// console.log(request.data);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [props.fetchUrl]);

	return (
		<div className='wrapper row-container'>
			<h2 className='row-title'>{props.rowTitle}</h2>

			<div className='row-movies' style={{ display: 'flex', overflow: 'auto' }}>
				{movies &&
					movies.map((movie) => (
						<Movie
							key={movie.id}
							movie={movie}
							isPosterPath={props.isPosterPath}
						/>
					))}
			</div>
		</div>
	);
};

export default Row;
