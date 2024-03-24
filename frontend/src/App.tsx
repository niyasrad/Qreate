import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useLayoutEffect, useState } from "react";
import Loading from "./components/loading/loading";
import { GlobalContext, GlobalContextDefault } from "./contexts/global.context";
import axios from "axios";
import { ToastContainer, Zoom, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Editor from "./pages/editor/editor";

const Hero = lazy(() => import("./pages/hero/hero"));
const FAQ = lazy(() => import("./pages/faq/faq"));
const SignIn = lazy(() => import("./pages/auth/sign-in"));
const SignUp = lazy(() => import("./pages/auth/sign-up"));
const Appcover = lazy(() => import("./components/appcover/appcover"));
const Dashboard = lazy(() => import("./pages/dashboard/dashboard"));

export function AppWrapper({ children }: { children: React.ReactNode }) {

  const [brandName, setBrandName] = useState<string>(GlobalContextDefault.brandName)
  const [brandEmail, setBrandEmail] = useState<string>(GlobalContextDefault.brandEmail)
  const [isLoading, setIsLoading] = useState<boolean>(GlobalContextDefault.isLoading)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(GlobalContextDefault.isLoggedIn)

  const handleLogIn = (token: string, brand_name: string, brand_email: string) => {
    /*
    Function to handle Log in

    @param token: string
    @param brand_name: string
    @param brand_email: string

    @return void
    */

    localStorage.setItem('token', token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    setBrandName(brand_name)
    setBrandEmail(brand_email)
    setIsLoggedIn(true)
    setIsLoading(false)
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
      handleLogIn(token, data.data.brand_name, data.data.brand_email)
      toast.success(data.message)
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
        isLoading,
        isLoggedIn,
        setBrandName,
        setBrandEmail,
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
              <Route path="/faq" element={<FAQ />} />
              <Route path="/app/dashboard" element={<Appcover children={<Dashboard />} />} />
              <Route path="/app/editor" element={<Appcover children={<Editor />} />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppWrapper>
  )
}