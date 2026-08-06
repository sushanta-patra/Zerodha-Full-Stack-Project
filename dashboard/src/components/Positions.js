import React from "react";
import { positions } from "../data/Data";

const Positions = () => {
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty</th>
            <th>Avg</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg</th>
          </tr>
          {positions.map((data,index)=>{
            const curValue = data.qty * data.price;
            const isProfit = curValue - data.avg*data.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss"; 
            const dayClass = parseFloat(data.day)>= 0.0 ? "profit" : "loss"; 
            return (
              <tr key={index}>
                <td>{data.product}</td>
                <td>{data.name}</td>
                <td>{data.qty}</td>
                <td>{data.avg.toFixed(2)}</td> 
                <td>{data.price.toFixed(2)}</td>
                <td className={profClass}>{(curValue - data.avg*data.qty).toFixed(2)}</td>
                <td className={dayClass}>{data.day}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
