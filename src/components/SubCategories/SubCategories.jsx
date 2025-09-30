import {useEffect, useState } from "react"
import PageMetaData from "../PageMetaData/PageMetaData"
import { Link, useParams } from "react-router"
import { getSubCategories } from "../../services/apiCategories"
import Loading from "../Loading/Loading"
import { useCategories } from "../../hooks/useCategories"


<PageMetaData title={"Categories"} description={"you can see the categories and but from it"} />

export default function SubCategories() {
  const { categories } = useCategories()

  const { id } = useParams()
  const [subCategory, setSubCategory] = useState(null)
  const [isLoading, setisLoading] = useState(true)

  async function handleSubCategory() {
    try {
      const response = await getSubCategories({ id })
      // console.log(response);
      if (response.success) {
        setisLoading(false)
        setSubCategory(response.data.data)
        console.log(response.data.data);
        
      }

    } catch (error) {
      setisLoading(false)
      console.log(error);
    }

  }

  useEffect(() => {
    handleSubCategory()
  }, [id])

  if (isLoading) {
    return <Loading />
  }

  console.log(subCategory);

  return (
    <>
      <section className="py-8">
        <div className="container py-8">
          <div className="flex items-center gap-6 flex-wrap py-8">
            {subCategory.map((subCategory) => {
              return <Link to={`/sub-categories-products/${subCategory.category}`} key={subCategory._id} className="px-4 py-3 bg-gray-200 rounded-md hover:bg-primary-600 hover:text-white transition-colors duration-300">
                <h3>{subCategory.name}</h3>
              </Link>
            })}
          </div>
        </div>
      </section>

    </>
  )
}
