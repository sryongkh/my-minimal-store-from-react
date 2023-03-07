import { useParams } from 'react-router-dom';

function Cart({ cartItems }) {
  const { id } = useParams();

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;