import { FaPlay } from 'react-icons/fa';
import './PlayButton.css';
const PlayButton = () => {
	return (
		<button className='btns btn-play'>
			<FaPlay className='ic-play' />
			<p className='paragraph-play'>Play</p>
		</button>
	);
};

export default PlayButton;
