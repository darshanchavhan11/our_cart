import React from "react";

export default function Product(props) {
  const incrementQuantity = () => {
    props.incrementQuantity(props.index);
  };
  const decrementQuantity = () => {
    props.decrementQuantity(props.index);
  };
  return (
    <div className="row mt-3  ">
      <div className="col-5">
        <h2>
          {props.product.product}
          <span className="badge bg-secondary">${props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            class="btn btn-danger"
            onClick={decrementQuantity}
          >
            -
          </button>
          <button type="button" class="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.quantity * props.product.price}
      </div>
      <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.removeItems(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}
