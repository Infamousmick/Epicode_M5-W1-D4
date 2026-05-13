import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage";
import Homepage from "./pages/Homepage";
import BookDetails from "./pages/BookDetails";

import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/details/:asin" element={<BookDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
