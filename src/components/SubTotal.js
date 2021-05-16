import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/stateProvide";
import { getBasketTotal } from "../context/reducer";
import { useHistory } from "react-router-dom";
import "./styles/SubTotal.css"

function Subtotal() {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div>
              {/* Part of the homework */}
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </div>
            <small className="subTotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(cart)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;