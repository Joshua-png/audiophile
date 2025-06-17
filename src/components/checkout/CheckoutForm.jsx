import { useState } from "react"
import PropTypes from "prop-types"
import { useCartContext } from "../../context/CartContext"
import ContentWrapper from "../shared/ContentWrapper"
import Button from "../shared/Button";
import InputField from "../shared/InputField";
import formatPrice from "../utils/formatPrice";

function CheckoutForm({ openOrderCompleteModal }) {
  const { cart } = useCartContext();
  const [submitText, setSubmitText] = useState("continue & pay");
  const [paymentType, setPaymentType] = useState("e-money");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentType: "e-money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });
  const [errors, setErrors] = useState({});

  const passesFormValidation = () => {
    const newErrors = {};
    if (!form.name || form.name.length === 0) {
      newErrors.name = "Required";
    }
    if (!form.email || form.email.length === 0) {
      newErrors.email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Wrong format";
    }
    if (!form.phone || form.phone.length === 0) {
      newErrors.phone = "Required";
    }
    if (!form.address || form.address.length === 0) {
      newErrors.address = "Required";
    }
    if (!form.zip || form.zip.length === 0) {
      newErrors.zip = "Required";
    } else if (!/^\d{5}$/.test(form.zip)) {
      newErrors.zip = "Invalid Zip Code";
    }
    if (!form.city || form.city.length === 0) {
      newErrors.city = "Required";
    }
    if (!form.country || form.country.length === 0) {
      newErrors.country = "Required";
    }
    if (paymentType === "e-money") {
      if (!form.eMoneyNumber || form.eMoneyNumber.length === 0) {
        newErrors.eMoneyNumber = "Required";
      }
      if (!form.eMoneyPin || form.eMoneyPin.length === 0) {
        newErrors.eMoneyPin = "Required";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleRadioButtonClick = (e) => {
    setPaymentType(e.target.value);
    if (e.target.value === "cash") {
      setForm({ ...form, "e-money-number": "", "e-money-pin": "" });
    }
    handleInputChange(e);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validForm = passesFormValidation();
    if (!validForm) return;
    openOrderCompleteModal();
  }

  return (
    <ContentWrapper>
      <form onSubmit={handleSubmit} className="lg:flex lg:justify-between lg:items-start" noValidate>
        <div className="mb-8 mt-6 md:pt-7.5 lg:w-182 lg:bg-white lg:rounded-xl lg:px-12 lg:pb-12 lg:pt-13 lg:mt-0">
          <h2 className="mb-8 md:text-8">Checkout</h2>
          <p className="text-primary uppercase text-13px font-bold tracking-1px mb-4">Billing Details</p>
          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <InputField
              label="Name"
              name="name"
              type="text"
              placeholder="Alexei Ward"
              onChange={handleInputChange}
              error={errors.name ? true : false}
              errorMessage={errors.name}
            />
            <InputField
              label="Email Address"
              name="email"
              type="email"
              placeholder="alexei@mail.com"
              onChange={handleInputChange}
              error={errors.email ? true : false}
              errorMessage={errors.email}
            />
            <InputField
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+1 202-555-0136"
              onChange={handleInputChange}
              error={errors.phone ? true : false}
              errorMessage={errors.phone}
            />
          </div>
          <p className="text-primary uppercase text-13px font-bold tracking-1px mb-4">Shipping info</p>
          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <InputField
                label="Your Address"
                name="address"
                type="text"
                placeholder="1137 Williams Avenue"
                onChange={handleInputChange}
                error={errors.address ? true : false}
                errorMessage={errors.address}
              />
            </div>
            <InputField
              label="ZIP Code"
              name="zip"
              type="number"
              placeholder="10001"
              onChange={handleInputChange}
              error={errors.zip ? true : false}
              errorMessage={errors.zip}
            />
            <InputField
              label="City"
              name="city"
              type="text"
              placeholder="New York"
              onChange={handleInputChange}
              error={errors.city ? true : false}
              errorMessage={errors.city}
            />
            <InputField
              label="Country"
              name="country"
              type="text"
              placeholder="United States"
              onChange={handleInputChange}
              error={errors.country ? true : false}
              errorMessage={errors.country}
            />
          </div>
          <div className="pb-8">
            <p className="text-primary uppercase text-13px font-bold tracking-1px mb-4">Payment Details</p>
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <p className="text-12px font-bold mb-4">Payment Method</p>
              <div className="space-y-4 mb-8 flex flex-col">
                <label className={`pl-4 min-h-14 flex gap-4 border rounded-lg items-center hover:cursor-pointer hover:border-primary ${paymentType === "e-money" ? "border-primary" : ""}`}>
                  <input type="radio" id="e-money" name="paymentType" value="e-money" className="accent-primary" onChange={handleRadioButtonClick} defaultChecked />
                  <span className="text-15px font-bold">e-Money</span>
                </label>
                <label className={`pl-4 min-h-14 flex gap-4 border rounded-lg items-center hover:cursor-pointer hover:border-primary ${paymentType === "cash" ? "border-primary" : ""}`}>
                <input type="radio" id="cash" name="paymentType" value="cash" className="accent-primary" onChange={handleRadioButtonClick} />
                  <span className="text-15px font-bold">Cash on Delivery</span>
                </label>
              </div>
            </div>
            {paymentType === "e-money" && (
              <div className="space-y-6 mb-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
                <InputField
                  label="e-Money Number"
                  name="eMoneyNumber"
                  type="text"
                  placeholder="238521993"
                  onChange={handleInputChange}
                  error={errors.eMoneyNumber ? true : false}
                  errorMessage={errors.eMoneyNumber}
                />
                <InputField
                  label="e-Money PIN"
                  name="eMoneyPin"
                  type="number"
                  placeholder="6891"
                  onChange={handleInputChange}
                  error={errors.eMoneyPin ? true : false}
                  errorMessage={errors.eMoneyPin}
                />
              </div>
            )}
          </div>
        </div>
        <div className="my-8 lg:bg-white lg:rounded-xl lg:p-8 lg:min-w-87 lg:my-0">
          <h6 className="mb-8">Summary</h6>
          <div className="space-y-6 mb-8">
          {cart.products.map((product) => (
            <div key={product.id} className="flex justify-between items-center">
              <div className="flex gap-4 w-full items-center justify-between">
                <div className="flex justify-center items-center gap-4">
                  <img src={product.image.mobile} alt={product.name} className="w-16 h-16 rounded-lg" />
                  <div>
                    <p className="font-bold text-15px">{product.shortName}</p>
                    <p className="opacity-50">{formatPrice(product.price)}</p>
                  </div>
                </div>
                <p className="font-bold text-15px opacity-50">x{product.quantity}</p>
              </div>
            </div>
          ))}
          </div>
          <div className="uppercase">
            <div className="space-y-2 mb-6">
              <div className="flex justify-between items-center">
                <p className="opacity-50">Total</p>
                <h6 className="font-bold">{formatPrice(cart.subtotal)}</h6>
              </div>
              <div className="flex justify-between items-center">
                <p className="opacity-50">Shipping</p>
                <h6 className="font-bold">{formatPrice(cart.shippingCost)}</h6>
              </div>
              <div className="flex justify-between items-center">
                <p className="opacity-50">Vat (included)</p>
                <h6 className="font-bold">{formatPrice(cart.subtotal)}</h6>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="opacity-50">Grand Total</p>
              <h6 className="font-bold text-primary">{formatPrice(cart.grandTotal)}</h6>
            </div>
          </div>
          <div 
            className="flex flex-col mt-8" 
            onMouseEnter={() => setSubmitText("continue")} 
            onMouseLeave={() => setSubmitText("continue & pay")}
          >
            <Button 
              text={submitText}
              type="submit" 
              disabled={cart.products.length === 0} 
            />
          </div>
        </div>
      </form>
    </ContentWrapper>
  )
}

CheckoutForm.propTypes = {
  openOrderCompleteModal: PropTypes.func.isRequired,
}

export default CheckoutForm