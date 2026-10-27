import AppContent from "./components/AppContent";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}

export default App;
