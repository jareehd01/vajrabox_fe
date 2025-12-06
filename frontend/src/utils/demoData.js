export const demoProducts = [
  {
    id: 1,
    name: 'Bershka PR 072819 Sneaker',
    price: 2499,
    image: '/sneaker.jpg',
    description: '39 EU (US 8/PH 8.5) White/Beige Accents'
  },
  {
    id: 2,
    name: 'Apple Watch Series 9',
    price: 26990,
    image: '/apple-watch.jpg',
    description: 'GPS, 41mm Space Gray Aluminum Case'
  },
  {
    id: 3,
    name: 'Nike Air Max 270',
    price: 8999,
    image: '/nike-shoes.jpg',
    description: '42 EU (US 9/PH 9.5) Black/White'
  },
  {
    id: 4,
    name: 'Samsung Galaxy S24',
    price: 45990,
    image: '/samsung-phone.jpg',
    description: '128GB Phantom Black'
  },
  {
    id: 5,
    name: 'MacBook Air M2',
    price: 65990,
    image: '/macbook.jpg',
    description: '13-inch, 256GB SSD, Space Gray'
  }
];

export const addDemoDataToWishlist = (dispatch, addToWishlist) => {
  demoProducts.slice(0, 2).forEach(product => {
    dispatch(addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    }));
  });
};

export const addDemoDataToCart = (dispatch, addToCart) => {
  demoProducts.slice(0, 2).forEach(product => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    }));
  });
}; 