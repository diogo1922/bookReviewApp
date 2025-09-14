import { useState } from "react";

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Book } from "./Book";
import { Books } from "./Books";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
