import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { MenProducts } from "./pages/MenProducts";
import { WomenProducts } from "./pages/WomenProducts";
import { EquipmentProducts } from "./pages/EquipmentProducts";
import { Checkout} from "./pages/Checkout";
import { About } from "./pages/About";
import { AllProducts } from "./pages/AllProducts";
import { Checkbox } from "./components/ui/checkbox";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: "men", Component: MenProducts },
            { path: "women", Component: WomenProducts },
            { path: "equipment", Component: EquipmentProducts },
            { path: "checkout", Component: Checkout },
            { path: "about", Component: About },
            { path: "products", Component: AllProducts },
        ],
    },
]);