"use client";

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const MaintenanceBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        setShouldRender(true);
        // Small delay to allow render before animating in
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Wait for animation to finish before unmounting
        setTimeout(() => setShouldRender(false), 500);
    };

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-[#FF005E] text-white pl-6 pr-2 py-2 rounded-full shadow-lg flex items-center gap-4 transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
        >
            <span className="text-sm font-medium whitespace-nowrap">
                Site is undergoing maintenance and some parts may not function. Proceed if you wish.
            </span>
            <button
                onClick={handleClose}
                className="bg-white text-black rounded-full p-1.5 hover:bg-gray-200 transition-colors flex items-center justify-center"
                aria-label="Close"
            >
                <X size={14} strokeWidth={2.5} />
            </button>
        </div>
    );
};

export default MaintenanceBanner;
