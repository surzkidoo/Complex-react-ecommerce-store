import React, { useState,useContext } from "react";
import { ProductContext } from "../productprovider";
import { AuthContext } from "../Context/AuthContext";
import { useHistory } from "react-router-dom";

let Duser = {
  firstname: {
    value: "",
    error: false,
    errorMessage: "Firstname must atleast contains 3 characters",
    rg: /[A-Za-z0-9]{3,}/g,
  },
  lastname: {
    value: "",
    error: false,
    errorMessage: "Lastname must atleast contains 3 characters",
    rg: /[A-Za-z0-9]{3,}/g,
  },
  city: {
    value: "",
    error: false,
    errorMessage: "Choose a city",
    rg: /[A-Za-z0-9]{3,}/g,
  },
  country: {
    value: "",
    error: false,
    errorMessage: "Choose a Country",
    rg: /[A-Za-z0-9]{3,}/g,
  },

  number: {
    value: "",
    error: false,
    errorMessage: "Phone number must contains atleast 8 digit",
    rg: /[0-9]{9}/,
  },
  zipcode: {
    value: "",
    error: false,
    errorMessage: "zipcode must contains atleast 4 digit",
    rg: /[0-9]{4,}/g,
  },
  address: {
    value: "",
    error: false,
    errorMessage: "Address must contains atleast 8 characters",
    rg: /[A-Za-z0-9]{3,}/g,
  },
  card: {
    value: "",
    error: false,
    errorMessage: "Card must contains atleast 10 digit",
    rg: /[0-9]{10,}/g,
  },
  cvv: {
    value: "",
    error: false,
    errorMessage: "Cvv must be 3 digit",
    rg: /[0-9]{3}/g,
  },
  date: {
    value: "",
    error: false,
    errorMessage: "Date format is MM/DD/YY",
    rg: /[0-9]+[/][0-9]+[/][0-9]/,
  },
  pin: {
    value: "",
    error: false,
    errorMessage: "Pin must atleast contains 4 digit",
    rg: /[0-9]{4,}/g,
  },
}

