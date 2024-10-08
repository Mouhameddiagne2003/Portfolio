import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import { useTranslation } from 'react-i18next';
import '../i18n.js';
import './index.css';

import Navbar from './components/Navbar/Navbar.jsx';
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Porfolio from "./pages/portfolio/Porfolio.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Cursor from "./components/Cursor/Cursor.jsx";
import Language from "./components/Language/Language.jsx";
import Theme from "./components/Theme/Theme.jsx";
import { Analytics } from "@vercel/analytics/react"
function App() {
const { t, i18n } = useTranslation();

const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    };
return(
    <BrowserRouter>
        <Analytics className="AppAnalytics" />
        <Theme/>
        <Language/>
        <Cursor/>
        <Navbar />
        <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='portfolio' element={<Porfolio />} />
            <Route path='contact' element={<Contact />} />
        </Routes>
    </BrowserRouter>
)
}

export default App;
