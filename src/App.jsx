import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./screens/Home";
import Summary from "./screens/Summary";
import About from "./screens/About";
import PageNotFound from "./screens/PageNotFound";
import DetailSummary from "./screens/Summary/DetailSummary";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="summary">
                    <Route index element={<Summary />} />
                    <Route path=":id" element={<DetailSummary />} />
                </Route>
                <Route path="about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
