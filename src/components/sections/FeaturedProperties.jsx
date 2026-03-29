import PropertyCard from "@components/properties/PropertyCard";
import PropertyCardSkeleton from "@components/properties/PropertyCardSkeleton";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@utils/supabaseClient";
import { Link } from "react-router-dom";

function FeaturedProperties() {

    const LIMIT = 3;

    const { data, isLoading } = useQuery({
        queryKey: ['featured-properties'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('properties')
                .select('*')
                .limit(LIMIT)
                .order('created_at', { ascending: false })

            if (error) throw error;
            return data;
        }
    })

    return (
        <section className="featured-properties-section py-5 md:py-10 bg-grey" id="featuredProperties">
            <div className="container">
                {/* Section Header */}
                <div className="section-header mb-5 md:mb-10 flex md:items-center max-md:flex-col justify-between gap-5">
                    <div className="text-wrapper flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold">العقارات المميزة</h2>
                        <p className="mt-2 text-text">استكشف أفضل العقارات المميزة في السوق</p>
                    </div>
                    <Link
                        to={'/properties'}
                        className="text-primary hover:underline transition-colors flex items-center gap-2"
                    >
                        <span>عرض الكل</span>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </Link>
                </div>
                {/* Properties Grid */}
                <div className="properties-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
                    {isLoading ? (
                        Array.from({ length: LIMIT }).map((_, index) => (<PropertyCardSkeleton key={index} />))
                    ) : (data?.map((property) => (<PropertyCard key={property.id} property={property} />)))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProperties;