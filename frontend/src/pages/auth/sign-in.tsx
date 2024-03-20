import { useEffect, useState } from "react";
import { AuthButton, AuthContainer, AuthContent, AuthFooter, AuthForm, AuthHeader, AuthInput, AuthLabel, AuthSub, AuthSwitch, AuthTitle } from "./auth.styles";
import axios from "axios";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../contexts/global.context";
import { useNavigate } from "react-router-dom";
import { handleAPIError } from "../../utils/errors.util";

interface SignInInterface {
    brand_email: string,
    brand_password: string,
    [key: string]: string
}

interface AuthInputInterface {
    name: string,
    label: string,
    type: string,
    placeholder: string
}

export default function SignIn() {

    const { handleLogIn, isLoggedIn, isLoading } = useGlobalContext()

    useEffect(() => {
        if (isLoggedIn && !isLoading) {
            navigate('/app/dashboard')
        }
    }, [isLoggedIn, isLoading])

    const navigate = useNavigate()

    const [authForm, setAuthForm] = useState<SignInInterface>({
        brand_email: '',
        brand_password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const authInputs: AuthInputInterface[] = [
        {
            name: 'brand_email',
            label: 'Email Address',
            type: 'email',
            placeholder: 'qreq@example.com'
        },
        {
            name: 'brand_password',
            label: 'Password',
            type: 'password',
            placeholder: '***********'
        }
    ]

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        /*
        Function to handle form change

        @param e: React.ChangeEvent<HTMLInputElement>

        @return void
        */
        
        setAuthForm({
            ...authForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSignIn = async () => { 
        /*
        Function to handle sign in

        @return void
        */ 
        
        if (isSubmitting) return
        setIsSubmitting(true)

        if (!formValidation()) {
            setIsSubmitting(false)
            return
        }

        const toastID = toast.loading("Trying to Log In!")

        axios.post(import.meta.env.VITE_BASE_API + "/authenticate/login", authForm)
        .then((res) => {
            const data = res.data
            handleLogIn!(data.data.access_token, data.data.brand_name, data.data.brand_email)
            toast.update(toastID, {
                render: data.message,
                isLoading: false,
                autoClose: 3000,
                type: 'success'
            })
            navigate('/app/dashboard')
        })
        .catch((e) => {
            if (axios.isAxiosError(e)) {
                toast.update(toastID, {
                    render: handleAPIError(e),
                    isLoading: false,
                    autoClose: 3000,
                    type: 'error'
                })
            } else {
                toast.error("Something went wrong!")
            }
        })
        .finally(() => {
            setIsSubmitting(false)
        })
    }

    const formValidation = () => {
        /*
        Function to validate form

        @return boolean
        */
        const emptyFlag =  authForm.brand_email === '' || authForm.brand_password === ''
        const validEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(authForm.brand_email)
        const validPassword = authForm.brand_password.length >= 8
        if (!validPassword) {
            toast.error('Password must contain at least 8 characters.')
            return false
        }
        if (!validEmailRegex) {
            toast.error('Invalid Email Address')
            return false
        }
        if (emptyFlag) {
            toast.error('Please fill in all fields!')
            return false
        }
        return true
    }

    return (
        <AuthContainer>
            <AuthContent>
                <AuthHeader>
                    <AuthTitle>Qreate.</AuthTitle>
                    <AuthSub>Sign In</AuthSub>
                </AuthHeader>
                <AuthForm>
                    {authInputs.map((input: AuthInputInterface, index: number) => (
                        <>
                            <AuthLabel>{input.label}</AuthLabel>
                            <AuthInput 
                                key={index}
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder}
                                value={authForm[input.name]}
                                onChange={handleFormChange}
                            />
                        </>
                    ))}
                </AuthForm>
                <AuthFooter>
                    <AuthSwitch>Don't have an account? <a href="/sign-up">Sign Up</a></AuthSwitch>
                    <AuthButton $submitting={isSubmitting} onClick={handleSignIn}>Sign In</AuthButton>
                </AuthFooter>
            </AuthContent>
        </AuthContainer>
    )
}