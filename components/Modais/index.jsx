import React from 'react';
import { Modal, View, Pressable, Text } from 'react-native';
import { enemstyle } from '../../screens/pgENEM/style';

const CustomModal = ({ visible, onClose, children }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={enemstyle.centeredView}>
        <View style={enemstyle.modalView}>
          {children}
          <Pressable
            style={[enemstyle.button, enemstyle.buttonClose]}
            onPress={onClose}>
            <Text style={enemstyle.textStyle1}>Voltar a pagina anterior</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
  
};

export default CustomModal;