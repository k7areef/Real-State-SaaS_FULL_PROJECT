function PropertyCardSkeleton() {
    return (
        <div className="property-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-video animate-pulse bg-secondary/20"></div>
            <div className="info p-4">
                <div>
                    <div className="h-6 bg-secondary/20 rounded mb-2 mt-1.5"></div>
                    <div className="h-4 bg-secondary/20 rounded w-3/4 mb-2 mt-2.5"></div>
                    <div className="h-4 bg-secondary/20 rounded w-1/2"></div>
                    <div className="h-4 bg-secondary/20 rounded mt-4"></div>
                </div>
                {/* Separator */}
                <div className="property-separator h-px bg-grey my-3"></div>
                {/* More Info */}
                <div className="flex items-center gap-2 h-10">
                    <div className="h-full bg-secondary/20 rounded w-1/4"></div>
                    <div className="h-full bg-secondary/20 rounded w-1/4"></div>
                    <div className="h-full bg-secondary/20 rounded w-1/4"></div>
                </div>
                {/* Separator */}
                <div className="property-separator h-px bg-grey my-3"></div>
                {/* Actions */}
                <div>
                    <div className="h-10 sm:h-12 bg-secondary/20 rounded-sm"></div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCardSkeleton;