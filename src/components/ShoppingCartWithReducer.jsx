import { useReducer } from "react";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updatedItems = [];

  switch (action.type) {
    case "ADD":
      const itemIndex = state.items.findIndex(
        (item) => item.id == action.payload.id,
      );

      if (itemIndex >= 0) {
        updatedItems = [...state.items];

        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex]?.quantity + 1,
        };
      } else {
        updatedItems = [
          ...state.items,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }

      let result = {
        items: updatedItems,
        totalQuantity: GetTotalQuantity(updatedItems),
        totalAmount: GetTotalAmount(updatedItems),
      };

      return result;

    case "REMOVE":
      var filteredItems = state.items.filter(
        (item) => item.id != action.payload.id,
      );

      return {
        ...state,
        items: filteredItems,
        totalQuantity: GetTotalQuantity(filteredItems),
        totalAmount: GetTotalAmount(filteredItems),
      };

    default:
      return state;
  }
};

const GetTotalAmount = (items) =>
  items.reduce(
    (prevValue, currentValue) =>
      prevValue + currentValue.quantity * currentValue.price,
    0,
  );

const GetTotalQuantity = (items) =>
  items.reduce(
    (prevValue, currentValue) => prevValue + currentValue.quantity,
    0,
  );

export const ShoppingCartWithReducer = () => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const products = [
    { id: 1, name: "React", price: 39.99 },
    { id: 2, name: "Angular", price: 49.99 },
    { id: 3, name: "Vuw", price: 59.99 },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Products */}
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => {
          return (
            <div key={product.id} className="border rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 mt-1">₹{product.price}</p>

              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
                onClick={() => dispatch({ type: "ADD", payload: product })}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      {/* Shopping Cart */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

        {cartState.items.length === 0 ? (
          <span className="text-center">No Items Added</span>
        ) : (
          <div className="border rounded-lg overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gray-100 p-3 font-semibold">
              <span>Item Name</span>
              <span className="text-center">Quantity</span>
              <span className="text-right">Amount</span>
            </div>

            {cartState.items.map((item) => {
              return (
                <div key={item.id} className="grid grid-cols-3 p-3 border-t">
                  <span>{item.name}</span>
                  <span className="text-center">{item.quantity}</span>
                  <span className="text-right">
                    ₹{item.quantity * item.price}
                  </span>
                  <button
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
                    onClick={() => dispatch({ type: "REMOVE", payload: item })}
                  >
                    Remove
                  </button>
                </div>
              );
            })}

            {/* Total */}
            <div className="flex justify-between p-4 border-t bg-gray-50 font-bold text-lg">
              <span>Total</span>
              <span>₹{cartState.totalAmount}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
