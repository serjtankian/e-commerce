import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import games from './game.json';

function Cart() {
  return (
    <>
      {/*-----------------MAP-------------------- */}
      <h1>hola </h1>
      {console.log(games)}
      {games.map((game, i) => {
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
                        Cantidad del producto a comprar
                      </button>
                      <button type="button" class="btn btn-primary">
                        +
                      </button>
                    </div>
                    <p className="card-text">$ {game.price}</p>
                    <button type="button" class="btn btn-primary">
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
          <h5 className="card-title">Price:</h5>
          <p className="card-text">$ 99999999</p>
          <a href="#" className="btn btn-primary">
            Buy
          </a>
        </div>
      </div>
    </>
  );
}

export default Cart;
