import React, { useState } from "react";
import {
    Text,
    SafeAreaView,
    View,
    TextInput,
    Pressable,
    Alert,
} from "react-native";

//👇🏻 Import the app styles
import { styles } from "../utils/styles";

const Scan = ({ navigation }) => {
    
    return (
        <SafeAreaView style={styles.loginscreen}>
            <View style={styles.loginscreen}>
                <Text style={styles.loginheading}>Sign in</Text>
                <View style={styles.logininputContainer}>
                    <TextInput
                        autoCorrect={false}
                        placeholder='Enter your username'
                        style={styles.logininput}
                    />
                </View>

                <Pressable style={styles.loginbutton}>
                    <View>
                        <Text style={styles.loginbuttonText}>Get Started</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default Scan;