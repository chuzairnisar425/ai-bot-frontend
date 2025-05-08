import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../_theme/themeConfigSlice';
import IconArrowForward from '../../../_theme/components/Icon/IconArrowLeft';
import { Eye, EyeOff } from 'lucide-react';
import Navbar from '../../../_theme/components/Layouts/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
const Login: FC = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(setPageTitle('Login'));
    }, [dispatch]);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
        }),
        onSubmit: (values) => {
            console.log('Form Submitted:', values);
            navigate('/user/onboarding');
        },
    });

    return (
        <>
            <Navbar />
            <div className=" relative min-h-screen flex items-center justify-center bg-[#12001a] text-white font-sans px-4">
                {/* Center Blur Gradient Effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-40 md:w-[400px] md:h-60 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-30 blur-3xl pointer-events-none z-0"></div>
                <div className="flex flex-col md:flex-row w-full max-w-6xl rounded-2xl overflow-hidden">
                    {/* Top Branding for Small Screens */}
                    <div className="md:hidden flex flex-col items-center justify-center py-6">
                        <img src="/assets/images/AiBot.png" alt="Bot" className="w-20 mb-2" />
                        <img src="/assets/images/LogoHeading.png" alt="Heading" className="w-44 mb-1" />
                        <p className="text-white text-sm">Get Ready, Get Hired</p>
                    </div>

                    {/* Left Branding for Large Screens */}
                    <div className="w-1/2 hidden md:flex flex-col items-center justify-center p-10">
                        <div className="flex items-center">
                            {/* Left: Bot image  */}
                            <div className="mr-4">
                                <img src="/assets/images/AiBot.png" alt="Bot" className="w-28" />
                            </div>
                            <div className="flex flex-col items-center">
                                {/* Right: Logo heading + text */}
                                <img src="/assets/images/LogoHeading.png" alt="Heading" className="w-52" />
                                <p className="text-white text-base mt-2">Get Ready, Get Hired</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="w-full md:w-1/2 bg-[#1B061B70] p-8 z-30 md:p-14 rounded-2xl border border-[#F758FF]">
                        <h2 className="text-3xl font-bold mb-2 text-center md:text-left">Welcome Back</h2>
                        <p className="text-sm mb-8 text-gray-300 text-center md:text-left">Please Enter Your Email & Password</p>

                        <form onSubmit={formik.handleSubmit} className="space-y-6">
                            {/* Email */}
                            <div>
                                <label className="text-sm font-medium mb-1 block">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="John.Smith123@gmail.com"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className="w-full p-3 rounded-lg bg-[#2c003a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                                {formik.touched.email && formik.errors.email && <p className="text-pink-400 text-xs mt-1">{formik.errors.email}</p>}
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <label className="text-sm font-medium mb-1 block">Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Enter Password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    className="w-full p-3 rounded-lg bg-[#2c003a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-gray-400">
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                                {formik.touched.password && formik.errors.password && <p className="text-pink-400 text-xs mt-1">{formik.errors.password}</p>}
                            </div>

                            {/* Remember + Forgot */}
                            <div className="flex justify-between items-center text-sm">
                                <label className="flex items-center space-x-2">
                                    <label className="w-12 h-6 relative">
                                        <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox1" />
                                        <span className="bg-[#d3d4d8] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-[#65558F] before:transition-all before:duration-300"></span>
                                    </label>
                                    <span>Remember me</span>
                                </label>
                                <Link to="/auth/forgot-password" className="text-gray-300 hover:text-pink-400">
                                    Forget Password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-[#11001A] rounded-lg text-white font-medium hover:opacity-90 transition flex gap-2 justify-center items-center border border-[#9999998A]"
                            >
                                Login <IconArrowForward />
                            </button>

                            {/* Register Link */}
                            <div className="text-center text-sm text-gray-300">
                                Don’t Have an Account?{' '}
                                <Link to="/auth/register" className="text-[#D345F5] hover:underline">
                                    Register
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
