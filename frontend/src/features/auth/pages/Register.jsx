import { useState } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import api from '../../../api/api'

const Register = () => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const submitHandler = async (e) => {
        console.log("gyyyyy")
        e.preventDefault()
        setLoading(true)

        try {
            const res = await api.post('/user/register', {
                username: fullname,
                email,
                password
            })

            console.log('Login success:', res.data)

            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))

            setFullname('')
            setEmail('')
            setPassword('')
        } catch (err) {
      console.error('Register failed:', err.response?.data?.message || err.message)
     } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black">
            <form
                onSubmit={submitHandler}
                className="flex flex-col gap-5 bg-gray-900/70 backdrop-blur-xl border border-gray-800 p-10 rounded-3xl shadow-2xl w-full max-w-md"
            >

                <h2 className="text-2xl font-bold text-center text-white tracking-wide">
                    Create Account
                </h2>

                <input
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    type="text"
                    placeholder="Full Name"
                    className="bg-gray-800 text-white border border-gray-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />

                <input

                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    autoComplete="new-email"
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
                    className="bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] disabled:opacity-50 text-white font-semibold py-3 rounded-xl mt-2 transition-all duration-200 shadow-lg shadow-indigo-900/40"
                >
                    {loading ? 'Creating Account...' : 'Register'}
                </button>
                <p className="text-center text-gray-400 text-sm">
                    Don’t have an account?{" "}
                    <Link
                        to="/login"
                        className="text-indigo-400 hover:text-indigo-300 font-medium transition"
                    >
                       Login
                    </Link>
                </p>


            </form>
        </div>
    )
}

export default Register