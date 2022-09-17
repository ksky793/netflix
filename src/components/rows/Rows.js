import requests from '../../requests';
import Row from './row/Row';
const Rows = () => {
	const movies = [
		{
			rowTitle: 'Trending Now',
			fetchUrl: requests.fetchTrending,
			isPosterPath: false,
		},
		{
			rowTitle: 'Netflix Originals',
			fetchUrl: requests.fetchNetflixOriginals,
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
