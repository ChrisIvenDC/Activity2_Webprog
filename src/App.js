import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Counter from './components/Counter';
import NotFound from './components/NotFound';


function App() {
  return (
    <div>
    {/* <Counter></Counter> */}
    <Router>
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/about"element={<About />} />
        <Route path="/contact"element={<Contact />} />
        <Route path="/counter"element={<Counter />} />
        <Route path="*"element={<NotFound />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
// const root = createRoot(document.getElementById('root'));
// root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('root'));
