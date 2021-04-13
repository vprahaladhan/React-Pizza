import React from "react"

const Pizza = ({ pizza, onClick }) => {
  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian.toString()}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => onClick(pizza)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza;