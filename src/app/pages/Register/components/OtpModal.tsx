import { Dialog, Transition } from '@headlessui/react';
import { Fragment, FC, useState, useRef } from 'react';
import Swal from 'sweetalert2';

interface OtpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const OtpModal: FC<OtpModalProps> = ({ isOpen, onClose }) => {
    const [otp, setOtp] = useState(Array(4).fill(''));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (!/^\d?$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handleSubmit = () => {
        const fullOtp = otp.join('');
        if (otp.some((d) => d === '')) {
            Swal.fire({
                icon: 'error',
                title: 'Incomplete OTP',
                text: 'Please enter all 4 digits.',
                padding: '2em',
                customClass: {
                    popup: 'sweet-alerts',
                },
                background: '#11001A',
                color: '#d13141',
                confirmButtonColor: '#c4b1ce',
            });

            return;
        }

        console.log('Entered OTP:', fullOtp);

        Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text: 'OTP Verified Successfully!',
            padding: '2em',
            customClass: {
                popup: 'sweet-alerts',
            },
            background: '#11001A',
            color: '#2eda56',
            confirmButtonColor: '#c4b1ce',
        });

        onClose();
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[999]" onClose={onClose}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black/60" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-xl bg-[#11001A] p-6 text-white align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-white text-center mb-2">
                                    Enter OTP
                                </Dialog.Title>
                                <p className="text-sm text-center text-gray-300 mb-6">An Email has been sent to you for verification!</p>

                                <div className="flex justify-center gap-2 mb-6">
                                    {otp.map((digit, i) => (
                                        <input
                                            key={i}
                                            ref={(el) => (inputsRef.current[i] = el)}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={1}
                                            value={digit}
                                            onChange={(e) => handleChange(i, e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(i, e)}
                                            className="w-10 h-12 text-center rounded-md bg-[#3a224e] text-white text-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                    ))}
                                </div>

                                <button type="button" onClick={handleSubmit} className="w-full py-2 rounded-md border border-gray-400 hover:bg-white hover:text-black transition text-white">
                                    Continue
                                </button>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default OtpModal;
