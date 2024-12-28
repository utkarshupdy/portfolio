import React from 'react';
import Icon from './icon';
import './buttom.css';
// import { FormattedMessage } from 'react-intl';

export const ButtomGet = ({ message }) => {
    return (
        <button className="cssbuttons-io-button">
            {/* Display the passed message or default to "Read more" */}
            {message || 'Read more'}
            {/* <FormattedMessage
                id='btn-know-more'
                defaultMessage={message || 'Read more'}
            /> */}
            <div className="icon">
                <Icon />
            </div>
        </button>
    );
};
