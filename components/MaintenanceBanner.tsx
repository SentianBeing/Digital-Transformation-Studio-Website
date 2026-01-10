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
            className={`fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-[#FF005E] text-white pl-4 pr-2 py-3 md:pl-6 md:pr-2 md:py-2 rounded-2xl md:rounded-full shadow-lg flex items-center justify-between md:justify-start gap-3 md:gap-4 w-[90%] md:w-auto max-w-xl transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
        >
            <span className="text-xs md:text-sm font-medium leading-tight md:leading-normal">
                Site is undergoing maintenance and some parts may not function. Proceed if you wish.
            </span>
            <button
                onClick={handleClose}
                className="bg-white text-black rounded-full p-1.5 hover:bg-gray-200 transition-colors flex-shrink-0 flex items-center justify-center"
                aria-label="Close"
            >
                <X size={14} strokeWidth={2.5} />
            </button>
        </div>
    );
};

export default MaintenanceBanner;
