// const express = require('express');
import express from 'express';
const app = express();




app.get('*', (req, res) => {
    res.send("You are on right path!")
})

app.listen(3000, () => {
    console.log("Listening on!")
})