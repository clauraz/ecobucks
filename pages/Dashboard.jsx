import { ProductItem } from '../components/dashboard/ProductItem'

export const Dashboard = () => {
  const data = require('../pages/api/mockedProducts.json')

  const productsList = data.products.map((el, index) => <ProductItem key={index} product={el} />)

  return (
    <div className="h-screen flex flex-col justify-start align-center pt-[324px]">
      <div className="flex flex-wrap">{productsList}</div>
    </div>
  )
}
