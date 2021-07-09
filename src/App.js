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
    <div className="App" style={{ width: "60%", margin: "auto" }}>
      {dataArticle.map((article, id) => (
        <div
          dangerouslySetInnerHTML={{
            __html: `
            ${article.node.title}<br />
            ${article.node.date}
            ${article.node.content}
            ${article.node.data}`,
          }}
        />
      ))}
    </div>
  );
}

export default App;
