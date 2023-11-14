import React, {Modal, View, Text, StyleSheet, Pressable} from 'react-native';
import {Button} from '../Button';
interface ModalProps {
  description: string;
  primaryButtonTitle: string;
  onPrimaryPress: () => void;
  secondaryButtonTitle: string;
  onSecondaryPress: () => void;
  isVisible: boolean;
  closeModal: () => void;
  isLoading: boolean;
}

export const CustomModal = ({
  description,
  primaryButtonTitle,
  onPrimaryPress,
  secondaryButtonTitle,
  onSecondaryPress,
  isVisible,
  closeModal,
  isLoading,
}: ModalProps) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{alignItems: 'flex-end'}}>
            <Pressable onPress={closeModal} style={{padding: 10}}>
              <Text style={{color: 'black'}}>X</Text>
            </Pressable>
          </View>
          <Text style={styles.modalText}>{description}</Text>
          <Button
            title={primaryButtonTitle}
            onPress={onPrimaryPress}
            loading={isLoading}
            disabled={isLoading}
          />
          <Button
            title={secondaryButtonTitle}
            onPress={onSecondaryPress}
            variant="secondary"
            loading={isLoading}
            disabled={isLoading}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 32,
    paddingVertical: 16,
    gap: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
