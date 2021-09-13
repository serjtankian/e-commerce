import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartView, deleteFromCart, increaseProductCart, decreaseProductCart } from '../store/cartReducer';
import { useLocation } from "react-router"


function Cart() {
  const location = useLocation()
  const arrayLocation = location.pathname.split("/")
  const cartD = useSelector((state) => state.cart.cartData);
  const singleCart = useSelector((state) => state.cart.singleCart);
  const userId = useSelector((state) => state.users.loggedIn.id);


  const dispatch = useDispatch();
  const cartId = cartD.id;
  console.log("cartD", cartD)
  console.log("singleCart", singleCart)

  useEffect(() => {
    dispatch(cartView({ cartId: arrayLocation[2], userId: arrayLocation[1] }))
  }, [cartD, singleCart]);

  const decrement = (gameId, userId) => {
    dispatch(decreaseProductCart({ gameId, userId }))
      .then(() => dispatch(cartView({ cartId: arrayLocation[2], userId: arrayLocation[1] })))
  }
  const increment = (gameId, userId) => {
    dispatch(increaseProductCart({ gameId, userId }))
      .then(() => dispatch(cartView({ cartId: arrayLocation[2], userId: arrayLocation[1] })))
  }
  const deleteGame = (gameId, userId) => {
    dispatch(deleteFromCart({ gameId, userId }))
      .then(() => dispatch(cartView({ cartId: arrayLocation[2], userId: arrayLocation[1] })))
  }
  /*  useEffect(() => {
   }, [singleCart]); */

  const games = singleCart ? singleCart.videogames : null;
  console.log(games)

  /* 
    const handleIncrement = (state) => {
      return state + 1
    } */



  return (

    <>
      <div>
        {/*-----------------MAP-------------------- */}
        {games ?
          games && games.map((game, i) => {
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
                          <button type="button" class="btn btn-primary" onClick={() => decrement(gameId, userId)}>
                            -
                          </button>
                          <button type="text" class="btn btn-primary">
                            {game['cart-videogames'].amountOfGames}
                          </button>
                          <button type="button" class="btn btn-primary" onClick={() => increment(gameId, userId)}>
                            +
                          </button>
                        </div>

                        <h6 className="card-text">Price: ${game.price}.-</h6>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() =>
                            deleteGame(gameId, userId)
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
          })
          :
          <h5 className="card-title">No items added yet.</h5>
        }

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
