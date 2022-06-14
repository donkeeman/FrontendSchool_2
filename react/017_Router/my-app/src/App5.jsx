import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import BlogPage from "./pages/BlogPage"

function App() {
    return (
        <BrowserRouter>
            {/* 라우트를 감싸줍니다. */}
            <Route 
              path="/" 
              exact 
              component={HomePage}
            />
            <Route 
              path="/about" 
              exact 
              component={AboutPage}
            />
            <Route 
              path="/contact" 
              exact 
              component={ContactPage}
            />
            <Route 
              path="/blog" 
              exact 
              component={BlogPage}
            />
        </BrowserRouter>
    );
}

export default App;