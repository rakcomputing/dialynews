import { BrowserRouter, Route, Routes } from "react-router-dom";

import NewsHomeLayout from "./screen/components/Layout/Layout";
import PostList from "./screen/post/PostList";
import PostListTech from "./screen/technology/PostListTech";
import PostListHealth from "./screen/health/PostListHealth";
import PostListTravel from "./screen/travel/PostListTravel";
import About from "./screen/about/About";
import PostDetail from "./screen/components/Layout/PostDetail";

// import DetailPage from "./screen/DetailPage/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsHomeLayout />}>
          <Route path="home" element={<PostList />} />
          <Route path="share" element={<PostList />} />
          <Route path="technology" element={<PostListTech />} />
          <Route path="health" element={<PostListHealth />} />
          <Route path="travel" element={<PostListTravel />} />
          <Route path="about" element={<About />} />
          <Route path="post/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
