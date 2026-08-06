import React from "react";
import { holdings } from "../data/Data";

const Holdings = () => {
  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Stocks</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th> 
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {holdings.map((data,index)=>{
            const curValue = data.qty * data.price;
            const isProfit = curValue - data.avg*data.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss"; 
            const dayClass = parseFloat(data.day)>= 0.0 ? "profit" : "loss"; 
            return (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.qty}</td>
                <td>{data.avg.toFixed(2)}</td> 
                <td>{data.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>{(curValue - data.avg*data.qty).toFixed(2)}</td>
                <td className={profClass}>{data.net}</td>
                <td className={dayClass}>{data.day}</td>
              </tr>
            )
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
