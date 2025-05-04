import styleProduct from './Product.module.scss';

type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
    kategori: string;
};

const ProductView = ({ products }: { products: ProductType[] }) => {
    return (
        <div className={styleProduct.product}>
            <h1 className={styleProduct.product__title}>Product</h1>
            <div className={styleProduct.product__content}>
                {products.length > 0 ? (
                    <>
                        {products.map((product: ProductType) => (
                            <div key={product.id} className={styleProduct.product__content__item}>
                                <div className={styleProduct.product__content__item__image}>
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <h4 className={styleProduct.product__content__item__name}>
                                    {product.name}
                                </h4>
                                <p className={styleProduct.product__content__item__kategori}>
                                    {product.kategori}
                                </p>
                                <p className={styleProduct.product__content__item__price}>
                                    {product.price.toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    })}
                                </p>
                            </div>
                        ))}
                    </>
                ) : (
                    <div className={styleProduct.product__content__skeleton}>
                        <div className={styleProduct.product__content__skeleton__image} />
                        <div className={styleProduct.product__content__skeleton__name} />
                        <div className={styleProduct.product__content__skeleton__category} />
                        <div className={styleProduct.product__content__skeleton__price} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductView;
