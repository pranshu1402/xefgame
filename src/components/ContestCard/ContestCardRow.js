import React from 'react';

import Contest from './ContestCard.js';

function ContestRowCards(props){
        return (
            <div className="contestCardContainer">
                {props.contests.map((contest,index) => {
                    return (
                        <Contest key={index}
                                clickHandler={props.clickHandler} 
                                index={index+props.size} 
                                contestDetails={contest}
                                selectedContest={props.selectedContest} />
                    );
                })
                }
            </div>
        );
    }

export default ContestRowCards;