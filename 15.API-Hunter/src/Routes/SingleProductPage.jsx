import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProductPage() {
  const { id } = useParams();
  const [singleData, setSingleData] = useState("");
  const getDataFromId = async (id) => {
    try {
      let response = await axios.get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`
      );
      setSingleData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataFromId(id);
  }, []);
  return (
    <div className="cardbox">
      <div>
        <h3>{singleData.brand}</h3>
      </div>
      <div>
        <img
          data-testid="product-image"
          src={singleData.img}
          alt={`${singleData.brand} image`}
        />
      </div>
      <div>Category: {singleData.category}</div>
      <div>Details: {singleData.details}</div>
      <div>Price: {singleData.price}</div>
    </div>
  );
}
export default SingleProductPage;
