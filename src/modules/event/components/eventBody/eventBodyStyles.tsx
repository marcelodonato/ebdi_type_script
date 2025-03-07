import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 6,
    },
    searchFilter: {
        height: 50,
    },
    filterContainer: {
        height: 50,
        marginVertical: 16,
    },
    listContainer: {
        flexGrow: 1, 
        paddingBottom: 20, 
    },
    columnWrapper: {
        justifyContent: "space-between",
        alignItems: "stretch", 
        marginBottom: 10, 
    },
});

export default styles;