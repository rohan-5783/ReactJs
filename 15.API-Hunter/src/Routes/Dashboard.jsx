import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ProductsTable from "../Components/ProductsTable";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Components/Loader";

function Dashboard() {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  const {login, logOutUser}= useContext(AuthContext)
  const getData = async () => {
    setLoader(true)
    try {
      let response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products')
      setLoader(false)
      setData(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="cardbox">
      <h3>Dashboard</h3>
      <div>
        <button
        onClick={logOutUser}
        >
          Logout
        </button>
        <p>
          Token: {login.token}
          <b data-testid="user-token" className="ml-2 text-indigo-600"></b>
        </p>
      </div>
      <div>
        {loader ? <Loader /> : <ProductsTable data={data} />}
      </div>
    </div>
  );
}
export default Dashboard;