import React from "react";
import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";

function CartDrawer({ isOpen, onClose }) {
  const { items, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-[25rem] max-w-full h-full bg-white shadow-2xl z-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-5 border-b">
        <h2 className="text-xl font-bold">Cart ({items.length} items)</h2>
        <button onClick={onClose} className="text-3xl font-light hover:text-red-500">×</button>
      </div>

      {/* Item List */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
        {items.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 border-b pb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover border rounded"
              />
              <div className="flex-1">
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-gray-500 mb-1">Color: {item.color}</p>
                <div className="flex items-center gap-2 text-sm mb-1">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 py-1 border rounded hover:bg-gray-200"
                  >−</button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 py-1 border rounded hover:bg-gray-200"
                  >+</button>
                </div>
                <p className="text-sm font-semibold">${item.price * item.qty}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="text-gray-500 hover:text-red-600"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {items.length > 0 && (
        <div className="p-5 border-t font-semibold text-right">
          Total: ${total.toFixed(2)}
        </div>
      )}
    </div>
  );
}

export default CartDrawer;