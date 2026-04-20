import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { MenProducts } from "./pages/MenProducts";
import { WomenProducts } from "./pages/WomenProducts";
import { EquipmentProducts } from "./pages/EquipmentProducts";
import { Collections } from "./pages/Collections";
import { About } from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "men", Component: MenProducts },
      { path: "women", Component: WomenProducts },
      { path: "equipment", Component: EquipmentProducts },
      { path: "collections", Component: Collections },
      { path: "about", Component: About },
    ],
  },
]);
