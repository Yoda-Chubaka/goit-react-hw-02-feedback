import React from 'react';
import { StyledButton } from './BtnFeedback.styled';
import PropTypes from 'prop-types';

export const BtnFeedback = ({
  type = 'button',
  children,
  onClick,
}) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

BtnFeedback.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};