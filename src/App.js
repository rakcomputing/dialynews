import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./screen/components/Layout/Layout";
import Home from "./screen/home/Home";
import PostList from "./screen/post/PostList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="share" element={<PostList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
