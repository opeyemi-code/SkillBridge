import Header from "./Header";
import DiscoverPage from "../pages/DiscoverPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import SavedProfilesPage from "../pages/SavedProfilesPage";
import ProfessionalDetailedPage from "../pages/ProfessionalDetailedPage";

function AppContent() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<DiscoverPage />} />
          <Route path="/saved" element={<SavedProfilesPage />} />
          <Route
            path="/professionalDetailedPage"
            element={<ProfessionalDetailedPage />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default AppContent;