const CheckoutPage = () => {
  const {setorder,cart,total,setCart} = useContext(ProductContext)
  const {loggedUser} = useContext(AuthContext)
  const [tab, settab] = useState(false)
  const [checkout, setcheckout] = useState(Duser)
  const history = useHistory()

  const handleFormInput = (e) => {
    e.persist();

    setcheckout((prev) => {
      return {
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          value: e.target.value,
          error:
          !prev[e.target.name].rg.test(e.target.value),
        },
      };
    });
   
  };

  const handleNext = () => {

    if (
      !checkout.firstname.error &&
      checkout.firstname.value &&
      !checkout.lastname.error &&
      checkout.lastname.value &&
      !checkout.number.error &&
      checkout.number.value &&
      !checkout.city.error &&
      checkout.city.value &&
      !checkout.country.error &&
      checkout.country.value &&
      !checkout.zipcode.error &&
      checkout.zipcode.value &&
      !checkout.address.error &&
      checkout.address.value
    ) {

      settab(true);
    } else {

      !checkout.firstname.value &&  setcheckout((prev) => {
        return {
          ...prev,
          firstname: {
            ...prev.firstname,
            error: true
          },
        };
      });

      !checkout.lastname.value &&  setcheckout((prev) => {
        return {
          ...prev,
          lastname: {
            ...prev.lastname,
            error: true
          },
        };
      });

      !checkout.address.value &&  setcheckout((prev) => {
        return {
          ...prev,
          address: {
            ...prev.address,
            error: true
          },
        };
      });

      !checkout.number.value &&  setcheckout((prev) => {
        return {
          ...prev,
          number: {
            ...prev.number,
            error: true
          },
        };
      });

      !checkout.city.value &&  setcheckout((prev) => {
        return {
          ...prev,
          city: {
            ...prev.city,
            error: true
          },
        };
      });

      
      !checkout.zipcode.value &&  setcheckout((prev) => {
        return {
          ...prev,
          zipcode: {
            ...prev.zipcode,
            error: true
          },
        };
      });
      
      !checkout.country.value &&  setcheckout((prev) => {
        return {
          ...prev,
          country: {
            ...prev.country,
            error: true
          },
        };
      });


    }
    
  };

  const handleSubmit = () => {

    if (
      !checkout.card.error &&
      checkout.card.value &&
      !checkout.pin.error &&
      checkout.pin.value &&
      !checkout.cvv.error &&
      checkout.cvv.value &&
      !checkout.date.error &&
      checkout.date.value 
    ) {

      let order = {
        userId:loggedUser.id,
        products: [
         ...cart
        ],
        grandtotal:500+10+total,
        billingAddress :{
          firstname:checkout.firstname.value,
          lastname:checkout.lastname.value,
          address:checkout.address.value,
          zipcode: checkout.zipcode.value,
          city:checkout.city.value,
          country:checkout.country.value
        },
        card:{
          cardId:checkout.card.value,
          cvv:checkout.cvv.value,
          pin:checkout.pin.value,
          date:checkout.date.value
        },
        status: "Pending",
        date: new Date().toDateString()
      }

      setorder(prev=>{
        return [...prev,order]
      });

      setCart([])

     history.push('/order') 
     
    } else {

      !checkout.card.value &&  setcheckout((prev) => {
        return {
          ...prev,
          card: {
            ...prev.card,
            error: true
          },
        };
      });

      !checkout.pin.value &&  setcheckout((prev) => {
        return {
          ...prev,
          pin: {
            ...prev.pin,
            error: true
          },
        };
      });

      !checkout.cvv.value &&  setcheckout((prev) => {
        return {
          ...prev,
          cvv: {
            ...prev.cvv,
            error: true
          },
        };
      });

      !checkout.date.value &&  setcheckout((prev) => {
        return {
          ...prev,
          date: {
            ...prev.date,
            error: true
          },
        };
      });

     


    }
    
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="selector-container">
          <h4 className="Checkout-header">Checkout</h4>

          <div className="btn-container">
            <button
              className={
                !tab ? "selector-btn" : "selector-btn active-checkout-selector"
              }
            >
              Billing
            </button>
            <button
              className={
                tab ? "selector-btn" : "selector-btn active-checkout-selector"
              }
            >
              Payment
            </button>
          </div>
          {!tab ? (
            <div className="billing-container">
              <h4 className="billing-title">Billing Information</h4>
              <div className="billing-form">
                <div className="group-row">
                  <div className="form-billing-group">
                    <label>First Name</label>
                    <div className="error-message">
                  {checkout.firstname.error &&
                    checkout.lastname.errorMessage}
                </div>
                    <input
                      type="text"
                      className="checkout-input"
                      name="firstname"
                      placeholder="First Name"
                      value={checkout.firstname.value}
                      onChange={handleFormInput}
                    />
                  </div>

                  <div className="form-billing-group">
                    <label>Last Name</label>
                    <div className="error-message">
 {checkout.lastname.error &&
                    checkout.lastname.errorMessage}
                    </div>
                   
                    <input
                      type="text"
                      className="checkout-input"
                      name="lastname"
                      placeholder="Last Name"
                      value={checkout.lastname.value}
                      onChange={handleFormInput}
                    />
                  </div>
                </div>

                <div className="group-row">
                  <div className="form-billing-group">
                    <label>Country</label>
                    <div className="error-message">
                       {checkout.country.error &&
                    checkout.country.errorMessage}
                    </div>
                   
                    <select name="country" className="checkout-selector"
                    onChange={handleFormInput}>
                      <option>Country</option>
                      <option value='nigeria'>Nigeria</option>

                    </select>
                  </div>
                  <div className="form-billing-group">
                    <label>City</label>
                    <div className="error-message">{checkout.city.error &&
                    checkout.city.errorMessage}</div>

                    
                    <select name="city" className="checkout-selector"
                    onChange={handleFormInput}>
                      <option>City</option>
                      <option value='sokoto'>Sokoto</option>
                    </select>
                  </div>
                  <div className="form-billing-group">
                    <label>Zip Code</label>
                    <div className="error-message"> {checkout.zipcode.error &&
                    checkout.zipcode.errorMessage}</div>

                   
                    <input
                      type="text"
                      className="checkout-input"
                      name="zipcode"
                      placeholder="ZipCode"
                      value={checkout.zipcode.value}
                      onChange={handleFormInput}
                    />
                  </div>
                </div>

                <div className="form-billing-group">
                  <label>Street Address</label>
                  <div className="error-message">  {checkout.address.error &&
                    checkout.address.errorMessage}</div>

                
                  <input
                    type="text"
                    className="checkout-input"
                    name="address"
                    placeholder="Address"
                    value={checkout.address.value}
                    onChange={handleFormInput}
                  />
                </div>

                <div className="form-billing-group">
                  <label>Phone Number</label>
                  <div className="error-message">   {checkout.number.error &&
                    checkout.number.errorMessage}</div>

               
                  <input
                    type="text"
                    className="checkout-input"
                    name="number"
                    placeholder="Phone Number"
                    value={checkout.number.value}
                    onChange={handleFormInput}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="payment-container">
              <h4 className="billing-title">Payment Option</h4>
              <div className="billing-form">
                <div className="group-row">
                  <div className="form-billing-group">
                    <label>Card Number</label>
                    <div className="error-message">    {checkout.card.error &&
                    checkout.card.errorMessage}</div>

                
                    <input
                      type="text"
                      className="checkout-input"
                      name="card"
                      placeholder="23456543234"
                      value={checkout.card.value}
                      onChange={handleFormInput}
                    />
                  </div>

                  <div className="form-billing-group">
                    <label>CVV</label>
                    <div className="error-message">{checkout.cvv.error &&
                    checkout.cvv.errorMessage}</div>

                    
                    <input
                      type="text"
                      className="checkout-input"
                      name="cvv"
                      placeholder="235"
                      value={checkout.cvv.value}
                      onChange={handleFormInput}
                    />
                  </div>
                </div>
                <div className="group-row">
                  <div className="form-billing-group">
                    <label>Expire Date</label>
                    <div className="error-message"> {checkout.date.error &&
                    checkout.date.errorMessage}</div>

                   
                    <input
                      type="text"
                      className="checkout-input"
                      name="date"
                      placeholder="DD/MM/YY"
                      value={checkout.date.value}
                      onChange={handleFormInput}
                    />
                  </div>

                  <div className="form-billing-group">
                    <label>PIN</label>
                    <div className="error-message">   {checkout.pin.error &&
                    checkout.pin.errorMessage}</div>

                 
                    <input
                      type="password"
                      className="checkout-input"
                      name="pin"
                      placeholder="PIN"
                      value={checkout.pin.value}
                      onChange={handleFormInput}
                    />
                  </div>
                </div>

                <div className="hr"></div>

                <div className="payment-option"></div>
              </div>
            </div>
          )}
          {!tab ? (
            <button className="next-checkout-btn" onClick={handleNext}>
              Next
            </button>
          ) : (
            <div className="group-row">
              <button
                className="next-checkout-btn"
                onClick={() => settab(false)}
              >
                Back
              </button>
              <button className="next-checkout-btn" onClick={handleSubmit}>
                Confirm Payment
              </button>
            </div>
          )}
        </div>
        <div className="order-summary-container">
          <h4 className="summary-header">Order Summary</h4>
          <div className="summary-label-price">
          <div className="summary-label">Subtotal</div>
          <div className="summary-price">₦{total.toLocaleString()}</div>
        </div>
          <div className="data-value-container">
            <div className="summary-label">Shipping Fee</div>
            <div className="order-value">$1,500</div>
          </div>

          <div className="data-value-container">
            <div className="summary-label">Tax Fee</div>
            <div className="order-value">$100</div>
          </div>

          <div className="hr"></div>
          <div className="data-value-container">
            <div className="summary-label">Total</div>
            <div className="summary-price">${(total+1500+100).toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
