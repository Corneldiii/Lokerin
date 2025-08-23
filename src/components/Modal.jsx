import React from 'react'

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 ">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-150 animate-fadeIn">
                <h2 className="text-xl text-center font-semibold mb-4">{title}</h2>
                <div>{children}</div>
                <div className="mt-4 flex justify-end">
                    <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-600">
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
