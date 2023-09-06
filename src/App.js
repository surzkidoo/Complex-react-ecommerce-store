import React, { Component,useContext,useState } from 'react';
import IndexPage from "./Pages/IndexPage";
import CategoryPage from "./Pages/CategoryPage";
import DetailPage from "./Pages/DetailPage";
import Header from "./Components/header"
import Footer from "./Components/footer"
import CartPage from './Pages/CartPage';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import ProtectedRoute from './Pages/ProtectedRoute'

import {Productprovider} from "./productprovider";
import {Contextuiprovider} from "./Context/UIcontext"
import {ProductContextProvider} from "./Context/Productcontext"
import {AuthProvider} from "./Context/AuthContext"
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import CheckoutPage from './Pages/CheckoutPage';
import Model from './Components/model';
import OrderPage from './Pages/OrderPage';
import WishlistPage from './Pages/WishlistPage';
import Loader from './Components/loader';

  
const App = ()=>{
      
      return(
         <AuthProvider>
         <Productprovider>
         <Contextuiprovider>
         <ProductContextProvider>
        
         <Router>
               {/* <Model/>  */}
               <Header/>
             
            <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/cart" exact component={CartPage} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/order" exact component={OrderPage} />
            <Route path="/wishlist" exact component={WishlistPage} />
            <Route path="/category/:id/:sub?" exact component={CategoryPage} />
            <Route path="/product/:id" exact component={DetailPage} />
            <ProtectedRoute path="/checkout" exact component={CheckoutPage} />
            </Switch>
            <Footer/>
         </Router>
        

         </ProductContextProvider>
         </Contextuiprovider>
         </Productprovider>
         </AuthProvider>
      )
   
}
export default App;