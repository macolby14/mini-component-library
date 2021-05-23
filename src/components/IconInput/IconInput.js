import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid ${COLORS.black};
  padding-left: 32px;
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


const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};

  ${StyledInput}:hover{
    color:${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  color: inherit;
`;

const sizeStyles = {
  small: {'--text-size': `${14/16}rem`},
  large: {'--text-size': `${18/16}rem`},
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
  <Wrapper>
    <VisuallyHidden><label for={label}>{label}</label></VisuallyHidden>
   <StyledInput style={sizeStyles[size]} name={label} width={width} placeholder={placeholder} />
   <IconWrapper>
     <Icon id={icon} size={16}/>
   </IconWrapper>
  </Wrapper>
);
};

export default IconInput;
