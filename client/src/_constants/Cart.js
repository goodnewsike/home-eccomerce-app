import productImg1 from '../_assets/images/13.jpg';

export const cartItems = [
   {
      id: 1,
      img: productImg1,
      productName: 'product name',
      productId: '93813718293',
      color: '',
      size: 'double',
      qty: '2',
      amount: '300000',
   },
   {
      id: 2,
      img: productImg1,
      productName: 'product 2 name',
      productId: '93813718200',
      color: '',
      size: 'single',
      qty: '4',
      amount: '350000',
   },
];

export const cartSummary = [
   {
      id: 1,
      options: 'subtotal',
      amount: '300000',
   },
   {
      id: 2,
      options: 'estimated shipping',
      amount: '1000',
   },
   {
      id: 3,
      options: 'shopping discount',
      amount: '1050',
   },
   {
      id: 4,
      options: 'total',
      amount: '320000',
   },
];
