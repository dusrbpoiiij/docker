const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json([
    {
        name: 'yeonkyu',
        email: 'yeonkyu@naver.com'
    },
    {
        name : 'Alice',
        email : 'alice@gamail.com'
    },
    {
        name : 'Jake',
        email : 'jake@gamail.com'
    },
    {
        name : 'Maria',
        email : 'maria@gamail.com'
    }
])   
});

app.listen(port, () => console.log(`Example app listening op port ${port}`));