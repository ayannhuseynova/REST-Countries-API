import Header from "./components/Header";
import SearchAndFilter from "./components/SearchAndFilter";
import Flags from "./components/Flags";
import "./scss/style.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchAndFilter />
      <Flags />
    </div>
  );
}

export default App;
