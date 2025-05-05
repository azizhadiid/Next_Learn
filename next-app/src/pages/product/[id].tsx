import { useRouter } from "next/router";
import { fetcher } from "@/utils/swr/fetcher";
import useSWR from "swr";
import DetailProduct from "@/views/DetailProduct";

const DetailProductPage = () => {
    const { query } = useRouter();
    const productId = query.id as string;

    const { data, error, isLoading } = useSWR(
        productId ? `/api/product/${productId}` : null,
        fetcher
    );

    return (
        <div>
            <DetailProduct product={isLoading || !data ? null : data.data} />
        </div>
    );
};

export default DetailProductPage;