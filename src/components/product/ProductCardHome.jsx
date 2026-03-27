import { Button } from '../importComponents'
import ps5Spiderman2 from '../../assets/ps5/ps5Spiderman2.jpg'

const ProductCardHome = () => 
{
  return (
    <>
      <div className="prod_cardhome">
        <a href="#">
          <img src={ps5Spiderman2} alt="" />
        </a>
        <div className="prod_cardhome-info">
          <a href="#">Spider-Man 2</a>
          <p>$69.99</p>
        </div>
        <Button variant={"accent"} />
      </div>
    </>
  )
}

export default ProductCardHome
