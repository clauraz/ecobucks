import Image from 'next/image';

export const ProductItem = ({ product }) => {
    console.log(product.image)


    return <div className="h-[228px] w-[342px] border-0.5 m-10 rounded-xl bg-product overflow-hidden relative" style={{ backgroundImage: `url(${product.image})` }}>
                <p className="font-bold m-3 text-white text-xl z-20 absolute">{product.name}</p>
                <div className="absolute bottom-0 left-0 flex bg-[#8AC5C4] m-2 pt-1 rounded-xl">
                    <p className="m-1 font-bold text-white z-20 line-through">{product.oldPrice}</p>
                    <p className="m-1 font-bold text-white z-20">{product.newPrice}</p>
                </div>
                <div className="absolute bottom-0 right-0 flex flex-col m-2 pt-1 rounded-xl">
                    <p className="m-1 text-white text-sm z-20">
                        <Image src="/assets/clock.svg" width="10" height="10" className="m-2" alt="clock"/>
                        &nbsp;
                        {product.timeFrame}
                    </p>
                    <p className="m-1 text-white text-sm z-20">                        
                        <Image src="/assets/price-tag.svg" width="10" height="10" className="m-2" alt="clock"/>
                        &nbsp;
                        {product.label}
                    </p>
                </div>
                <div className="bg-black h-full w-full opacity-25" />
            </div>
}