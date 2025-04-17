import React, { ReactNode } from 'react';
import "./styles.css"

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {

  return (
    <div className='user-card'>
      {children}
    </div>
  );
}

export default Card;