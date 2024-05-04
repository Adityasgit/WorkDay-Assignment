import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobListings from './components/JobListings.jsx';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<JobListings />} />
      </Routes>
    </Router>


  );
}

export default App;
