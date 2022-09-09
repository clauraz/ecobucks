import { ProductItem } from '../components/dashboard/ProductItem'

export const Dashboard = () => {
    const data = require('../pages/api/mockedProducts.json');

    const productsList = data.products.map((el, index) => 
        <ProductItem key={index} product={el} />
    )

    return (
        <div className="h-screen flex flex-col bg-dashboard justify-start align-center">
            <div className='w-full h-auto flex justify-center m-20'>This is dashboard header</div>
            <div className="flex flex-wrap">
                {productsList}
            </div>
        </div>
    )

}