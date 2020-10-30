import * as express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    return res.send("Hello")
})


app.listen(3333, () => {
    console.log("Online!")
});
