import "./App.css";
import NavigationComp from "./navigationComp/NavigationComp";
import MainComponent from "./mainComponent/MainComponent";
import PublicationComponent from "./publicationComponent/PublicationComponent";

function App() {
  return (
    <div className="App">
      <NavigationComp />
      <MainComponent />
      <PublicationComponent />
    </div>
  );
}

export default App;
