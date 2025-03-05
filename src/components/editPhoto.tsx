import { useState } from "react";
import { 
    View, 
    StyleSheet, 
    Alert, 
    Image, 
    TouchableOpacity, 
    Platform, 
    ActionSheetIOS 
} from "react-native";
import * as ImagePicker from 'expo-image-picker';

const EditPhoto: React.FC = () => {
    const [imageUri, setImageUri] = useState<string | null>(null);

    const requestPermissions = async () => {
        const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
        const { status: galleryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (cameraStatus !== 'granted' || galleryStatus !== 'granted') {
            Alert.alert('Permissão Negada', 'É necessário conceder acesso à câmera e à galeria.');
            return false;
        }
        return true;
    };

    const openCamera = async () => {
        const hasPermission = await requestPermissions();
        if (!hasPermission) return;

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    const openGallery = async () => {
        const hasPermission = await requestPermissions();
        if (!hasPermission) return;

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    const showOptions = () => {
        if (Platform.OS === "ios") {
            ActionSheetIOS.showActionSheetWithOptions(
                {
                    options: ["Cancelar", "Tirar Foto", "Escolher da Galeria"],
                    cancelButtonIndex: 0,
                },
                (buttonIndex) => {
                    if (buttonIndex === 1) openCamera();
                    else if (buttonIndex === 2) openGallery();
                }
            );
        } else {
            Alert.alert("Selecionar Imagem", "Escolha uma opção:", [
                { text: "Cancelar", style: "cancel" },
                { text: "Tirar Foto", onPress: openCamera },
                { text: "Escolher da Galeria", onPress: openGallery },
            ]);
        }
    };

    return (
        <TouchableOpacity onPress={showOptions} activeOpacity={0.7}>
            <View style={styles.container}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />
                ) : (
                    <Image source={require("../../assets/placeholder_image.png")} style={styles.image} />
                )}
            </View>
        </TouchableOpacity>
    );
};

export default EditPhoto;

const styles = StyleSheet.create({
    container: {
        width: 110,
        height: 110,
        borderRadius: 100,
        backgroundColor: "#f0f0f0",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden", 
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100, 
    },
});

