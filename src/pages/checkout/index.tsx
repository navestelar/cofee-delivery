import AddressForm from './addressForm'
import FinishCheckout from './finishCheckout'
import PaymentForm from './paymentForm'

export default function Checkout() {
  return (
    <form className="container flex gap-6 py-10">
      <div className="flex w-full flex-col gap-3">
        <AddressForm />
        <PaymentForm />
      </div>
      <FinishCheckout />
    </form>
  )
}
