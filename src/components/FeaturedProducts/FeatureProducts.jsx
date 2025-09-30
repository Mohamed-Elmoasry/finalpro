import ProductCard from "../ProductCard/ProductCard.jsx"
import useProducts from "../../hooks/useProducts.js"
import HomeFeatureSkeleton from "../Skeleton/HomeFeatureSkeleton.jsx"
export default function FeatureProducts(){
    const {isLoading,isError,error,products} = useProducts()
if(isLoading){
    return <HomeFeatureSkeleton/>
}
    return <>
    <section>
        <div className="container">
            <h2 className="text-2xl font-bold mb-2">Feature Products</h2>
            <div className="feature-products grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
{products?.map((product)=>{
    return <ProductCard key={product.id} productInfo={product}/>
})}
            </div>
        </div>
    </section>
    </>
}