import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './PlayButton.css';
const PlayButton = ({ isRowButton, movieId }) => {
	return (
		<Link to={`/movie/${movieId}/video`}>
			<button className='btns btn-play'>
				<FaPlay
					className='ic-play'
					style={{ marginRight: isRowButton ? '0px' : '5px' }}
				/>
				{isRowButton === false && <p className='paragraph-play'>Play</p>}
			</button>
		</Link>
	);
};

export default PlayButton;
