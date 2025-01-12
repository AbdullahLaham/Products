import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthScreen from './pages/AuthScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<AuthScreen />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <Route path='/' element={<Layout />} >
//           <Route index element={<AuthScreen />} />
//           <Route path='about' element={<About />} />
//           <Route path='contact' element={<Contact />} />
//           <Route path='store' element={<Store />} />
//           <Route path='blogs' element={<Blogs />} />
//           <Route path='compare-product' element={<CompareProduct />} />
//           <Route path='wishlist' element={<Wishlist />} />
//           <Route path='cart' element={<Cart />} />
//           <Route path='login' element={<LoginPage />} />
//           <Route path='signup' element={<SignupPage />} />
//           <Route path='forgot-password' element={<ForgotPassword />} />
//           <Route path='reset-password/:token' element={<ResetPassword />} />
//           <Route path='blog-details/:id' element={<SingleBlog />} />
//           <Route path='product/:id' element={<SingleProduct />} />
//           <Route path='privacy-policy' element={<PrivacyPolicy />} />
//           <Route path='refund-policy' element={<RefundPolicy />} />
//           <Route path='shipping-policy' element={<ShippingPolicy />} />
//           <Route path='terms-conditions' element={<TermAndConditions />} />
//           <Route path='checkout' element={<Checkout />} />
//           <Route path='checkout-success' element={<CheckoutSuccess />} />
//           <Route path='profile' element={<Profile />} />
//           <Route path='*' element={<NotFound />} />
//           <Route path='order/:id' element={<Orders />} />
//           <Route path='chat' element={<Chat />} />
//         </Route>