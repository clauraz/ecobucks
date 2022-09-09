import { ProductItem } from '../components/dashboard/ProductItem'

export const Dashboard = () => {
    const data = require('../pages/api/mockedProducts.json');
    console.log(data.products)

    const productsList = data.products.map((el, index) => 
        <ProductItem key={index} product={el} />
    )

    return (
        <div className='text-bold'>
            aaa
            <div>This is dashboard header</div>
            {productsList}
        </div>
    )

}