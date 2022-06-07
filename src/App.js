import "./App.css";
// import Pages from "./pages/Pages";
import Pages from "./components/Pages";
import Bookmarks from "./components/Bookmarks";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <h1 className='title'>Recipe app</h1>
      <BrowserRouter>
        <Search />
        <Bookmarks />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
