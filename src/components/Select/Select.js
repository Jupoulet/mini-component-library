import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import arrow from './arrow.png';

const CustomSelect = styled.select`
  position: relative;
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 4px;
  color: ${COLORS.gray700};
  padding: 12px 52px 12px 16px;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: 12px;
  background-position: right 1rem center;

  &:hover {
    color: black;
  }
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <CustomSelect value={value} onChange={onChange}>
      {children}
    </CustomSelect>
  );
};

export default Select;
