import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function Root() {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
