import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ContentWrapper from "../shared/ContentWrapper"
import CheckoutForm from "../checkout/CheckoutForm"
import OrderCompleteModal from "../checkout/OrderCompleteModal"
import useWindowWidth from "../../hooks/useWindowWidth"

function CheckoutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth >= 1440) {
      document.documentElement.style.backgroundColor = "#F1F1F1";
    }
    return () => {
      document.documentElement.style.backgroundColor = "#FAFAFA";
    }
  }, [windowWidth]);

  function handleGoBack() {
    navigate(-1);
  }

  function handleOrderCompleteModal() {
    setModalOpen(true);
  }

  return (
    <div>
      <ContentWrapper>
        <div className="mt-4 mb-6 lg:mt-20">
          <button onClick={handleGoBack} className="opacity-50 text-15px">Go Back</button>
        </div>
        <div className="mb-24 lg:mb-35">
          <CheckoutForm openOrderCompleteModal={handleOrderCompleteModal} />
        </div>
      </ContentWrapper>
      <OrderCompleteModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}

export default CheckoutPage