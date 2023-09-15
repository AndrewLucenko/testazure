import React from "react";

import './Board.scss';
import {boardMocks} from "../Mock/listMocks";

const BoardComponent: React.FC = () => {
    return(
        <div className='wrapper'>
            <div className='board-container'>
                {boardMocks.map((items, index) =>
                    {
                        if (index === 0) {
                            return (
                                <div className='picture-board-item'>
                                    <img src={items.src} alt='item img' className='board-picture'/>
                                    <div className='picture-title'>{items.name}</div>
                                </div>
                                )
                        }
                        if (index + 1 === boardMocks.length) {
                            return (
                                <div className='picture-board-item'>
                                    <img src={items.src} alt='item img' className='board-picture'/>
                                    <div className='picture-title'>{items.name}</div>
                                </div>
                            )
                        }

                        return (
                            <div className='board-item'>
                                <img src={items.src} alt='item img' className='picture'/>
                                <div className='item-title'>{items.name}</div>
                                <div className='item-description'>{items.description}</div>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}


export default BoardComponent;