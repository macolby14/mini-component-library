/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
  overflow: hidden;
`;

const FillWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Fill = styled.div`
  height: var(--height);
  background-color: ${COLORS.primary};
  width: ${props => props.value}%;
  border-radius: 4px 0 0 4px;
`;

const sizeStyles = {
  small: {'--height': '8px', '--padding': 0, '--radius': '4px'},
  medium: {'--height': '12px', '--padding': 0, '--radius': '4px'},
  large: {'--height': '24px', '--padding': '4px', '--radius': '8px'},
};

const ProgressBar = ({ value, size }) => {
  value = Math.max(Math.min(100,value),0);

  return <Wrapper role="progressbar" aria-valuemax="100" aria-valuemin="0" aria-valuenow={value} style={sizeStyles[size]}>
    <FillWrapper>
     <Fill value={value} />
    </FillWrapper>
    <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>;
};

export default ProgressBar;
