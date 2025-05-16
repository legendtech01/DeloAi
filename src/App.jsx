import React from "react";
import AmigoCloneUI from "./component/amigo";
import CameraPage from "./component/CameraPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AmigoCloneUI />} />
      <Route path="/camera" element={<CameraPage />} />
    </Routes>
  );
}

export default App;
