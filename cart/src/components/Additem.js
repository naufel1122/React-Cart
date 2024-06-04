import React from "react";
class AddItem extends React.Component {
    render() { 
return(
<form className="row">
  <div className="mb-3 col-4 mb-5">
    <label htmlFor="inputName" className="form-label">
      Name
    </label>
    <input
      type="text"
      className="form-control"
      id="inputName"
      aria-describedby="emailHelp"
    />
  </div>
  <div className="mb-3 col-4">
    <label htmlFor="inputPrice" className="form-label">
  Price
    </label>
    <input
      type="number"
      className="form-control"
      id="price"
    />
  </div>

  <button type="submit" className="btn btn-primary col-4">
    Add 
  </button>
</form>
)
    }
}
export default AddItem; 