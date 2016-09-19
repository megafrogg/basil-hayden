import React from 'react';

const InStockList = ({stores, selectStore}) =>
    <ul className="list-group">
      {stores.map(store => store.quantity > 0 ?
        <li
          onClick={(e) => selectStore(store)}
          className="list-group-item" key={store.id}>
            <span className="badge">{store.quantity}</span>
            {store.name}
        </li> :
        <li className="list-group-item disabled" key={store.id}>
            <span className="badge">{store.quantity}</span>
            {store.name}
        </li>
      )}
    </ul>;

export default InStockList;
