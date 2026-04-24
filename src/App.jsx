import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav/MyNav";
import MyFooter from "./components/MyFooter/MyFooter";
import MyMain from "./components/MyMain/MyMain";

function App() {
  return (
    <>
      <MyNav />
      <MyMain />
      <MyFooter />
    </>
  );
}

export default App;
