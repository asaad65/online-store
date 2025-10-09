"use client"
import   { useEffect, useState} from "react"
import '../component_modules/CheckoutPage.css'
import { useRouter } from "next/navigation"
import { clear } from "../redux/CartSlice"
import { useDispatch } from 'react-redux'
import AlertBox from "./AlertBox"
export default function CheckoutPage() {
const dispatch = useDispatch()
const [showAlert, setShowAlert] = useState(false)

  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: 'cash'
  })

  const [errors, setErrors] = useState({})
  const [ProductCart, setProductCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cart = JSON.parse(localStorage.getItem('cart')) || []
      setProductCart(cart)

      const total = cart.reduce((acc, item) => {
        const qty = Number(item.quantity) || Number(item.minimumOrderQuantity) || 0
        const price = Number(item.price) || 0
        return acc + qty * price
      }, 0)

      setTotalPrice(total)
    }
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Please enter your full name"
    if (!formData.address.trim()) newErrors.address = "Please enter the address"
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number"
    } else if (!/^\d{9,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number"
    }

    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setShowAlert(true)
    localStorage.removeItem('cart')
    dispatch(clear())
    setErrors({})
  }

  return (
    <>

      <div className="cartSummary">
        <h3>🛒  Basket summary</h3>
        {ProductCart.length === 0 ? (
          <p>The basket is empty.</p>
        ) : (
          <ul className="itemList">
            {ProductCart.map(item => (
              <li key={item.id} className="item">
                <span>{item.title}</span>
                <span>
                  {item.quantity || item.minimumOrderQuantity} × {item.price} ={" "}
                  {((+item.quantity || +item.minimumOrderQuantity) * +item.price).toFixed(2)}$
                </span>
              </li>
            ))}
          </ul>
        )}
        <div className="total">Total: {totalPrice.toFixed(2)} $</div>
      </div>

      <div className="checkoutContainer">
        <h2 className="title">Complete your purchase</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>full name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          {errors.name && <span className="error">{errors.name}</span>}

          <label>the address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          {errors.address && <span className="error">{errors.address}</span>}

          <label>phone number:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <label>payment method:</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
            <option value="cash">Cash on delivery</option>
            <option value="card">credit card</option>
            <option value="paypal">PayPal</option>
          </select>

          <button type="submit" className="submitBtn">Confirm the order</button>
        </form>
      </div>
      {showAlert && (
  <AlertBox
    message="The order has been submitted successfully"
    onClose={() => {
      setShowAlert(false)
      router.push('/')
    }}
  />
)}

      <div style={{ width: '100%', height: '63px' }}></div>
    </>
  )
}