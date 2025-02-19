import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Destination from "./components/Destination";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const LazyHome = lazy(() => 
  import("./components/Home")) ;

const LazyFeatures = lazy(() => 
  import("./components/Features")) ;

const LazyDestination = lazy(() => 
  import("./components/Destination")) ;

const LazyAbout = lazy(() => 
  import("./components/About")) ;
const LazyContact = lazy(() => 
  import("./components/Contact")) ;


const App = () => {
  return (
    <div>
      <Navbar />
      
      <main>
        <div id="home">
          < Suspense fallback={<div>Loading Home page please wait.....</div> }>
         <LazyHome />
         </Suspense>
        </div>

        <div id="features">
          <Suspense fallback={<div>Loading Features page please wait.....</div> }>
          <Features />

          </Suspense>
        </div>

        <div id="destination">
          <Suspense fallback={<div>Loading Destination page please wait.....</div> }>
          <Destination />
          </Suspense>
        </div>

        <div id="about">
          <Suspense fallback={<div>loading About page please wait.....</div> }>
            <LazyAbout />
          </Suspense>
        </div>

        <div id="contact">
          <Suspense fallback={<div>Loading Contact page please wait.....</div> }>
          <Contact />
          </Suspense>
          
        </div>
        
      </main>
      
      <Footer />
    </div>
  );
};

export default App;