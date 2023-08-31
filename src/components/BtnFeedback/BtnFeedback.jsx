import React from 'react';
import { StyledButton } from './BtnFeedback.styled';
import PropTypes from 'prop-types';

export const BtnFeedback = ({
  type = 'button',
  value,
  addFeedback,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={() => addFeedback(value)}>      
      {value}
    </StyledButton>
  );
};

BtnFeedback.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  addFeedback: PropTypes.func.isRequired,
};