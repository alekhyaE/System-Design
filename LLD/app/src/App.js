import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Accordion from "./components/Accordion";
import Body from "./components/Body";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Team from "./components/Team";
import Comments from "./components/comments/Comments";
import ImageSlider from "./components/image-slider/ImageSlider";
import LiveChat from "./components/live-chat/Live Chat";
import Pagination from "./components/pagination/Pagination";
import SearchUi from "./components/search-ui/SearchUi";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div>
        <header className="text-2xl font-bold py-5 bg-black text-white text-center">Hello World
        <nav className="w-[1200px] px-20 m-2 flex justify-between text-lg">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/accordion">Accordion</a>
            <a href="/team">Team</a>
            <a href="/login">Login</a>
            <a href="/comments">Comments</a>
            <a href="/imageSlider">ImageSlider</a>
            <a href="/pagination">Pagination</a>
            <a href="/liveChat">LiveChat</a>
            <a href="/searchUI">SearchUi</a>
        </nav>
        <select value={lang} onChange={(e)=>setLang(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="sp">Spanish</option>
            <option value="ru">Russian</option>
        </select>
        </header>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Body/>}></Route>
            <Route element={<ProtectedRoute/>}>
                <Route path="/about" element={<About lang={lang}/>}></Route>
                <Route path="/team" element={<Team/>}></Route>
            </Route>
            <Route path="/comments" element={<Comments/>}></Route>
            <Route path="/accordion" element={<Accordion/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/imageSlider" element={<ImageSlider/>}></Route>
            <Route path="/pagination" element={<Pagination/>}></Route>
            <Route path="/liveChat" element={<LiveChat/>}></Route>
            <Route path="/searchUI" element={<SearchUi/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
