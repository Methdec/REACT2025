import { Routes, Route } from "react-router";

import FetchGames from "../Components/FetchGames/FetchGames";
import FetchBoss from "../Components/FetchBoss/FetchBoss";
import FetchMonsters from "../Components/FetchMonsters/FetchMonsters";
import FetchCharacters from "../Components/FetchCharacters/FetchCharacters";
import FetchDungeons from "../Components/FetchDungeons/FetchDungeons";
import Connect from "../Components/Connect/Connect";
import Home from "../pages/Home";  
import Contact from "../Components/Contact/Contact"; 
import NotFound from "../Components/NotFound/NotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} /> 
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<FetchGames />} />
      <Route path="/bosses" element={<FetchBoss />} />
      <Route path="/monsters" element={<FetchMonsters />} />
      <Route path="/characters" element={<FetchCharacters />} />
      <Route path="/dungeons" element={<FetchDungeons />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}