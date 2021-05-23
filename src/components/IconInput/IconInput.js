import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const StyledInput = styled.input`
  height: var(--height);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  font-size: var(--text-size);
  font-weight: 700;
  width: ${props=>props.width}px;
  outline-offset: 2px;
  color: inherit;

  &::placeholder{
    font-weight: 400;
    color: ${COLORS.gray500};
  }

`;


const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover{
    color:${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: var(--icon-size);
  margin: auto 0;
  left: 0;
  color: inherit;
`;

const sizeStyles = {
  small: {
    '--text-size': `${14/16}rem`,
    '--border-thickness': '1px',
    '--icon-size': '16px',
    '--height': ` ${24 / 16}rem`

  },
  large: {
    '--text-size': `${18/16}rem`,
    '--border-thickness': '2px',
    '--icon-size': '24px',
    '--height': ` ${36 / 16}rem`
  },
}

const iconSize = {
  small: '16',
  large: '24'
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  return (
  <Wrapper style={sizeStyles[size]} >
    <VisuallyHidden>{label}</VisuallyHidden>
   <StyledInput name={label} width={width} {...delegated} />
   <IconWrapper>
     <Icon id={icon} size={iconSize[size]}/>
   </IconWrapper>
  </Wrapper>
);
};

export default IconInput;
