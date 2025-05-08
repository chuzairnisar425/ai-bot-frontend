import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CompanyForm = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        aboutCompany: '',
        email: '',
        name: '',
        jobTitle: '',
        salaryRange: '',
        jobDescription: '',
        acceptanceCriteria: '',
        rejectionCriteria: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleStepOneSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    const handleStepTwoSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        alert('Detail Added Succesfully');
        // You can optionally reset the form or navigate to another page here
        navigate('/user/onboarding');
    };

    return (
        <div className="min-h-screen bg-[#1C1C1C] text-white px-4 md:px-8 py-10">
            {/* Stepper */}
            <div className="flex items-center justify-center  mb-10">
                <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 flex items-center justify-center ${step >= 1 ? 'bg-[#D345F5]' : 'bg-white/30'} rounded-full`}>1</div>
                    <span className={`text-sm ${step === 1 ? 'text-white' : 'text-white/40'}`}>Company Information</span>
                    <div className="w-12 h-px bg-white/20"></div>
                    <div className={`w-8 h-8 flex items-center justify-center ${step >= 2 ? 'bg-[#D345F5]' : 'bg-white/30'} rounded-full`}>2</div>
                    <span className={`text-sm ${step === 2 ? 'text-white' : 'text-white/40'}`}>Job Information</span>
                </div>
            </div>

            <div className="bg-[#1F1F1F] rounded-xl p-6 md:p-10 max-w-7xl mx-auto shadow-lg border border-white/10 animate-fade-in">
                {step === 1 && (
                    <>
                        <h2 className="text-xl font-semibold mb-2">Tell us about your company</h2>
                        <p className="text-sm text-gray-400 mb-6">Provide the information about your organization so that we can have better understanding.</p>
                        <form onSubmit={handleStepOneSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">About Company</label>
                                <textarea
                                    name="aboutCompany"
                                    rows={3}
                                    placeholder="About your company"
                                    value={formData.aboutCompany}
                                    onChange={handleChange}
                                    className="w-full bg-[#1D1D1D] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e940d1]"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="John.Smith123@gmail.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#1D1D1D] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e940d1]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#1D1D1D] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e940d1]"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 mt-6">
                                <button type="button" className="px-5 py-2.5 rounded-lg bg-[#3C3C3C] hover:bg-[#1C1C1C] text-white text-sm">
                                    Skip
                                </button>
                                <button type="submit" className="px-5 py-2.5 rounded-lg bg-[#D345F5] hover:bg-[#c343e3] text-white text-sm flex items-center gap-2">
                                    Continue ✓
                                </button>
                            </div>
                        </form>
                    </>
                )}

                {step === 2 && (
                    <>
                        <h2 className="text-xl font-semibold mb-2">Which type of jobs you want to create?</h2>
                        <p className="text-sm text-gray-400 mb-6">Provide the information about the jobs so we customize according to that.</p>
                        <form onSubmit={handleStepTwoSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Job Title</label>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    placeholder="UX Designer"
                                    value={formData.jobTitle}
                                    onChange={handleChange}
                                    className="w-full bg-[#1D1D1D] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e940d1]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Salary Range</label>
                                <input
                                    type="text"
                                    name="salaryRange"
                                    placeholder="40-50k"
                                    value={formData.salaryRange}
                                    onChange={handleChange}
                                    className="w-full bg-[#1D1D1D] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e940d1]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Job Description</label>
                                <textarea
                                    name="jobDescription"
                                    placeholder="Job details..."
                                    rows={3}
                                    value={formData.jobDescription}
                                    onChange={handleChange}
                                    className="w-full bg-[#1D1D1D] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e940d1]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Acceptance Criteria</label>
                                <input
                                    type="text"
                                    name="acceptanceCriteria"
                                    placeholder="Good Communication Skills"
                                    value={formData.acceptanceCriteria}
                                    onChange={handleChange}
                                    className="w-full bg-[#1D1D1D] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e940d1]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Rejection Criteria</label>
                                <input
                                    type="text"
                                    name="rejectionCriteria"
                                    placeholder="Inappropriate criteria"
                                    value={formData.rejectionCriteria}
                                    onChange={handleChange}
                                    className="w-full bg-[#1D1D1D] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e940d1]"
                                />
                            </div>

                            <div className="col-span-full flex justify-end gap-4 mt-6">
                                <button type="button" className="px-5 py-2.5 rounded-lg bg-[#3C3C3C] hover:bg-[#1C1C1C] text-white text-sm">
                                    Skip
                                </button>
                                <button type="submit" className="px-5 py-2.5 rounded-lg bg-[#D345F5] hover:bg-[#c343e3] text-white text-sm flex items-center gap-2">
                                    Continue ✓
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default CompanyForm;
