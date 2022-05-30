import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path={`/`} element={<Home />} />
                <Route path={'/favorites'} element={<Favorites />}/>
            </Routes>
        </>
    );
}

export default App;
