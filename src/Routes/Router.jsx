import { Routes, Route } from "react-router";

import FetchBosses from "../components/FetchBoss/FetchBoss";
import FetchGames from "../components/FetchGames/FetchGames";
import FetchMonsters from "../components/FetchMonsters/FetchMonsters";
import FetchCharacters from "../components/FetchCharacters/FetchCharacters";
import FetchDungeons from "../components/FetchDungeons/FetchDungeons";
import Connect from "../components/Connect/Connect";
import Home from "../pages/Home";   

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<FetchGames />} />
      <Route path="/bosses" element={<FetchBosses />} />
      <Route path="/monsters" element={<FetchMonsters />} />
      <Route path="/characters" element={<FetchCharacters />} />
      <Route path="/dungeons" element={<FetchDungeons />} />
      <Route path="/connect" element={<Connect />} />
    </Routes>
  );
}