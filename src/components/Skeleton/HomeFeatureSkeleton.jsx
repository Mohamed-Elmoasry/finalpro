import React from 'react';

export default function HomeFeatureSkeleton() {
    // Show 5 skeleton cards as placeholders
    const skeletons = Array.from({ length: 5 });
    return (
        <section>
            <div className="container animate-pulse">
                <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
                <div className="feature-products grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {skeletons.map((_, idx) => (
                        <div key={idx} className="card p-4 shadow-md flex flex-col items-center gap-4">
                            <div className="h-32 w-full bg-gray-200 rounded mb-4"></div>
                            <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 w-16 bg-gray-200 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
