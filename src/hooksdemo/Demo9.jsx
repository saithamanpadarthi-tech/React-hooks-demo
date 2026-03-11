import React, { useState } from 'react'

export default function Demo9() {
    const [product,setProduct] = useState("")
    const [productList,setProductList] = useState([]) // Empty list
    const handleChange = (e) =>
    {

        setProduct(e.target.value)
        // e means event (any name can be given for an event)
        // e.target means specific input field
        // e.target.value means the value entered in the input field

    }
    const addProduct = () =>
    {
        if (product.length==0){
            alert("Enter productName")
        } else {
            setProductList([...productList,product])
            //console.log(...productList)
        }
        
    }
  return (
    <div>
        <h2><u>Demo 9</u></h2>
        <h3><u>Product List Demo</u></h3>
        Product Name 
        <input type="text" name="pname" onChange={handleChange}/>
        <button onClick={addProduct} >Add</button>

        <br />

        <table border={1} bgcolor="lightgrey" >
            <tr>
                <th>
                    Serial.No
                </th>
                <th>
                    Product Name
                </th>
            </tr>
            {
                productList.map((value,index)=>(
                    <tr key={index} >
                        <td>{index+1}</td>
                        <td>{value}</td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}
