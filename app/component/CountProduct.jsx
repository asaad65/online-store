"use client"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UpdateQuantity } from '../redux/CartSlice';

export default function CountProduct({ min = 1, max = 99, mood = 'ProCart', productId, initialQuantity }) {
  const [quantity, setQuantity] = useState(initialQuantity ?? min);
  const dispatch = useDispatch();

  const btnStyle = {
    width: mood === 'ProDitels' ? '40px' : '25px',
    height: mood === 'ProDitels' ? '40px' : '25px',
    borderRadius: '50%',
    border: '1px solid #ff9800',
    backgroundColor: '#fff',
    color: '#ff9800',
    fontSize: '18px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const boxStyle = {
    width: mood === 'ProDitels' ? '40px' : '20px',
    height: mood === 'ProDitels' ? '40px' : '20px',
    borderRadius: '50%',
    border: '1px solid #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    color:'#000'
  };

  const handleChange = (newQuantity) => {
    setQuantity(newQuantity);
    dispatch(UpdateQuantity({ id: productId, quantity: newQuantity }));
  };

  return (
    <div dir="rtl" style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '20px 0' }}>
      {mood === 'ProDitels' && <label style={{ fontWeight: 'bold' }}>number:</label>}
      <button onClick={() => quantity < max && handleChange(quantity + 1)} style={btnStyle}>+</button>
      <div style={boxStyle}>{quantity}</div>
      <button onClick={() => quantity > min && handleChange(quantity - 1)} style={btnStyle}>-</button>
    </div>
  );
}
