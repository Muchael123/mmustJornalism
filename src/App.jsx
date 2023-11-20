import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import your components as needed
import Homepage from "./Pages/Homepage";
import LoginForm from "./Pages/Login";
import Admin from "./Pages/Admin";
import Blog from "./Pages/Blog";
import RegistrationForm from "./Pages/Signin";
import News from "./Pages/News";
import Entertainment from "./Pages/Entertainment";
import Business from "./Pages/Business";
import Sports from "./Pages/Sports";
import CreateBlog from "./Pages/CreateBlog";
import PreviewBlog from "./Pages/PreviewBlog";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/News" element={<News />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signin" element={<RegistrationForm />} />
          <Route path="/CreateBlog" element={<CreateBlog />} />
          <Route path="/Blog/:id" element={<Blog />} />
          <Route path="/PreviewBlog" element={<PreviewBlog />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
