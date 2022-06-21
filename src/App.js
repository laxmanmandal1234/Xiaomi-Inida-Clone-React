import "./App.css";
import data from "./data/data.json";
import Navbar from './components/Navbar.js';
import PreNavbar from './components/PreNavbar.js';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Slider from "./components/Slider.js";
import Offers from "./components/Offers.js";
import SectionHeading from "./components/SectionHeading.js";
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReview from "./components/ProductReview.js";
import Videos from "./components/Videos.js";
import BottomSlider from "./components/BottomSlider.js";
import Footer from "./components/Footer.js";
import NavOptions from "./components/NavOptions.js";

function App() {
  return ( 
    <Router>
      <PreNavbar />
      <Navbar logo={data.logo}/>
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} 
        tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} 
        home={data.home} audio={data.audio}  
      />
      <Slider slidesImages={data.banner.start} />
      <Offers offers={data.offers} />
      <SectionHeading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <SectionHeading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}>
        </Route>
        <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}>
        </Route>
        <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}>
        </Route>
        <Route exact path="/lifeStyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />}>
        </Route>
        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}>
        </Route>
      </Routes>

      <SectionHeading text="PRODUCT REVIEWS" />
      <ProductReview productReviews={data.productReviews} />
      <SectionHeading text="VIDEOS" />
      <Videos videos={data.videos}/>
      <SectionHeading text="IN THE PRESS" />
      <BottomSlider slides={data.banner.end} />
      <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;

/*  React Component Template
import React from "react";


function StarProduct({starProduct}){
    return (
        <div className="starProduct"></div>
    );
}

export default StarProduct;

*/
