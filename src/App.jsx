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
import Mystery from './GenrePage/ListBook/Mystery';
import MysteryRead from './ReadPage/MysteryRead';
import MysteryDetail from './DetailPage/ListDetail/MysteryDetail';
import Philosophy from './GenrePage/ListBook/Philosophy';
import PhilosophyDetail from './DetailPage/ListDetail/PhilosophyDetail';
import PhilosophyRead from './ReadPage/PhilosophyRead';
import DetailPage from './DetailPage';

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
        <Route path="/genre/mystery" element={<Mystery />} />
        <Route path="/genre/philosophy" element={<Philosophy />} />
        {/* Detail page */}
        <Route path="/genre/programming/:bookId" element={<DetailPage baseAPI="https://64715cc66a9370d5a41a53d8.mockapi.io" endpoint="programming" />} />
        <Route path="/genre/philosophy/:bookId" element={<DetailPage baseAPI="https://647ad0d0d2e5b6101db08cbd.mockapi.io" endpoint="philosophy" />} />
        <Route path="/genre/mystery/:bookId" element={<DetailPage baseAPI="https://6475ca44e607ba4797dc9d4d.mockapi.io" endpoint="MysteryBookList" />} />
        <Route path="/genre/self-improvement/:bookId" element={<DetailPage baseAPI="https://64715cc66a9370d5a41a53d8.mockapi.io" endpoint="selfimprovement" />} />
        
        <Route path="/genre/self-improvement/read/:bookId" element={<SelfImprovementRead />} />
        <Route path="/genre/programming/read/:bookId" element={<ProgrammingRead />} />
        <Route path="/genre/mystery/read/:bookId" element={<MysteryRead />} />
        <Route path="/genre/philosophy/read/:bookId" element={<PhilosophyRead />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
