import { useParams } from 'react-router-dom';
function ProductPage() {
    const { id } = useParams();

    return <h2>상품 상세 페이지 {id} 상품 </h2>
}
export default ProductPage;