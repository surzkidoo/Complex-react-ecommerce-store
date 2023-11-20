import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../productprovider";
import {BsChevronBarLeft ,BsChevronLeft,BsChevronRight } from 'react-icons/bs'

const Mainsection = () => {
  const { ad } = useContext(ProductContext);
  const [index, setIndex] = useState(0);
  const [currentad, setcurrentad] = useState(ad.mainAd[index]);

  useEffect(() => {
    setInterval(() => {
      
        setIndex((previndex) => {
          if ( previndex < ad.mainAd.length - 1) {
              return previndex+1
        } else {
         return 0
        }
        });
    }, 2000);
  }, []);

  const right = () => {
    if (index < ad.mainAd.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    setcurrentad(ad.mainAd[index]);
  };

  const left = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(ad.mainAd.length - 1);
    }
    setcurrentad(ad.mainAd[index]);
  };
  return (
    <div className="main-ad">
      <img src={ad.mainAd[index]} className="main-ad-image" alt="" />

      <div className="nvg-left ad-carosel-btn" onClick={() => left()}>
        <BsChevronLeft size={18}/>
      </div>
      <div className="nvg-right ad-carosel-btn" onClick={() => right()}>
      <BsChevronRight size={18}/>
      </div>
      <div className="indicator-container">
        {
          ad.mainAd.map((e,indexs)=>
            <div className={indexs==index?'indicator active-indicator':'indicator'} ></div>
          )
        }
      </div>
    </div>
  );
};

export default Mainsection;
