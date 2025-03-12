import { useState } from "react";
import { Alert, Platform, ActionSheetIOS } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { strings } from "../../res/strings/strings";


const useEditPhoto = () => {

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

        return {
            showOptions,
            imageUri
        }

}

export default useEditPhoto;