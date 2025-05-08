import React, { useEffect, useState } from 'react';
import Loader from '../../shared/components/ui/loaders/Loader';
import CompanyForm from './forms/CompanyForm';

const Onboarding = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-[#232323]">
            <Loader show={loading} />

            {!loading && (
                <div className="">
                    <CompanyForm />
                </div>
            )}
        </div>
    );
};

export default Onboarding;
