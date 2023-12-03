import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/loading/loading";

const Hero = lazy(() => import("./pages/hero/hero"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
            <Route path="/" element={<Hero />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}