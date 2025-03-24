import { StyleSheet, View, ImageBackground, Text, SafeAreaView, Image } from "react-native";
import { colors } from "../../../res/colors/colors";
import { RootState } from "../../../store/store";
import { fetchUserData } from "../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { AppDispatch } from "../../../store/store";

const ProfileHeader: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const userUid = useSelector((state: RootState) => state.auth.user?.uid)
    const { userData, loading, error } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (userUid) {
            dispatch(fetchUserData(userUid))
        }
    }, [userUid, dispatch])

    console.log(userData)

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.imageBackground}
                source={require('../../../../assets/background-image.png')}
                resizeMode='cover'
            >
                <View style={styles.cardContainer}>
                    <View style={styles.containerPosition}>
                        <View style={styles.imageCOntainer}>
                            <Image style={styles.image} source={require('../../../../assets/photoTest.png')} />

                        </View>
                        <View style={styles.containerTexts}>
                            <Text style={styles.textName}>{userData?.name}</Text>
                            <Text style={styles.textSubTitle}>{userData?.position}</Text>
                            <Text style={styles.textSubTitle}>{userData?.company}</Text>
                            <Text style={styles.textDisc} numberOfLines={2}>{userData?.disc} </Text>
                        </View>
                    </View>

                </View>
            </ImageBackground>
        </View>
    );
};

export default ProfileHeader;

const styles = StyleSheet.create({
    imageBackground: {
        justifyContent: 'flex-end',
        flex: 1,
    },
    container: {
        width: '100%',
        height: 300,
        backgroundColor: colors.black,
    },
    cardContainer: {
        paddingHorizontal: 16,
        width: '100%',
        height: '60%',
        alignItems: 'center',
        backgroundColor: colors.light,
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
    },
    imageCOntainer: {
        width: 120,
        height: 120,
        backgroundColor: colors.light,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderRadius: '100%'
    },
    image: {
        width: 117,
        height: 117,
        borderRadius: 100,
    },
    containerPosition: {
        bottom: 65,
        alignItems: 'center',
        paddingHorizontal: 16
    },
    containerTexts: {
        alignItems: 'center'
    },
    textName: {
        fontSize: 26,
        fontWeight: 'bold',

    },
    textSubTitle: {
        marginTop: 6,
        fontSize: 14
    },
    textDisc: {
        marginTop: 8,
        fontSize: 12,
        overflow: 'hidden'
    }
});
