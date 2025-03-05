import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../res/colors/colors";
import Modal from "react-native-modal";

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

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "90%", 
        alignSelf: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.black,
        marginBottom: 10,
        textAlign: "center",
    },
    bodyText: {
        fontSize: 16,
        color: colors.darkGray,
        textAlign: "center",
        marginBottom: 20,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 10,
    },
    button: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
    },
    buttonCancel: {
        backgroundColor: colors.red,
    },
    buttonConfirm: {
        backgroundColor: colors.darkBlue,
    },
    buttonTextCancel: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.light,
    },
    buttonTextConfirm: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.light,
    },
});
