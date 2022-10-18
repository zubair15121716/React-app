import './App.css';
import Home from './pages/Home.jsx';
import Next from './pages/NextPage.jsx';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {
    return (
    <Router>
        <>
           <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/newPage" element={<Next />} />
           </Routes>
        </>
    </Router>
  );
}

export default App;
