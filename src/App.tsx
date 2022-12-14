import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connect from "pages/Connect";
import NotFound from "pages/NotFound";
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Connect />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;