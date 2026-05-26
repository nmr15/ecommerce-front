import { ProductCardHome } from '../importComponents'

const ProductSlider = () =>
{
  return (
    <>
      <div className="container">
      <div className="grid-4">
        <ProductCardHome />
        <ProductCardHome />
        <ProductCardHome />
        <ProductCardHome />
      </div>
      </div>
    </>
  )
}

export default ProductSlider
