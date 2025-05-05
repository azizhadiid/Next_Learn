import styleProduct from './DetailProduct.module.scss';

type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
    kategori: string;
};


const DetailProduct = ({ product }: { product: ProductType | null }) => {
    if (!product) return <div className={styleProduct.product__content__skeleton}>
        <div className={styleProduct.product__content__skeleton__image} />
        <div className={styleProduct.product__content__skeleton__name} />
        <div className={styleProduct.product__content__skeleton__category} />
        <div className={styleProduct.product__content__skeleton__price} />
    </div>;

    return (
        <>
            <h1 className={styleProduct.title}>Detail Product</h1>
            <div className={styleProduct.productDetail}>
                <div className={styleProduct.productDetail__image}>
                    <img src={product.image} alt={product.name} />
                </div>
                <h4 className={styleProduct.productDetail__name}>
                    {product.name}
                </h4>
                <p className={styleProduct.productDetail__kategori}>
                    {product.kategori}
                </p>
                <p className={styleProduct.productDetail__price}>
                    {product.price?.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                    })}
                </p>
            </div>
        </>
    );
};


export default DetailProduct;