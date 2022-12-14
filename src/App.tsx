import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connect from "pages/Connect";
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Connect />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;