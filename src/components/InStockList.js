import React from 'react';

const InStockList = ({stores}) => {
  return (
    <ul>
      stores.map(function(store) {
        console.log(store)
        
      }
      );
    </ul>
  );
};

export default InStockList;
