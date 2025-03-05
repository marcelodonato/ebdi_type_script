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
import { colors } from "../res/colors/colors";
import { strings } from "../res/strings/strings";


const EditPhoto: React.FC = () => {
    const [imageUri, setImageUri] = useState<string | null>(null);

    const requestPermissions = async () => {
        const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
        const { status: galleryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (cameraStatus !== 'granted' || galleryStatus !== 'granted') {
            Alert.alert(strings.permissionPopupDeny, strings.permissionInfo);
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
                    options: [strings.cancel, strings.popupEditPhotoCamera, strings.popupEditPhotoGallery],
                    cancelButtonIndex: 0,
                },
                (buttonIndex) => {
                    if (buttonIndex === 1) openCamera();
                    else if (buttonIndex === 2) openGallery();
                }
            );
        } else {
            Alert.alert(strings.popupEditPhotoTitle, strings.popupEditPhotoSubTitle, [
                { text: strings.cancel, style: "cancel" },
                { text: strings.popupEditPhotoCamera, onPress: openCamera },
                { text: strings.popupEditPhotoGallery, onPress: openGallery },
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
        backgroundColor: colors.whiteSmoke,
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

