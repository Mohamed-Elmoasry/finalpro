import React from 'react';

export default function ProductCardSkeleton() {
    return (
        <div className="card overflow-hidden shadow-2xl rounded-2xl relative animate-pulse">
            <div className="card-image">
                <div className="h-60 w-full bg-gray-200"></div>
            </div>
            <div className="card-content p-4 space-y-3">
                <div>
                    <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                    <div className="h-5 w-32 bg-gray-200 rounded"></div>
                </div>
                <div className="rating flex items-center gap-3">
                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="price space-x-2">
                        <div className="h-5 w-16 bg-gray-200 rounded"></div>
                        <div className="h-3 w-10 bg-gray-200 rounded"></div>
                    </div>
                    <div className="bg-gray-200 rounded-full size-8"></div>
                </div>
            </div>
            <div className="actions absolute top-4 right-4 flex flex-col gap-3">
                <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
            </div>
            <div className="badge absolute left-4 top-4 bg-gray-200 px-4 py-2 rounded-md w-12 h-6"></div>
        </div>
    );
}
