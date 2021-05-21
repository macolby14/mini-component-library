/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  padding: var(--padding);
`;


const Fill = styled.div`
  background-color: ${COLORS.primary};
  width: ${props => props.value}%;
  height: 100%;
  border-radius: ${({value}) => {
    const interpolate = 4*Math.max((value-99),0); 
    return `4px ${interpolate}px ${interpolate}px 4px`; 
  }};
`;

const sizeStyles = {
  small: {'--height': '8px', '--padding': 0},
  medium: {'--height': '12px', '--padding': 0},
  large: {'--height': '24px', '--padding': '4px'},
};

const ProgressBar = ({ value, size }) => {
  value = Math.max(Math.min(100,value),0);

  return <Wrapper role="progressbar" aria-valuemax="100" aria-valuemin="0" aria-valuenow={value} style={sizeStyles[size]}>
    <Fill value={value} />
    <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>;
};

export default ProgressBar;
