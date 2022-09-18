import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../axios';
import { API_KEY } from '../../requests';
import YouTube from 'react-youtube';
const Video = () => {
	const { state } = useLocation();
	const movieId = state.movieId;

	const [video, setVideo] = useState();

	const opts = {
		height: '400',
		width: '100%',
		playerVars: {
			autoplay: 1, // 1: autoplay 0: option is turned off
		},
	};
	const _onReady = (e) => {
		e.target.pauseVideo();
	};
	useEffect(() => {
		async function fetchData() {
			const video = await axios.get(
				`movie/${movieId}/videos?api_key=${API_KEY}`
			);
			setVideo(video.data.results[0]);
		}

		fetchData();
	}, [movieId]);
	return (
		<>
			{video && <YouTube videoId={video.key} opts={opts} onReady={_onReady} />}
		</>
	);
};

export default Video;
