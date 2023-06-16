import React, { useLayoutEffect, useEffect, useState } from "react";
import { View, Text, Pressable, SafeAreaView, FlatList } from "react-native";

import { Feather } from "@expo/vector-icons";

import ChatComponent from "../component/ClientComponent.js";
import { styles } from "../utils/styles.js";
import LanPortScanner, { LSConfig } from 'react-native-lan-port-scanner';

const Runes = () => {
    const [isBusy, setBusy] = useState(true)
    const [rooms = [], setRooms] = useState([]);
    useLayoutEffect(() => { 
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
                })
                .catch(error => {
                    console.error(error);
                });
        };
        getClientInfo("192.168.1.4")
    }, [])

    return (
        <SafeAreaView style={styles.chatscreen}>
            <View style={styles.chattopContainer}>
                <View style={styles.chatheader}>
                    <Text style={styles.chatheading}>Clientes</Text>

                    <Pressable>
                        <Feather name='edit' size={24} color='green' />
                    </Pressable>
                </View>
            </View>

            <View style={styles.chatlistContainer}>
                {rooms.length > 0 ? (
                    <FlatList
                        data={rooms}
                        renderItem={({ item }) => <ChatComponent item={item} />}

                    />
                ) : (
                    <View style={styles.chatemptyContainer}>
                        <Text style={styles.chatemptyText}>No se han encontrado conexiones</Text>
                        <Text>Asegúrese de estar corriendo Litio en su máquina</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

export default Runes;