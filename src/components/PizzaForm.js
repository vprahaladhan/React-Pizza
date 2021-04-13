import React, { useState, useEffect } from "react"

const PizzaForm = ({ pizza, onSubmit }) => {
  const [ topping, setTopping ] = useState();
  const [ size, setSize ] = useState();
  const [ vegetarian, setVegetarian ] = useState();

  useEffect(() => {
    setTopping(pizza.topping);
    setSize(pizza.size);
    setVegetarian(pizza.vegetarian)
  }, [pizza])

  const submitPizza = () => {
    // onSubmit({
    //   id: pizza.id,
    //   topping,
    //   size,
    //   vegetarian
    // });

    console.log({
      id: pizza.id,
      topping,
      size,
      vegetarian
    });

    setTopping('');
    setSize('Small');
    setVegetarian(null);
  }

  return(
      <div className="form-row">
        <div className="col-5">
          <input 
            type="text"
            className="form-control"
            value={topping} 
            onChange={({ target }) => setTopping(target.value)} />
        </div>
        <div className="col">
          <select 
            className="form-control" 
            value={size} 
            onChange={({ target }) => setSize(target.value)}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input 
              type="radio" 
              name="vegetarian"
              className="form-check-input" 
              checked={vegetarian}
              onChange={() => setVegetarian(!vegetarian)} />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input 
              type="radio" 
              name="vegetarian"
              className="form-check-input" />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={submitPizza}>Submit</button>
        </div>
      </div>
  );
}

export default PizzaForm;