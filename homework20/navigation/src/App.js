import "./App.css";
import NavigationComp from "./navigationComp/NavigationComp";
import { Route, Routes } from "react-router-dom";
import MainComponent from "./mainComponent/MainComponent";
import PublicationComponent from "./publicationComponent/PublicationComponent";
import PhotoComponent from "./photoComponent/PhotoComponent";
import ContactComponent from "./contactComponent/ContactComponent";

function App() {
  return (
    <div className="App">
      <NavigationComp />
      <Routes>
        <Route path="/main" element={<MainComponent />} />
        <Route path="/publication" element={<PublicationComponent />} />
        <Route path="/photo" element={<PhotoComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
    </div>
  );
}

export default App;
