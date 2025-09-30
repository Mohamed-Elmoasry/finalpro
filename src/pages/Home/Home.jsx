import HomeSlider from "../../components/HomeSlider/HomeSlider.jsx"
import HomeFeature from "../../components/HomeFeature/HomeFeature.jsx"
import HomeCategories from "../../components/HomeCategories/HomeCategories.jsx"
import HomeDeals from "../../components/HomeDeals/HomeDeals.jsx"
import FeatureProducts from "../../components/FeaturedProducts/FeatureProducts.jsx"
import PageMetaData from "../../components/PageMetaData/PageMetaData.jsx"
export default function Home() {
  return (
    <>
    <PageMetaData title={"Home"} description={"FreshCart Ecommerce ,You can buy Fruits , Vegetables , Men's & Women Fashion "}/>
      <HomeSlider/>
      <HomeFeature/>
      <HomeCategories/>
      <HomeDeals/>
      <FeatureProducts/>
    </>
  )
}
