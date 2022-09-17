import { FaPlay } from 'react-icons/fa';
import './PlayButton.css';
const PlayButton = ({ isRowButton }) => {
	return (
		<button className='btns btn-play'>
			<FaPlay
				className='ic-play'
				style={{ marginRight: isRowButton ? '0px' : '5px' }}
			/>
			{isRowButton === false && <p className='paragraph-play'>Play</p>}
		</button>
	);
};

export default PlayButton;
