import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useLayoutEffect, useState } from "react";
import Loading from "./components/loading/loading";
import { GlobalContext, GlobalContextDefault, GlobalContextInterface } from "./contexts/global.context";
import axios from "axios";
import { ToastContainer, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Editor from "./pages/editor/editor";
import Brand from "./pages/brand/brand";

const Hero = lazy(() => import("./pages/hero/hero"));
const FAQ = lazy(() => import("./pages/faq/faq"));
const SignIn = lazy(() => import("./pages/auth/sign-in"));
const SignUp = lazy(() => import("./pages/auth/sign-up"));
const Appcover = lazy(() => import("./components/appcover/appcover"));
const Dashboard = lazy(() => import("./pages/dashboard/dashboard"));

export function AppWrapper({ children }: { children: React.ReactNode }) {

  const [brandName, setBrandName] = useState<string>(GlobalContextDefault.brandName)
  const [brandEmail, setBrandEmail] = useState<string>(GlobalContextDefault.brandEmail)
  const [brandID, setBrandID] = useState<string>(GlobalContextDefault.brandID)
  const [customURL, setCustomURL] = useState<string>(GlobalContextDefault.customURL)
  const [isLoading, setIsLoading] = useState<boolean>(GlobalContextDefault.isLoading)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(GlobalContextDefault.isLoggedIn)

  const handleLogIn = (token: string, brand: GlobalContextInterface) => {
    /*
    Function to handle Log in

    @param token: string
    @param brand: GlobalContextInterface

    @return void
    */

    localStorage.setItem('token', token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    setBrandName(brand.brandName)
    setBrandEmail(brand.brandEmail)
    setBrandID(brand.brandID)
    setCustomURL(brand.customURL)
    setIsLoggedIn(brand.isLoggedIn)
    setIsLoading(brand.isLoading)
  }   

  const handleSignOut = () => {
      /*
      Function to handle Sign out

      @return void
      */
    
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      setBrandName(GlobalContextDefault.brandName)
      setBrandEmail(GlobalContextDefault.brandEmail)
      setBrandID(GlobalContextDefault.brandID)
      setIsLoggedIn(GlobalContextDefault.isLoggedIn)
      setIsLoading(false)
  }

  useLayoutEffect(() => {
    /*  
    UseEffect Function to check if user is logged in
    Gets called at the start of the page load, to make sure to handle reloads.

    @return void
    */

    const token = localStorage.getItem('token') || ''
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    
    if (!token) {
      handleSignOut()
    }

    if (import.meta.env.VITE_BASE_API === undefined) {
      console.error('VITE_BASE_API is not defined')
    }

    axios.post(import.meta.env.VITE_BASE_API + '/authenticate/check')
    .then((res) => {
      const data = res.data
      const brand = data.data
      handleLogIn(token, {
        brandName: brand.brand_name,
        brandEmail: brand.brand_email,
        brandID: brand._id,
        customURL: brand.custom_url,
        isLoading: false,
        isLoggedIn: true
      })
    })
    .catch(() => {
      handleSignOut()
    })


  }, [])


  return (
    <GlobalContext.Provider
      value={{
        brandName,
        brandEmail,
        brandID,
        customURL,
        isLoading,
        isLoggedIn,
        setBrandName,
        setBrandEmail,
        setBrandID,
        setCustomURL,
        setIsLoading,
        setIsLoggedIn,
        handleLogIn,
        handleSignOut
      }}
    >
    {children}
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Zoom}
    />
    </GlobalContext.Provider>
  )

}



export default function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/brand/:custom_url" element={<FAQ />} />
              <Route path="/faq/:brand_id" element={<FAQ />} />
              <Route path="/app/dashboard" element={<Appcover children={<Dashboard />} />} />
              <Route path="/app/editor" element={<Appcover children={<Editor />} />} />
              <Route path="/app/brand" element={<Appcover children={<Brand />} />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppWrapper>
  )
}