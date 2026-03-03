import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import api from '../../../api/api'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useAuth } from '../hooks/useAuth'
import Loader from '../components/Loader'

const Login = () => {
    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
   const success=  await handleLogin({ email, password })

    }
    if (loading) {
        return (
            <Loader />
        )
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black">
            <form
                onSubmit={submitHandler}
                className="flex flex-col gap-5 bg-gray-900/70 backdrop-blur-xl border border-gray-800 p-10 rounded-3xl shadow-2xl w-full max-w-md h-100"
            >

                <h2 className="text-2xl font-bold text-center text-white tracking-wide mb-6">
                    Login to your account
                </h2>
                <input
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    className="bg-gray-800 text-white border border-gray-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="bg-gray-800 text-white border border-gray-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />

                <button
                    disabled={loading}
                    className="bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] disabled:opacity-50 text-white font-semibold py-3 rounded-xl mt-3 transition-all duration-200 shadow-lg shadow-indigo-900/40"
                >
                    {loading ? 'Logging in......' : 'Login'}
                </button>
                <p className="text-center text-gray-400 text-sm">
                    Don’t have an account?{" "}
                    <Link
                        to="/register"
                        className="text-indigo-400 hover:text-indigo-300 font-medium transition"
                    >
                        Sign up
                    </Link>
                </p>

            </form>
        </div>
    )
}

export default Login