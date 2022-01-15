import React from 'react';
import { CardWrapper } from './card.styles'

const Card: React.FC = ({ children }) => {

    return (
        <CardWrapper>
            {children}
        </CardWrapper>
    )
}

export default Card