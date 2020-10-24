const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        name: 'yeonkyu',
        email: 'yeonkyu@naver.com'
    })   
});

app.listen(port, () => console.log(`Example app listening op port ${port}`));