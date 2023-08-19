import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from "react-router-dom";

import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Projects from "./components/Projects";
import MyTask from "./components/MyTask";
import Layout from "./layouts";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />} >
      <Route path="/" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/mytask" element={<MyTask />} />
    </Route>
    
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
  // asdasd
}

export default App;
