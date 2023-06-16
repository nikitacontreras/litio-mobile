import React, { useLayoutEffect, useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import { styles } from "../utils/styles";

const Lobby = ({ route, navigation }) => {
    const [properties, setProperties] = useState([]);

    //👇🏻 Sets the header title to the name chatroom's name
    useLayoutEffect(() => { 
        navigation.setOptions({ title: navigation.address });
        const getClientInfo = (client_ip) => {
            fetch(`http://${client_ip}:8080/api/info/client`)
                .then(response => response.json())
                .then(json => {
                    setBusy(false);
                    setRooms([{
                        id: 0,
                        hostname: json.hostname,
                        os: json.os,
                        address: `${client_ip}:${json.port}`
                    }])
                    console.log(Object.keys(rooms).length, rooms, json)
                })
                .catch(error => {
                    console.error(error);
                });
        };
        getClientInfo("192.168.1.4")
    }, [])

    /*👇🏻 
        This function gets the time the user sends a message, then 
        logs the username, message, and the timestamp to the console.
     */


    return (
        <View style={styles.messagingscreen}>
            <View
                style={[
                    styles.messagingscreen,
                    { paddingVertical: 15, paddingHorizontal: 10 },
                ]}
            >
                <FlatList
                    data={chatMessages}
                    renderItem={({ item }) => (
                        <MessageComponent item={item} user={user} />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
};

export default Lobby;