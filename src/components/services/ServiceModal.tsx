// components/services/ServiceModal.tsx
import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const ServiceModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    // Effect to disable scrolling on the body when the modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle close on ESC key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }
        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        // Modal Backdrop
        <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-start pt-12 md:items-center p-4 transition-opacity duration-300"
            style={{marginTop: 0}}
            onClick={onClose} // Close on backdrop click
        >
            {/* Modal Content */}
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 scale-100 opacity-100"
                onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the content
            >
                {/* Modal Header */}
                <div className="bg-gray-200 flex justify-between items-center p-6 border-b border-gray-200">
                    <h2 className="text-3xl font-bold text-primary">{title}</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                        aria-label="Close modal"
                    >
                        <FaTimes className="text-2xl" />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 max-h-[80vh] overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;