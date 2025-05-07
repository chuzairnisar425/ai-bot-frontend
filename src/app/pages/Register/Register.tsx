import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../_theme/themeConfigSlice';

const Register: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Register'));
    }, [dispatch]);

    const formik = useFormik({
        initialValues: {
            companyName: '',
            companyEmail: '',
            phoneCode: '+92',
            phoneNumber: '',
            industry: '',
        },
        validationSchema: Yup.object({
            companyName: Yup.string().required('Company Name is required'),
            companyEmail: Yup.string().email('Invalid email address').required('Email is required'),
            phoneNumber: Yup.string().required('Phone number is required'),
            industry: Yup.string().required('Industry is required'),
        }),
        onSubmit: (values) => {
            console.log('Form Submitted:', values);
        },
    });

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#12001a] text-white px-4">
            {/* Center Blur Gradient */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-40 md:w-[400px] md:h-60 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-30 blur-3xl pointer-events-none z-0"></div>

            <div className="flex flex-col md:flex-row w-full max-w-6xl rounded-2xl overflow-hidden">
                {/* Form Card */}
                <div className="w-full md:w-1/2 bg-[#1B061B70] p-8 md:p-12 z-10 border border-[#F758FF] rounded-2xl order-2 md:order-1">
                    <h2 className="text-3xl font-bold mb-2 text-center md:text-left">Register yourself with us</h2>
                    <p className="text-sm mb-8 text-gray-300 text-center md:text-left">Please register your company with us</p>

                    <form onSubmit={formik.handleSubmit} className="space-y-5">
                        {/* Company Name */}
                        <div>
                            <label className="text-sm font-medium mb-1 block">Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                placeholder="Ex: nerdflow.tech"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.companyName}
                                className="w-full p-3 rounded-lg bg-[#2c003a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        {/* Company Email */}
                        <div>
                            <label className="text-sm font-medium mb-1 block">Company Email</label>
                            <input
                                type="email"
                                name="companyEmail"
                                placeholder="abc@gmail.com"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.companyEmail}
                                className="w-full p-3 rounded-lg bg-[#2c003a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="text-sm font-medium mb-1 block">Company Phone</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    name="phoneCode"
                                    disabled
                                    value={formik.values.phoneCode}
                                    className="w-20 p-3 rounded-lg bg-[#2c003a] text-white placeholder-gray-400 border border-gray-600"
                                />
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="XXXXXXXXXXXX"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phoneNumber}
                                    className="w-full p-3 rounded-lg bg-[#2c003a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                            </div>
                        </div>

                        {/* Industry */}
                        <div>
                            <label className="text-sm font-medium mb-1 block">Industry</label>
                            <input
                                type="text"
                                name="industry"
                                placeholder="eg. Sales"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.industry}
                                className="w-full p-3 rounded-lg bg-[#2c003a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        {/* Submit */}
                        <button type="submit" className="w-full py-3 bg-[#11001A] rounded-lg text-white font-medium hover:opacity-90 transition border border-[#9999998A]">
                            Login
                        </button>

                        <div className="text-center text-sm text-gray-300">
                            Already Have an Account?{' '}
                            <Link to="/auth/login" className="text-pink-400 hover:underline">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>

                {/* Branding Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-transparent p-10 z-10 order-1 md:order-2">
                    {/* Branding for Small Screens (top-centered) */}
                    <div className="md:hidden flex flex-col items-center justify-center py-6">
                        <img src="/assets/images/AiBot.png" alt="Bot" className="w-20 mb-2" />
                        <img src="/assets/images/LogoHeading.png" alt="Heading" className="w-44 mb-1" />
                        <p className="text-white text-sm">Get Ready, Get Hired</p>
                    </div>

                    {/* Branding for Medium & Larger Screens (side-left) */}
                    <div className="hidden md:flex flex-col items-center justify-center">
                        <div className="flex items-center">
                            {/* Left: Bot image */}
                            <div className="mr-4">
                                <img src="/assets/images/AiBot.png" alt="Bot" className="w-28" />
                            </div>

                            {/* Right: Logo heading + text */}
                            <div className="flex flex-col items-center">
                                <img src="/assets/images/LogoHeading.png" alt="Heading" className="w-52" />
                                <p className="text-white text-base mt-2">Get Ready, Get Hired</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
