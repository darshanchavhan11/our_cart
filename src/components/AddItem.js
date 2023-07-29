import React from "react";
class AddItem extends React.Component {                                                      
    constructor(props){
      super(props);
      this.state ={
        productName: "",
        productPrice:"",
      };
    }
    render() {
        return(
                  <form className="row mb-5" onSubmit={(e) => {
                    e.preventDefault();
                    this.props.addItems(this.state.productName, Number(this.state.productPrice));
                  }}>
                    <div className="mb-3 col-4">
                      <label htmlFor="InputName" className="form-label"> Name</label>
                      <input type="text" className="form-control" id="exampleInputtext" name="productName"
                      onChange={(e) =>{
                      this.setState({productName : e.currentTarget.value});
                      }}
                      />
                    </div>
                    <div className="mb-3 col-4">
                      <label htmlFor="Number" className="form-label">Price</label>
                      <input type="number" className="form-control" id="exampleInputPassword1" name="productPrice"  onChange={(e) =>{
                      this.setState({productPrice : Number(e.currentTarget.value)});
                      }}/>
                    </div>
                    <button type="submit" className="btn btn-primary col-4">Add</button>
                    </form>
        );

                            
    }
}
 
export default AddItem;