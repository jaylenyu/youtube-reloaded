import express from "express";

const PORT = 5000;

const app = express();

const handleHome = (req, res) => {
    return res.send("1112");
};
const handleLogin = (req, res) => {
    return res.send("Login here.")
}

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);