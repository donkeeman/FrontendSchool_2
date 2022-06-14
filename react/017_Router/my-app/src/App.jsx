import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import BlogPage from "./pages/BlogPage"
import BlogDetailPage from "./pages/BlogDetailPage"

function App() {
  const style = {
  margin:'5px'
}
    return (
        <BrowserRouter>
        <Link to="/" style={style}>HomePage</Link>
            <Link to="/about" style={style}>AboutPage</Link>
            <Link to="/contact" style={style}>ContactPage</Link>
            <Link to="/blog" style={style}>BlogPage</Link>
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
            <Route 
              path="/blog/:id" 
              exact 
              component={BlogDetailPage}
            />
        </BrowserRouter>
    );
}

export default App;