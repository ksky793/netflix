import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Video from './pages/video/Video';
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movie/:movieId/video' element={<Video />} />
			</Routes>
		</div>
	);
}

export default App;
