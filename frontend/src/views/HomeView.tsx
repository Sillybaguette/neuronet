import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import EvaluationView from "./views/EvaluationView";
import ChatView from "./views/ChatView";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/evaluate" element={<EvaluationView />} />
        <Route path="/chat" element={<ChatView />} />
      </Routes>
    </Router>
  );
};

export default App;
