import React, { useState, useEffect, useRef, useContext } from "react";
import Rating from "./rate";
import Price from "./Price";
import { handle } from "express/lib/application";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ProductContext } from "../productprovider";
import Loader from "./loader";
import { BsStarFill } from "react-icons/bs";

const Sidebar = (props) => {
  const { product } = useContext(ProductContext);
  const [rate, setRate] = useState("");
  const [pricemax, setPriceMax] = useState(100);
  const [pricemin, setPriceMin] = useState(0);
  const [brands, setbrands] = useState("");
  const [sbrands, setsbrands] = useState([]);
  const [sradio, setsradio] = useState("");
  const [scat, setsCat] = useState(props.catid);
  const [brandslist, setbrandslist] = useState(props.brands);
  const [feature, setfeature] = useState({});
  const refmin = useRef();
  const refmax = useRef();
  const [showLoader, setShowLoader] = useState(false);

  // let handleInput = (e) =>{
  //   setbrands()
  // }

  useEffect(() => {
    props.features.map((feature) => {
      return setfeature((prev) => {
        return { ...prev, [feature.name]: [] };
      });
    });
  }, []);

  useEffect(() => {
    props.setfilter(
      product.filter((item) => {
        return (
          (sradio ? item.product_rating == sradio : true) &&
          item.product_category === scat &&
          (sbrands.length > 0
            ? [...sbrands].includes(item.product_brand)
            : true) &&
          !Object.getOwnPropertyNames(feature)
            .map((name) =>
              feature[name]?.length > 0
                ? [...feature[name]]?.includes(item.product_feature[name])
                : true
            )
            .includes(false)
        );
      })
    );
  }, [sbrands, scat, feature, sradio, product]);

  const handleSubCategory = (id) => {
    scat === id ? setsCat(props.catid) : setsCat(id);
  };

  const handleBrandSearch = (e) => {
    setbrands(e.target.value);
    let value = e.target.value;
    setbrandslist((prev) => {
      let result = props.brands.filter((b) => {
        return b.toLowerCase().includes(value.toLowerCase());
      });
      return value !== "" ? result : props.brands;
    });
  };

  // const Q =(name,value) =>{
  // console.log(feature[name]?.includes(value))
  //  let names = feature[name]
  // }

  const handlebrand = (value) => {
    setsbrands((prev) => {
      if (prev.includes(value)) {
        let newarray = prev.filter((brands) => brands != value);
        return newarray;
      } else {
        let newarray = [...prev, value];
        return newarray;
      }
    });
  };

  const handleFeatures = (name, value) => {
    setfeature((prev) => {
      if (prev[name].includes(value)) {
        let filtered = prev[name].filter((option) => option != value);
        return { ...prev, [name]: filtered };
      } else {
        return { ...prev, [name]: [...prev[name], value] };
      }
    });
  };

  console.log(props);
  const lhandlerPrice = (e) => {
    if (pricemax + pricemin > 100 || pricemax == 100) {
      refmin.current.style.left = `${e.target.value}%`;
      setPriceMin(e.target.value);
    }
  };

  const rhandlerPrice = (e) => {
    if (pricemax + pricemin > 100 || pricemax == 100) {
      refmax.current.style.right = `${e.target.value}%`;
      setPriceMax(e.target.value);
    }
  };


  return showLoader ? (
    <Loader />
  ) : (
    <div
      className="category-sidebar"
      style={{ display: props.openFilter && "block" }}
    >
      <div className="brand-filter-container">
        <div className="filter-header">
          <div className="filter-title">Categories</div>
          <div className="filter-toggle">-</div>
        </div>
        <div className="toggler-handler">
          <div className="sub-category-container">
            {props.sub.map((cat, index) => {
              let item =
                cat.subcategory.length === 0 ? (
                  <div className="sub-category" key={index}>
                    {cat.category_name}
                  </div>
                ) : (
                  <div className="sub-category-with-menu" key={index}>
                    <div className="sub-category">{cat.category_name}</div>
                    <div className="sub-sub">
                      {cat.subcategory.map((sub) => {
                        return (
                          <li
                            className="sub-category"
                            style={{
                              color:
                                sub.category_id == scat && "rgb(250, 10, 122)",
                            }}
                            onClick={() => handleSubCategory(sub.category_id)}
                          >
                            {sub.category_name}{" "}
                          </li>
                        );
                      })}
                    </div>
                  </div>
                );
              return item;
            })}
          </div>
        </div>
      </div>

      <div className="brand-filter-container">
        <div className="filter-header">
          <div className="filter-title">Brand</div>
          <div className="filter-toggle">-</div>
        </div>
        <div className="toggler-handler">
          <div className="brand-input-container">
            <input
              type="text"
              placeholder="Brand"
              value={brands}
              onChange={handleBrandSearch}
              className="brand-input"
            />
          </div>
          <div className="brand-checklist-container">
            {brandslist.map((brn, index) => {
              return (
                <div className="brand-checklist-item" key={index}>
                  <div className="checklist-bg">
                    <div
                      className="brand-checklist-input"
                      style={{
                        backgroundColor:
                          sbrands.includes(brn) && "rgb(250, 10, 122)",
                      }}
                      onClick={() => handlebrand(brn)}
                    ></div>
                  </div>

                  <div className="brand-checklist-name">{brn}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="brand-filter-container">
        <div className="filter-header">
          <div className="filter-title">Price</div>
          <div className="filter-toggle">-</div>
        </div>
        <div className="toggler-handler">
          <div className="price-container">
            <div className="track-bg"></div>
            <div className="lf-thumb-bg" ref={refmin}>
              <div className="left-thumb"></div>
            </div>
            <div className="rg-thumb-bg" ref={refmax}>
              <div className="right-thumb"></div>
            </div>
            <input
              type="range"
              value={pricemin}
              onChange={(e) => lhandlerPrice(e)}
              className="left-input"
            />
            <input
              type="range"
              value={pricemax}
              onChange={(e) => rhandlerPrice(e)}
              className="right-input"
            />
            <div className="track-distance"></div>
          </div>
        </div>
      </div>

      {props.features.map((featured, index) => {
        return (
          <div key={index} className="brand-filter-container">
            <div className="filter-header">
              <div className="filter-title">{featured.name}</div>
              <div className="filter-toggle">-</div>
            </div>
            <div className="toggler-handler">
              <div className="brand-checklist-container">
                {featured.value.map((feat, index) => {
                  return (
                    <div key={index} className="brand-checklist-item">
                      <div className="checklist-bg">
                        <div
                          className="brand-checklist-input"
                          style={{
                            backgroundColor:
                              feature[featured.name]?.includes(feat) &&
                              "rgb(250, 10, 122)",
                          }}
                          onClick={(e) => handleFeatures(featured.name, feat)}
                        >
                          {feature[featured.name]?.includes(feat)}
                        </div>
                      </div>
                      <div className="brand-checklist-name">{feat}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}

      {/* <Price /> */}
      {/* <Rating setRate={setRate} /> */}
      <div className="brand-filter-container">
        <div className="filter-header">
          <div className="filter-title">Rating</div>
          <div className="filter-toggle">-</div>
        </div>
        <div className="toggler-handler">
          <div className="brand-checklist-container">
            <div className="brand-checklist-item">
              <div className="checklist-bg">
                <div
                  className="brand-radio-input"
                  style={{
                    backgroundColor: sradio === "1" && "rgb(250, 10, 122)",
                  }}
                  onClick={() => setsradio("1")}
                ></div>
              </div>
              <div className="brand-checklist-name">
                1 <BsStarFill color="yellow" />
              </div>
            </div>
            <div className="brand-checklist-item">
              <div className="checklist-bg">
                <div
                  className="brand-radio-input"
                  style={{
                    backgroundColor: sradio === "2" && "rgb(250, 10, 122)",
                  }}
                  onClick={() => setsradio("2")}
                ></div>
              </div>
              <div className="brand-checklist-name">
                2 <BsStarFill color="yellow" /> <BsStarFill color="yellow" />
              </div>
            </div>
            <div className="brand-checklist-item">
              <div className="checklist-bg">
                <div
                  className="brand-radio-input"
                  style={{
                    backgroundColor: sradio === "3" && "rgb(250, 10, 122)",
                  }}
                  onClick={() => setsradio("3")}
                ></div>
              </div>
              <div className="brand-checklist-name">
                3 <BsStarFill color="yellow" />
                <BsStarFill color="yellow" />
                <BsStarFill color="yellow" />
              </div>
            </div>
            <div className="brand-checklist-item">
              <div className="checklist-bg">
                <div
                  className="brand-radio-input"
                  style={{
                    backgroundColor: sradio === "4" && "rgb(250, 10, 122)",
                  }}
                  onClick={() => setsradio("4")}
                ></div>
              </div>
              <div className="brand-checklist-name">
                4<BsStarFill color="yellow" />
                <BsStarFill color="yellow" />
                <BsStarFill color="yellow" />
                <BsStarFill color="yellow" />
              </div>
            </div>
            <div className="brand-checklist-item">
              <div className="checklist-bg">
                <div
                  className="brand-radio-input"
                  style={{
                    backgroundColor: sradio === "5" && "rgb(250, 10, 122)",
                  }}
                  onClick={() => setsradio("5")}
                ></div>
              </div>
              <div className="brand-checklist-name">
                5 <BsStarFill color="yellow" />
                <BsStarFill color="yellow" />
                <BsStarFill color="yellow" />
                <BsStarFill color="yellow" />
                <BsStarFill color="yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
