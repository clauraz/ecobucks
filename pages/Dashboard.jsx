import { ProductItem } from '../components/dashboard/ProductItem'

export const Dashboard = () => {
    const data = require('../pages/api/mockedProducts.json');

    const productsList = data.products.map((el, index) => 
        <ProductItem key={index} product={el} />
    )

    return (
        <div className="flex flex-col">
            <div className='w-full h-auto flex justify-center m-10'>This is dashboard header</div>
            <div className="flex">
                {productsList}
            </div>
        </div>
    )

}