import './App.css';
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import JobListings from './components/JobListings.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<JobListings />}>
      <Route path="*" element={<JobListings />} />
    </Route>
  )
);

function App() {
  return (

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>


  );
}

export default App;
