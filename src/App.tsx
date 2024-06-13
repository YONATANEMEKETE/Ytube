import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import VideoDetail from './Pages/VideoDetail';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideoDetail />} />
      </Routes>
      {/* <Home /> */}
      {/* <VideoDetail /> */}
    </div>
  );
}

export default App;
