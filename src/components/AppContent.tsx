import Header from "./Header";
import DiscoverPage from "../pages/DiscoverPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import SavedProfilesPage from "../pages/SavedProfilesPage";
import TalentDetailedPage from "../pages/TalentDetailedPage";

function AppContent() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<DiscoverPage />} />
          <Route path="/saved" element={<SavedProfilesPage />} />
          <Route path="/TalentDetailedPage" element={<TalentDetailedPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default AppContent;
