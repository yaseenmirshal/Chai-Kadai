import React from "react";
import "./App.css"
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Svg1 from "./components/Svg1";
import Section2 from "./components/Section2"
import Section3 from "./components/Section3";
import Svg2 from "./components/Svg2";
import MenuSection from "./components/MenuSection";
import Svg3 from "./components/Svg3";
import Section5 from "./components/Section5"
import FeedbackSection from "./components/Feedback";
import Section6 from "./components/Section6";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Svg1 />
      <Section2 />
      <Section3/>
      <Svg2/>
      <MenuSection />
      <Svg3/>
      <Section5/>
      <FeedbackSection/>
      <Section6/>
      <Footer />
    </div>
  );
}

export default App;
