export default function HomeCategoriesSkeleton() {
    // Show 6 skeleton cards as placeholders
    const skeletons = Array.from({ length: 6 });
    return (
        <div className="container animate-pulse">
            <div className="text flex items-center justify-between mb-4">
                <div className="h-8 w-48 bg-gray-200 rounded"></div>
                <div className="h-6 w-32 bg-gray-200 rounded"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 py-8 gap-6">
                {skeletons.map((_, idx) => (
                    <div key={idx} className="card p-4 shadow-md flex flex-col items-center gap-6">
                        <div className="size-16 rounded-full bg-gray-200"></div>
                        <div className="h-4 w-24 bg-gray-200 rounded"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
