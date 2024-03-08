import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/loading/loading";
import Appcover from "./components/appcover/appcover";
import Dashboard from "./pages/dashboard/dashboard";

const Hero = lazy(() => import("./pages/hero/hero"));
const FAQ = lazy(() => import("./pages/faq/faq"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/app/dashboard" element={<Appcover children={<Dashboard />} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}