import React from "react";
import {listMocks} from "../Mock/listMocks";


import './List.scss';

const ListComponent: React.FC = () => {
    return (
        <div className='wrapper'>
            <div className='list-container'>
            {listMocks.map(contetnt => (
                <div className='list-item' key={contetnt.name}>
                    <img src={contetnt.src} alt='item img' className='picture'/>
                    <div className='item-title'>{contetnt.name}</div>
                    <div className='item-description'>{contetnt.description}</div>
                </div>
            ))}
            </div>
        </div>
    )}

export default ListComponent;