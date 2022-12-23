import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { RoomPage } from "../pages/Room";
import { RoomsList } from "../pages/RoomsList";

export function Router() {
  return(
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/rooms/:id"} element={<RoomPage />} />
      <Route path={"/rooms"} element={<RoomsList />} />
    </Routes>
  )
}