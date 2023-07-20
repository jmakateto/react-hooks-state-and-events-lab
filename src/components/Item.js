import React, { useState } from "react";

function Item() {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart((prevInCart) => !prevInCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      {/* Your item details here */}
      <button onClick={handleAddToCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
