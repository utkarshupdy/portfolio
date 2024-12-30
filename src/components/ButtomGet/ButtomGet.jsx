import React from 'react';
import Icon from './icon';
import './buttom.css';
// import { FormattedMessage } from 'react-intl';

export const ButtomGet = ({ message }) => {
    return (
        <button className="cssbuttons-io-button">
            {message || 'Read more'}
            
            <div className="icon">
                <Icon />
            </div>
        </button>
    );
};
