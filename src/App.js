import "./App.css";
import Carousel from "./Carousel/Carousel";

function App() {
  return (
    <>
      <Carousel Slides="1" infinite="false" />
      <Carousel Slides="4" infinite="true" />
      <Carousel Slides="10" infinite="false" />
    </>
  );
}

export default App;
