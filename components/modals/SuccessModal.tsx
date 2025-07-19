import React from 'react';

const SuccessModal = ({ show, onClose }: { show: boolean, onClose: () => void }) => {

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
                <div className="flex justify-center mb-4">
                     <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="32" fill="#22C55E" />
                        <path
                            d="M18 33.5L27.5 43L46 24.5"
                            stroke="white"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <h2 className="text-xl font-semibold mb-4 text-center">Thank You!</h2>
                <p className="text-gray-700 mb-10">Thank you for your message, we have received your information and will process it shortly.</p>
                <div className="w-full">
                    <button
                        onClick={onClose}
                        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 mx-auto block cursor-pointer"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;