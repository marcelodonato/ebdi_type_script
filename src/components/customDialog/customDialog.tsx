import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styles from "./customDialogStyles";

interface CustomDialogProps {
    title: string;
    textBody: string;
    textConfirm: string;
    textDeny: string;
    onConfirm: () => void;
    onClose: () => void;
    visible: boolean;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
    title,
    textBody,
    textConfirm,
    textDeny,
    onClose,
    onConfirm,
    visible
}) => {
    return (
        <Modal isVisible={visible} onBackdropPress={onClose}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.bodyText}>{textBody}</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={onClose} style={[styles.button, styles.buttonCancel]}>
                        <Text style={styles.buttonTextCancel}>{textDeny}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onConfirm} style={[styles.button, styles.buttonConfirm]}>
                        <Text style={styles.buttonTextConfirm}>{textConfirm}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default CustomDialog;