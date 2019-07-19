import React from 'react';

import Contest from './ContestCard.js';

function ContestRowCards(props){
        return (
            <div className="contestCardContainer">
                {props.Contests.map((item,index) => {
                    return (
                        <Contest index={index+props.size} contestDetails={item}></Contest>)
                })
                }
            </div>
        );
    }

export default ContestRowCards;