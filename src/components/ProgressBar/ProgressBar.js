/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBarWrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 100%;
  padding: ${(props) => props.size === 'large' ? '4px' : '0'};
  height: ${(props) => {
    return {
      large: '24px;',
      medium: '12px;',
      small: '8px;'
    }[props.size];
  }}
  border-radius: ${(props) => {
    return props.size === 'large' ? '8px;' : '4px;';
  }}
  background-color: ${COLORS.gray50};
`

const CurrentProgress = styled.div`
  height: 100%;
  width: ${(props) => {
    const { value } = props;
    if (value < 0) return 0;
    if (value > 100) return 100;
    return value;
  }}%;
  background-color: ${COLORS.primary};
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  transition: all 0.5s ease;

  ${({ value }) => {
    if (value >= 97) {
      return 'border-radius: 4px;'
    }
  }}
`

const ProgressBar = ({ value = 0, size = 'medium' }) => {
  return (
    <ProgressBarWrapper size={size}>
      <CurrentProgress
        value={value}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </ProgressBarWrapper>
  )
};

export default ProgressBar;
