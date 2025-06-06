import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components
import Home from "./home/home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
