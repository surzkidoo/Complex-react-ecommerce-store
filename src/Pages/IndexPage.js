import React, { useState,useContext } from "react";
import Sidebar from "../Components/Sidebar";
import MainAdSection from "../Components/MainAdSection";
import SideAdSection from "../Components/SideAdSection";
import BrandList from "../Components/BrandList";
import TodaysDeal from "../Components/TodaysDeal";
import Trending from "../Components/Trending";
import InAdSection from "../Components/InAddSection"
import BannerAd from "../Components/BannerAd";
import Footer from "../Components/footer";
import { AuthContext } from "../Context/AuthContext";


// import FoodList from "./FoodList";
// import Header from "./header";
// // import Model from "./model";
// import Searchsection from "./searchsec";
const IndexPage = () => {

  
  const [showfood, setShowFood] = useState(true);
  const [showsearch, setSearchFood] = useState(false);
  const [showsingle, setsingle] = useState(false);
  const { loggedUser, isAuth} = useContext(AuthContext);

  return (
    <div className='overall-container'>
    <div className="hero-container">
          <Sidebar/>
          <MainAdSection/>
          {/* <SideAdSection/> */}
    </div>
      <BrandList/>
      <TodaysDeal/>
    
      <InAdSection/>
      <Trending/>
      <BannerAd/>
    
    </div>
  );
};

export default IndexPage;
