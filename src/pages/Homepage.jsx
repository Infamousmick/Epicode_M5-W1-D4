import { useState } from "react";
import MyMain from "../components/MyMain/MyMain";
import BaseLayout from "../Layout/BaseLayout";
const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [limitBooks, setLimitBooks] = useState(5);
  return (
    <BaseLayout
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      limitBooks={limitBooks}
      setLimitBooks={setLimitBooks}
    >
      <MyMain searchQuery={searchQuery} limitBooks={limitBooks} />
    </BaseLayout>
  );
};

export default Homepage;
