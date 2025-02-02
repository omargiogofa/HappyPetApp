import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native';
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginForm() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: () => {
            console.log("Formulario enviado...");
        },
    });


   return (
    <View>
        <Text style={styles.title}>Iniciar Sesion </Text>
        <TextInput 
            placeholder="Nombre de usuario"
            style={styles.imput}
            autoCapitalize="none"
            value={formik.values.username}
            onChangeText={(text) => formik.setFieldValue('username' ,text)}
            />
            
        <TextInput 
            placeholder="Contraseña"
            style={styles.imput}
            autoCapitalize="none"
            secureTextEntry={true}
            value={formik.values.password}
            onChangeText={(text) => formik.setFieldValue('password', text)}
            />

            <Button title="Entrar" onPress={formik.handleSubmit}/>
            <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>
   
    </View>
   );

   function initialValues() {
    
    return{
        username: "",
        password: ""
    }

   }

   function validationSchema() {
    return {
        username: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required("La contraseña es oblogatoria"),
    };
   }
}


const styles = StyleSheet.create ({
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15,
    },


    imput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10 
    },

    error: {
        textAlign:"center",
        color: "#f00",
        marginTop: 20,
    }
})