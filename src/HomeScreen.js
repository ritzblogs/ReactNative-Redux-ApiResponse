import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, FlatList, SafeAreaView } from 'react-native';
import apiCall from "../redux/ActionCreator";

import { useDispatch, useSelector } from "react-redux";
import CardView from 'react-native-cardview'

import production from '../domain/production';


const HomeSCreen = () => {

    const [isLoaded, setLoaded] = useState(false)

    const [usersList, setUsers] = useState([])


    const dispatch = useDispatch();

    const responseList = useSelector(state => {
        return state.apiReducer.data.data
    })


    function loadAPI() {
        dispatch(apiCall(production.fetchUsers))
    }


    useEffect(() => {
        if (!isLoaded) {
            loadAPI();
            setLoaded(true)
        }

    },
        []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.backgroundImage}>
                <StatusBar backgroundColor="#337AB7"
                />

                <View style={styles.headerView}>

                    <Text style={{ color: "white", fontSize: 14 }}>Users List</Text>

                </View>
                <FlatList style={{
                    backgroundColor: '#F0F5F9',
                    width: "100%",
                }}
                    data={responseList}
                    renderItem={
                        ({ item }) => (

                            <CardView
                                cardElevation={3}
                                cardMaxElevation={3}
                                cornerRadius={3}

                                style={{
                                    alignSelf: "center", padding: 10, width: "95%", alignSelf: "center",
                                    margin: 5,
                                    backgroundColor: '#ffffff',

                                }}
                            >

                                <View style={{
                                    width: "100%", flexDirection: 'row', margin: 5
                                }}>

                                    <View style={styles.rowContainer}>


                                        <Text
                                            style={styles.titleView}>Name:</Text>
                                        <Text style={styles.valueView}>{item.first_name + " " + item.last_name}</Text>
                                    </View>
                                </View>
                            </CardView>
                        )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

        </SafeAreaView>
    );
}
export default HomeSCreen;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },


    backgroundImage: {
        width: "100%",
        flex: 1,
        resizeMode: "contain",
        flexDirection: "column",
        backgroundColor: "#F0F5F9", padding: 5,
        justifyContent: "center"
    },
    rowContainer: {
        width: "90%", flexDirection: 'row',
    },
    headerView: {
        backgroundColor: "#337AB7", padding: 10, marginTop: "8%"
    },
    titleView: {
        textAlign: "left", marginLeft: 10, marginRight: 5, fontWeight: "bold", fontSize: 12, color: "#337AB7", alignSelf: "center"
    },
    valueView: {
        marginLeft: 10, marginRight: 10, fontSize: 12, paddingRight: 10, color: "grey", alignSelf: "flex-start", alignSelf: "center"
    },

});




