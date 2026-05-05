import MyNav from "../components/MyNav/MyNav";
import MyFooter from "../components/MyFooter/MyFooter";
const BaseLayout = ({
  children,
  searchQuery,
  setSearchQuery,
  limitBooks,
  setLimitBooks,
}) => {
  return (
    <>
      <MyNav
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        limitBooks={limitBooks}
        setLimitBooks={setLimitBooks}
      />
      {children}
      <MyFooter />
    </>
  );
};

export default BaseLayout;
