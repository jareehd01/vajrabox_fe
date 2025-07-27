~# Redux Toolkit Setup Guide

This project has been configured with Redux Toolkit for state management. Here's how everything works:

## 📁 Project Structure

```
src/
├── store/
│   ├── index.js          # Store configuration
│   ├── hooks.js          # Typed hooks for useSelector and useDispatch
│   └── slices/
│       ├── cartSlice.js  # Cart state management
│       └── wishlistSlice.js # Wishlist state management
```

## 🔧 Setup Overview

### 1. Store Configuration (`src/store/index.js`)
- Configured with `configureStore` from Redux Toolkit
- Combines cart and wishlist reducers
- Includes middleware for better debugging

### 2. Slices
Redux Toolkit uses "slices" to manage state. Each slice contains:
- Initial state
- Reducer functions
- Action creators (automatically generated)

#### Cart Slice Features:
- `addToCart(item)` - Add item with quantity
- `removeFromCart(id)` - Remove item completely
- `updateQuantity({id, quantity})` - Update item quantity
- `clearCart()` - Empty the cart

#### Wishlist Slice Features:
- `addToWishlist(item)` - Add item to wishlist
- `removeFromWishlist(id)` - Remove item from wishlist
- `clearWishlist()` - Empty the wishlist

## 🎯 How to Use Redux in Components

### 1. Import hooks
```javascript
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart } from '../store/slices/cartSlice';
```

### 2. Access state
```javascript
const cartItems = useAppSelector(state => state.cart.items);
const totalQuantity = useAppSelector(state => state.cart.totalQuantity);
const wishlistItems = useAppSelector(state => state.wishlist.items);
```

### 3. Dispatch actions
```javascript
const dispatch = useAppDispatch();

const handleAddToCart = () => {
  dispatch(addToCart({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: 1,
    image: item.image
  }));
};
```

## 🛠️ Available Components

### Cart Component (`/cart`)
- Display all cart items
- Update quantities
- Remove items
- Show total amount
- Clear entire cart

### Wishlist Component (`/wishlist`)
- Display wishlist items
- Add items to cart from wishlist
- Remove items from wishlist
- Clear entire wishlist

### Navigation Bar
- Shows real-time cart and wishlist counts
- Clickable links to cart and wishlist pages

## 🚀 Example Usage in ItemPage

The `ItemPage` component demonstrates how to:
1. Add items to cart with quantity
2. Toggle items in wishlist
3. Show visual feedback for wishlist status

## 📦 Dependencies Added

- `@reduxjs/toolkit` - Modern Redux with less boilerplate
- `react-redux` - React bindings for Redux

## 🔄 State Flow

1. User interacts with UI (clicks "Add to Cart")
2. Component dispatches action
3. Redux Toolkit slice handles the action
4. State is updated immutably
5. Connected components re-render automatically

## 🎨 UI Integration

- Cart and wishlist counts appear in navigation
- Visual feedback for wishlist items (red heart when added)
- Responsive design for all components

## 🔧 Development Tips

1. Use Redux DevTools browser extension for debugging
2. All state mutations are handled by Immer (built into RTK)
3. Actions are automatically typed and serializable
4. Use the custom hooks (`useAppDispatch`, `useAppSelector`) for better TypeScript support

## 🚦 Next Steps

You can extend this setup by:
1. Adding persistence (Redux Persist)
2. Adding async actions (RTK Query)
3. Adding user authentication state
4. Adding product filters and search state
5. Adding order history state

## 🎯 Key Benefits of This Setup

- **Less Boilerplate**: Redux Toolkit eliminates repetitive code
- **Built-in Best Practices**: Includes Immer, Redux DevTools, and thunk middleware
- **Type Safety**: Custom hooks provide better TypeScript integration
- **Predictable State**: All state changes are tracked and debuggable
- **Scalable**: Easy to add new slices and features
