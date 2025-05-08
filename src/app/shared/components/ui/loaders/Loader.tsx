import React, { useEffect, useState } from 'react';
import Navbar from '../../../../../_theme/components/Layouts/Navbar/Navbar';

interface ILoaderProps {
    show: boolean | undefined;
}

function Loader(props: ILoaderProps): JSX.Element {
    const { show } = props;
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        if (show === true) {
            setShowLoader(true);
        } else if (show === false) {
            const screenLoader = document.getElementsByClassName('screen_loader');
            if (screenLoader?.length) {
                screenLoader[0].classList.add('animate__fadeOut');
                setTimeout(() => {
                    setShowLoader(false);
                }, 1000);
            }
        }
    }, [show]);

    return (
        <>
            <Navbar />

            {showLoader && (
                <div className="screen_loader fixed inset-0 bg-[#232323] z-[60] grid place-content-center animate__animated">
                    <div className="animate__animated animate__infinite animate__flash">
                        <img className="animate w-20 aspect-square" src="/assets/images/AiBot.png" alt="loader" />
                    </div>
                </div>
            )}
        </>
    );
}

export default Loader;
