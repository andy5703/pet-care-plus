import './App.scss';
import HomePage from "./pages/HomePage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/categories" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
