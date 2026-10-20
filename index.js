const express = require('express')
const app = express();
const port = 5000;
const host = '::';
app.get('/', (req, res) => {
    res.send("hello world");
})

app.listen(port, host, () => {
    console.log(`server is listening to port:${port}`)
});