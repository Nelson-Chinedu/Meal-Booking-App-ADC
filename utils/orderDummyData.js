/*
 Hard coded data that replicates stored data
 in db
 */

export default {
  orders: [
    {
      id: 1,
      name: 'Fried Rice and Chicken',
      size: 'medium',
      price: '1500',
      orderTimeStamp: new Date().toLocaleString(),
    },
    {
      id: 2,
      name: 'Fries and Beef',
      size: 'medium',
      price: '1500',
      orderTimeStamp: new Date().toLocaleString(),
    },
    {
      id: 3,
      name: 'Beans and Plantain',
      size: 'small',
      price: '1000',
      orderTimeStamp: new Date().toLocaleString(),
    },
    {
      id: 4,
      name: 'Jollof Rice',
      size: 'Large',
      price: '2000',
      orderTimeStamp: new Date().toLocaleString(),
    },
  ],
};
