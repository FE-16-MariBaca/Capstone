import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import NavBar from './public-components/Navbar/NavBar';
import LandingPage from './LandingPage/LandingPage';
import Login from './LoginRegister/Login';
import Register from './LoginRegister/Register';
import GenrePage from './GenrePage/GenrePage';
import NotFound from './public-components/NotFound';
import SelfImprovement from './GenrePage/ListBook/SelfImprovement';
import SelfImprovementDetail from './DetailPage/ListDetail/SelfImprovementDetail';
import SelfImprovementRead from './ReadPage/SelfImprovementRead';
import Programming from './GenrePage/ListBook/Programming';
import ProgrammingDetail from './DetailPage/ListDetail/ProgrammingDetail';
import ProgrammingRead from './ReadPage/ProgrammingRead';
import SettingProfile from './SettingPage/SettingProfile';
import BackToTop from './public-components/BackToTop/BackToTop';
import SettingPrivacy from './SettingPage/SettingPrivacy';
import BookmarksPage from './BookmarksPage/BookmarksPage';
import Footer from './public-components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/genre" element={<GenrePage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path="/setting/profile" element={<SettingProfile />} />
        <Route path="/setting/privacy" element={<SettingPrivacy />} />
        <Route path="/genre/self-improvement" element={<SelfImprovement />} />
        <Route path="/genre/programming" element={<Programming />} />
        <Route path="/genre/self-improvement/:bookId" element={<SelfImprovementDetail />} />
        <Route path="/genre/programming/:bookId" element={<ProgrammingDetail />} />
        <Route path="/genre/self-improvement/read/:bookId" element={<SelfImprovementRead />} />
        <Route path="/genre/programming/read/:bookId" element={<ProgrammingRead />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
