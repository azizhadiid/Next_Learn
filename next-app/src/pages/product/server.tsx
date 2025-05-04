import ProductView from "@/views/Product";

type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
    kategori: string;
};

const ProductPage = (props: { products: ProductType[] }) => {
    const { products } = props;
    return (
        <div>
            <ProductView products={products} />
        </div>
    );
};

export default ProductPage;

export async function getServerSideProps() {
    // fetch data
    const res = await fetch("http://localhost:3000/api/product");
    const response = await res.json();

    return {
        props: {
            products: response.data,
        },
    };
}
