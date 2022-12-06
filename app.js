const express = require("express"); // Requiero el framework
const app = express(); // Acá lo ejecuto
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/babbage", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/babbage.html"));
});

app.get("/berners-lee", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/berners-lee.html"));
});

app.get("/clarke", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/clarke.html"));
});

app.get("/hamilton", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/hamilton.html"));
});

app.get("/hopper", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/hopper.html"));
});

app.get("/lovelace", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/lovelace.html"));
});

app.get("/turing", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/turing.html"));
});

app.listen(3030, () => console.log("El servidor está escuchando"));

/*
● / -> Debe direccionar al recurso index.html.
● /babbage -> Debe direccionar al recurso babbage.html
● /berners-lee -> Debe direccionar al recurso berners-lee.html.
● /clarke -> Debe direccionar al recurso clarke.html.
● /hamilton -> Debe direccionar al recurso hamilton.html.
● /hopper -> Debe direccionar al recurso hopper.html.
● /lovelace -> Debe direccionar al recurso lovelace.html.
● /turing-> Debe direccionar al recurso turing.html.
 */