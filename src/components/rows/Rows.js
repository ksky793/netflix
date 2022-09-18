import requests from '../../requests';
import Row from './row/Row';
import './Rows.css';
const Rows = () => {
	const movies = [
		{
			rowTitle: 'Top Rated',
			fetchUrl: requests.fetchTopRated,
			isPosterPath: false,
		},
		{
			rowTitle: 'Action Movies',
			fetchUrl: requests.fetchActionMovies,
			isPosterPath: true,
		},
		// {
		// 	rowTitle: 'Horror Movies',
		// 	fetchUrl: requests.fetchHorrorMovies,
		// 	isPosterPath: false,
		// },

		// {
		// 	rowTitle: 'Romance Movies',
		// 	fetchUrl: requests.fetchRomanceMovies,
		// 	isPosterPath: true,
		// },
	];
	return (
		<div className='rows-container'>
			{movies.map((movie, index) => (
				<Row
					key={index}
					rowTitle={movie.rowTitle}
					fetchUrl={movie.fetchUrl}
					isPosterPath={movie.isPosterPath}
				/>
			))}
		</div>
	);
};

export default Rows;
