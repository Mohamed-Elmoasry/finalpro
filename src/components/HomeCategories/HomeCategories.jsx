import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading/Loading.jsx"
import { useCategories } from "../../hooks/useCategories.js";
import HomeCategoriesSkeleton from "../Skeleton/HomeCategoriesSkeleton.jsx";
export default function HomeCategories() {
    const {isError,error,categories,isLoading} = useCategories()
    if (isLoading) {
        return <HomeCategoriesSkeleton />
    }
    return (
        <>
            <div className="container">
                <div className="text flex items-center justify-between">
                    <h2 className="font-bold text-2xl">Shop by Category</h2>
                    <Link to={"/categories"} className="text-primary-600 flex items-center gap-2 hover:text-primary-800">
                        <span>View All Categories</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 py-8 gap-6">
                    {
                        categories?.map((category) =>
                        (<Link to={`category/${category._id}`} key={category._id} className="card cursor-pointer p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center gap-6">
                            <img className="size-16 rounded-full object-cover" src={category.image} />
                            <h3>{category.name}</h3>
                        </Link>)
                        )
                    }
                </div>
            </div>
        </>
    )
}