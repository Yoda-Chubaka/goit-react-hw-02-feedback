import React from 'react';
import { StyledButton } from './BtnFeedback.styled';
import PropTypes from 'prop-types';

export const BtnFeedback = ({
  type = 'button',
  value,
  onClick,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}>      
      {value}
    </StyledButton>
  );
};

BtnFeedback.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};