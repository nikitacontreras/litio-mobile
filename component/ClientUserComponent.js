import { View, Text, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../utils/styles";

const ClientUserComponent = ({ item }) => {
    const navigation = useNavigation();

    //👇🏻 Retrieves the last message in the array from the item prop
    useLayoutEffect(() => {
    }, []);

    ///👇🏻 Navigates to the Messaging screen
    const handleNavigation = () => {
        navigation.navigate("Lobby", {
            id: item.id,
            address: item.address,
            name: item.name,
        });
    };

    return (
        <View style={styles.crightContainer}>
            <View>
                <Text style={styles.cusername}>{item.hostname}</Text>

                <Text style={styles.cmessage}>
                    {item.address}
                </Text>
            </View>
            <View>
                <Text style={styles.ctime}>
                    {item.os}
                </Text>
            </View>
        </View>
    );
};

export default ClientComponent;