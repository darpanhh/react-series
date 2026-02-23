import { useEffect, useState } from "react";

function App() {
  const [product, setProduct] = useState([]);
  const [formData,setFormData] = useState({
    name:"",
    price:'',
    stock:''
  })
  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch("http://127.0.0.1:8000/api/product/list");
      const data = await res.json();
      console.log(data);
      setProduct(data);
    };
    fetchApi();
  }, [product]);

  const handleChange = (event)=>{
    const {name,value} = event.target;
    setFormData(prevData =>({...prevData,[name]:value}))
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/api/product/list", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  };
  return (
    <div>
      <h1>Following are the product List</h1>
      {product.map((item,index)=>(
        <div key={index}>
          <p>Name:{item.name}
          Price:{item.price} inStock:{item.stock}</p>
        </div>
      ))}
      <h1>Fill the form below to add new product</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <input type="text" value={formData.name} name="name" onChange={handleChange} />
        <input type="number" value = {formData.price} name="price" onChange={handleChange} />
        <input type="number" value={formData.stock} name="stock" onChange={handleChange} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;