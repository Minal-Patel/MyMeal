import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import MText from '../Text';
import StyleMButton from './style';

const MButton = ({
  children,
  label,
  props,
  labelStyle,
  lableView,
  viewStyle,

  handleButton,
  disable,
  inputbutton,
}) => {
  return (
    <TouchableOpacity
      style={[StyleMButton.buttonContainer, viewStyle]}
      disabled={disable}
      onPress={()=>handleButton(props)}>
      {label !== undefined && (
        <MText
          label={label}
          labelStyle={[StyleMButton.labelContainer, labelStyle]}
          viewStyle={[StyleMButton.viewLable, lableView]}
        />
      )}

      {children}
    </TouchableOpacity>
  );
};

export default MButton;
