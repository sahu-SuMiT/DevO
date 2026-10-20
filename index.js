const express = require('express')
const app = express();
const port = 5000;
const host = '::';
app.get('/', (req, res) => {
    res.send("hello world");
})
app.get('/dom1', (req, res) => {
    res.send("hello world frm dom1");
})
app.get('/dom2', (req, res) => {
    res.send("hello world frm dom2");
})
app.get('/dom3', (req, res) => {
    res.send("hello world frm dom3");
})

app.listen(port, host, () => {
    console.log(`server is listening to port:${port}`)
});
