import { View, Image, TouchableOpacity, } from "react-native";
import styles from "./editPhotoStyles";
import useEditPhoto from "./editPhotoHooks";


const EditPhoto: React.FC = () => {

    const {
        showOptions,
        imageUri
    } = useEditPhoto();
   
    return (
        <TouchableOpacity onPress={showOptions} activeOpacity={0.7}>
            <View style={styles.container}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />
                ) : (
                    <Image source={require("../../../assets/placeholder_image.png")} style={styles.image} />
                )}
            </View>
        </TouchableOpacity>
    );
};

export default EditPhoto;
