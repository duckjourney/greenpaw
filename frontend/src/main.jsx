import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Profile from "./routes/profile/profile";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import Map from "./routes/map/map";
import FAQ from "./routes/faq/faq";
import Contact from "./routes/contact/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import App from "./App";
import { UserProvider } from "./routes/login/userContext";


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="map" element={<Map />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
