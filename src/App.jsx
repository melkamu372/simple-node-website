import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import About from '../src/pages/about';
import ContactMe from '../src/pages/contact-me';
import NotFound from '../src/pages/NotFound';
const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="brand">I Volunteer</div>
      <ul className="navigation-list">
        <li className="navigation-item">
          <NavLink exact to="/" className="navigation-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="navigation-item">
          <NavLink to="/about" className="navigation-link" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="navigation-item">
          <NavLink to="/contact" className="navigation-link" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return <h1>Welcome to Onsite or Remote Volunteers!</h1>;
};

export default App;