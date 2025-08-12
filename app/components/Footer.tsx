import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();
    const brand = "NextStep AI";
    return (
        <footer className="bg-gray-900 text-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

                    <div className="flex-1">
                        <div className="inline-flex items-center gap-3 text-white">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                <rect x="2" y="2" width="20" height="20" rx="6" fill="currentColor" />
                                <path d="M7 14l3-4 4 6" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-xl font-semibold">{brand}</span>
                        </div>

                        <p className="mt-4 text-gray-300 max-w-sm leading-relaxed">
                            AI-powered resume insights and practical feedback — crafted to help you stand out. Fast, clear, and actionable.
                        </p>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-sm text-gray-400">© {year} {brand}. All rights reserved.</p>
                    <p className="text-sm text-gray-400">Made with <span aria-hidden>❤️</span> to help you grow your career.</p>
                    <p className={"font-serif"}>~Dastan</p>
                </div>
            </div>
        </footer>
    );
}
