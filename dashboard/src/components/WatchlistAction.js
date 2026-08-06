import React from "react";
import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";

export const WatchlistAction = ({ data, index }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          transitionComponent={Grow}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          transitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Chart (C)"
          placement="top"
          arrow
          transitionComponent={Grow}
        >
        <button className="action"><BarChartOutlined/></button>
        </Tooltip>
        <Tooltip
          title="More"
          placement="top"
          arrow
          transitionComponent={Grow}
        >
          <button className="action"><MoreHoriz/></button>
        </Tooltip>
      </span>
    </span>
  );
};
