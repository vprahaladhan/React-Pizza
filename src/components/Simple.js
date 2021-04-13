import React, { useState } from 'react';

const Simple = ({ pizza }) => {
  console.log('Pizza >> ', pizza);
  const [ topping, setTopping ] = useState();
  console.log('Topping >> ', topping);
  // const [ size, setSize ] = useState();
  // const [ vegetarian, setVegetarian ] = useState();

  // const submitPizza = () => {
  //   // onSubmit({
  //   //   id: pizza.id,
  //   //   topping,
  //   //   size,
  //   //   vegetarian
  //   // });

  //   // topping.current.value = '';
  //   // size.current.value = 'Small';
  //   // vegetarian.current.checked = false;
  // }

  // const handleInput = ({ target }) => {
  //   console.log('Topping >> ', target.value);
  //   setTopping(target.value);
  // }

  return (
    <input type="text" value={topping ? topping : pizza.topping} onChange={({ target }) => setTopping(target.value)} />
  )

  // return(
  //     <div className="form-row">
  //       <div className="col-5">
  //         <input 
  //           type="text" 
  //           value={topping} 
  //           onChange={handleInput} />
  //       </div>
  //       <div className="col">
  //         <select 
  //           className="form-control" 
  //           value={size} 
  //           onChange={({ target }) => setSize(target.value)}>
  //           <option value="Small">Small</option>
  //           <option value="Medium">Medium</option>
  //           <option value="Large">Large</option>
  //         </select>
  //       </div>
  //       {/** 
  //       <div className="col">
  //         <div className="form-check">
  //           <input 
  //             type="radio" 
  //             name="veg-or-non-veg"
  //             value="Vegetarian" 
  //             className="form-check-input" 
  //             checked={vegetarian}
  //             onClick={setVegetarian(!vegetarian)} />
  //           <label className="form-check-label">
  //             Vegetarian
  //           </label>
  //         </div>
  //         <div className="form-check">
  //           <input 
  //             type="radio" 
  //             name="veg-or-non-veg"
  //             value="Vegetarian" 
  //             className="form-check-input" 
  //             checked={vegetarian || vegetarian === null ? false : true}
  //             onClick={setVegetarian(!vegetarian)} />
  //           <label className="form-check-label">
  //             Not Vegetarian
  //           </label>
  //         </div>
  //       </div>
  //       */}
  //       <div className="col">
  //         <button type="submit" className="btn btn-success" onClick={submitPizza}>Submit</button>
  //       </div>
  //     </div>
  // );
}

export default Simple;