import Header from "./components/layout/Header";
import Main from "./components/Main";
import News from "./components/News";

import { useSelector } from "react-redux";

import "./App.scss";

function App() {
  const tab = useSelector((store) => store.tab);

  return (
    <div className="App column">
      <Header />
      {tab === "main" && <Main />}
      {tab === "news" && <News />}
    </div>
  );
}

export default App;
