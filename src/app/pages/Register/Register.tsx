import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../_theme/themeConfigSlice';
import { Eye, EyeOff } from 'lucide-react';
import IconArrowBackward from '../../../_theme/components/Icon/IconArrowBackward';

const Register: FC = () => {
    const dispatch = useDispatch();
    const [step, setStep] = useState(1); // 1: info, 2: password
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            companyName: Yup.string().required('Company Name is required'),
            companyEmail: Yup.string().email('Invalid email address').required('Email is required'),
            phoneNumber: Yup.string().required('Phone number is required'),
            industry: Yup.string().required('Industry is required'),
            password: Yup.string().when('step', {
                is: () => step === 2,
                then: () => Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
            }),
            confirmPassword: Yup.string().when('step', {
                is: () => step === 2,
                then: () =>
                    Yup.string()
                        .oneOf([Yup.ref('password')], 'Passwords must match')
                        .required('Confirm Password is required'),
            }),
        }),
        onSubmit: (values) => {
            console.log('Final Submission:', values);
        },
    });

    const handleNextStep = () => {
        formik.validateForm().then((errors) => {
            if (!errors.companyName && !errors.companyEmail && !errors.phoneNumber && !errors.industry) {
                setStep(2);
            } else {
                formik.setTouched({
                    companyName: true,
                    companyEmail: true,
                    phoneNumber: true,
                    industry: true,
                });
            }
        });
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#12001a] text-white px-4">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-40 md:w-[400px] md:h-60 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-30 blur-3xl pointer-events-none z-0"></div>

            <div className="flex flex-col md:flex-row w-full max-w-6xl rounded-2xl overflow-hidden">
                <div className="w-full md:w-1/2 bg-[#1B061B70] p-8 md:p-12 z-10 border border-[#F758FF] rounded-2xl order-2 md:order-1">
                    <h2 className="text-3xl font-bold mb-2 text-center md:text-left">
                        {step === 2 ? (
                            <p onClick={() => setStep(1)} className="flex items-center gap-2 cursor-pointer ">
                                <IconArrowBackward /> Register yourself with us
                            </p>
                        ) : (
                            'Register yourself with us'
                        )}
                    </h2>

                    <p className="text-sm mb-8 text-gray-300 text-center md:text-left">Please register your company with us</p>

                    <form onSubmit={formik.handleSubmit} className="space-y-5">
                        {step === 1 && (
                            <>
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
                                        className={`w-full p-3 rounded-lg bg-[#2c003a] text-white placeholder-gray-400 ${
                                            formik.touched.companyName && formik.errors.companyName ? 'border border-red-500' : ''
                                        }`}
                                    />
                                    {formik.touched.companyName && formik.errors.companyName && <p className="text-red-500 text-sm mt-1">{formik.errors.companyName}</p>}
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
                                        className={`w-full p-3 rounded-lg bg-[#2c003a] text-white placeholder-gray-400 ${
                                            formik.touched.companyEmail && formik.errors.companyEmail ? 'border border-red-500' : ''
                                        }`}
                                    />
                                    {formik.touched.companyEmail && formik.errors.companyEmail && <p className="text-red-500 text-sm mt-1">{formik.errors.companyEmail}</p>}
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Company Phone</label>
                                    <div className="flex gap-2">
                                        <input type="text" name="phoneCode" disabled value={formik.values.phoneCode} className="w-20 p-3 rounded-lg bg-[#2c003a] text-white border border-gray-600" />
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="XXXXXXXXXXXX"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.phoneNumber}
                                            className={`w-full p-3 rounded-lg bg-[#2c003a] text-white placeholder-gray-400 ${
                                                formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border border-red-500' : ''
                                            }`}
                                        />
                                    </div>
                                    {formik.touched.phoneNumber && formik.errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{formik.errors.phoneNumber}</p>}
                                </div>

                                {/* Industry */}
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Industry</label>
                                    <input
                                        type="text"
                                        name="industry"
                                        placeholder="e.g. Sales"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.industry}
                                        className={`w-full p-3 rounded-lg bg-[#2c003a] text-white placeholder-gray-400 ${
                                            formik.touched.industry && formik.errors.industry ? 'border border-red-500' : ''
                                        }`}
                                    />
                                    {formik.touched.industry && formik.errors.industry && <p className="text-red-500 text-sm mt-1">{formik.errors.industry}</p>}
                                </div>

                                {/* Continue Button */}
                                <button
                                    type="button"
                                    onClick={handleNextStep}
                                    className="w-full py-3 bg-[#11001A] rounded-lg text-white font-medium hover:opacity-90 transition border border-[#9999998A]"
                                >
                                    Continue
                                </button>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                {/* Password Field */}
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            placeholder="Enter password"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.password}
                                            className={`w-full p-3 pr-10 rounded-lg bg-[#2c003a] text-white placeholder-gray-400 ${
                                                formik.touched.password && formik.errors.password ? 'border border-red-500' : ''
                                            }`}
                                        />
                                        <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400" onClick={() => setShowPassword((prev) => !prev)}>
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </div>
                                    </div>
                                    {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>}
                                </div>

                                {/* Confirm Password Field */}
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Confirm Password</label>
                                    <div className="relative">
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            name="confirmPassword"
                                            placeholder="Confirm password"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.confirmPassword}
                                            className={`w-full p-3 pr-10 rounded-lg bg-[#2c003a] text-white placeholder-gray-400 ${
                                                formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border border-red-500' : ''
                                            }`}
                                        />
                                        <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </div>
                                    </div>
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>}
                                </div>

                                {/* Button Row: Back + Register */}
                                <div className="">
                                    <button type="submit" className="w-full py-3 bg-[#11001A] border border-[#9999998A] rounded-lg text-white font-medium hover:opacity-90 transition">
                                        Register
                                    </button>
                                </div>
                            </>
                        )}

                        {/* Already Have Account Link */}
                        <div className="text-center text-sm text-gray-300">
                            Already Have an Account?{' '}
                            <Link to="/auth/login" className="text-[#D345F5] hover:underline">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>

                {/* Branding Section (same as before) */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-transparent p-10 z-10 order-1 md:order-2">
                    <div className="md:hidden flex flex-col items-center justify-center py-6">
                        <img src="/assets/images/AiBot.png" alt="Bot" className="w-20 mb-2" />
                        <img src="/assets/images/LogoHeading.png" alt="Heading" className="w-44 mb-1" />
                        <p className="text-white text-sm">Get Ready, Get Hired</p>
                    </div>

                    <div className="hidden md:flex flex-col items-center justify-center">
                        <div className="flex items-center">
                            <div className="mr-4">
                                <img src="/assets/images/AiBot.png" alt="Bot" className="w-28" />
                            </div>
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
