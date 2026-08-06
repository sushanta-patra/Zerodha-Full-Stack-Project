import React from 'react';
import { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import {WatchlistAction} from './WatchlistAction';

const WatchlistItem = ({ data ,index}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = (e) => {
        setIsHovered(true);
    }

    const handleMouseLeave = (e) => {
        setIsHovered(false);
    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={data.isDown ? "down" : "up"}>{data.name}</p>
                <div className='item-info'>
                    <span className="percent">{data.percent}</span>
                    {
                        data.isDown ? <KeyboardArrowDown className="down" /> : <KeyboardArrowUp className="up" />  
                    }
                    <span>{data.price}</span>
                </div>
            </div>
            {isHovered && <WatchlistAction data={data} index={index} />}

        </li>
    )
}

export default WatchlistItem;