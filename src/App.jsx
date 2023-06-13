import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import NavBar from "./public-components/Navbar/NavBar";
import LandingPage from "./LandingPage/LandingPage";
import Login from "./LoginRegister/Login";
import Register from "./LoginRegister/Register";
import GenrePage from "./GenrePage/GenrePage";
import NotFound from "./public-components/NotFound";
import SelfImprovement from "./GenrePage/ListBook/SelfImprovement";
import SelfImprovementDetail from "./DetailPage/ListDetail/SelfImprovementDetail";
import SelfImprovementRead from "./ReadPage/SelfImprovementRead";
import Programming from "./GenrePage/ListBook/Programming";
import ProgrammingDetail from "./DetailPage/ListDetail/ProgrammingDetail";
import ProgrammingRead from "./ReadPage/ProgrammingRead";
import SettingProfile from "./SettingPage/SettingProfile";
import BackToTop from "./public-components/BackToTop/BackToTop";
import SettingPrivacy from "./SettingPage/SettingPrivacy";
import BookmarksPage from "./BookmarksPage/BookmarksPage";
import Footer from "./public-components/Footer/Footer";
import Mystery from "./GenrePage/ListBook/Mystery";
import MysteryRead from "./ReadPage/MysteryRead";
import MysteryDetail from "./DetailPage/ListDetail/MysteryDetail";
import Philosophy from "./GenrePage/ListBook/Philosophy";
import Biography from "./GenrePage/ListBook/Biography";
import BiographyRead from "./ReadPage/BiographyRead";
import BiographyDetail from "./DetailPage/ListDetail/BiographyDetail";

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
        <Route path="/genre/biography" element={<Biography />} />
        <Route
          path="/genre/self-improvement/:bookId"
          element={<SelfImprovementDetail />}
        />
        <Route
          path="/genre/programming/:bookId"
          element={<ProgrammingDetail />}
        />
        <Route path="/genre/mystery/:bookId" element={<MysteryDetail />} />
        <Route path="/genre/biography/:bookId" element={<BiographyDetail />} />

        <Route
          path="/genre/self-improvement/read/:bookId"
          element={<SelfImprovementRead />}
        />
        <Route
          path="/genre/programming/read/:bookId"
          element={<ProgrammingRead />}
        />
        <Route path="/genre/mystery/read/:bookId" element={<MysteryRead />} />

        <Route
          path="/genre/biography/read/:bookId"
          element={<BiographyRead />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
