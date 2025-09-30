import React from 'react'

export default function PageMetaData({title,description,keywords="Fresh Vegetables, Fresh Fruits, Organic Vegetables, Organic Fruits"}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  )
}
