import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartView, deleteFromCart } from '../store/cartReducer';

function Cart() {
  const cartD = useSelector((state) => state.cart.cartData);
  const singleCart = useSelector((state) => state.cart.singleCart);
  const userId = useSelector((state) => state.users.loggedIn.id);

  const dispatch = useDispatch();
  const cartId = cartD.id;

  useEffect(() => {
    dispatch(cartView({ cartId }));
  }, [cartD, singleCart]);

  const games = singleCart.videogames;

  return (
    <>
      <div>
        {/*-----------------MAP-------------------- */}
        {games &&
          games.map((game, i) => {
            let gameId = game.id;
            return (
              <div key={i}>
                <div className="card mb-3" /*style="max-width: 540px;"*/>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={game.image}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{game.name}</h5>
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button type="button" class="btn btn-primary">
                            -
                          </button>
                          <button type="text" class="btn btn-primary">
                            {game['cart-videogames'].amountOfGames}
                          </button>
                          <button type="button" class="btn btn-primary">
                            +
                          </button>
                        </div>

                        <h6 className="card-text">Price: ${game.price}.-</h6>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() =>
                            dispatch(deleteFromCart({ gameId, userId }))
                          }
                        >
                          🗑
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Quantity: {singleCart.quantity}</h5>
            <h4 className="card-title">Total Price: ${singleCart.price}</h4>

            <a href="#" className="btn btn-primary">
              Buy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
