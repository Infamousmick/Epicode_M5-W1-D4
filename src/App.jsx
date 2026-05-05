import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseLayout from "./Layout/BaseLayout";
import MyMain from "./components/MyMain/MyMain";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [limitBooks, setLimitBooks] = useState(5);

  return (
    <>
      <ThemeProvider>
        <BaseLayout
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          limitBooks={limitBooks}
          setLimitBooks={setLimitBooks}
        >
          <MyMain searchQuery={searchQuery} limitBooks={limitBooks} />
        </BaseLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
