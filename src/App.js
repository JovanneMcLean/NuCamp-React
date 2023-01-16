import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import Footer from "./components/Footer";
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from "./pages/AboutPage";
import { fetchCampsites } from "./features/campsites/campsitesSlice";
import { fetchPartners } from "./features/partners/partnerSlice";
import { fetchPromotions } from "./features/promotions/promotionsSlice";
import { fetchComments } from "./features/Comments/commentsSlice";
import "./App.css";
import { useEffect } from "react";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
        dispatch(fetchPromotions());
        dispatch(fetchComments());
    }, [dispatch]);

    return (
        <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
                <Route path="directory" element={<CampsitesDirectoryPage />} />
                <Route path='directory/:campsiteId' element={<CampsiteDetailPage />} />
                <Route path='about' element={<AboutPage />} />
        </Routes>
        <Footer />
        </div>
    );
}

export default App;
