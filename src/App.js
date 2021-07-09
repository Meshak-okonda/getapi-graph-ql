import { getArticles } from "./api/getApi";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [dataArticle, setDataArticle] = useState([]);
  useEffect(() => {
    const req = getArticles();
    req.then((data) => setDataArticle(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>{dataArticle.map((article) => console.log(article))}</p>
      </header>
    </div>
  );
}

export default App;
