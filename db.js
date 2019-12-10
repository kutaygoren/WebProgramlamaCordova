const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors());

const popKahveler = require('./database/popKahveler')
const popEkipmanlar = require('./database/popEkipmanlar')
const setler = require('./database/setler')
const chemexUrunler = require('./database/chemexUrunler')
const bialettiUrunler = require('./database/bialettiUrunler')
const harioUrunler = require('./database/harioUrunler')
const kahhvesetler = require('./database/kahhvesetler')
const bialettiSetler = require('./database/bialettiSetler')
const aeropressSetler = require('./database/aeropressSetler')
const harioSetler = require('./database/harioSetler')
const bialettiKahveler = require('./database/bialettiKahveler')
const caffeVergnanoKahveler = require('./database/caffeVergnanoKahveler')
const caffeFrescoKahveler = require('./database/caffeFrescoKahveler')
const coffeeSapiensKahveler = require('./database/coffeeSapiensKahveler')
const kronotropKahveler = require('./database/kronotropKahveler')

app.get('/popKahveler', (req, res) => {
    res.json(popKahveler);
});

app.post('/popKahveler', function (req, res) {
    res.send('POST isteği geldi!')
})

app.get('/popEkipmanlar', (req, res) => {
    res.json(popEkipmanlar);
});

app.post('/popEkipmanlar', function (req, res) {
    res.send('POST isteği geldi!')
})

app.get('/setler', (req, res) => {
    res.json(setler);
});

app.post('/setler', function (req, res) {
    res.send('POST isteği geldi!')
})

app.get('/chemexUrunler', (req, res) => {
    res.json(chemexUrunler);
});

app.post('/chemexUrunler', function (req, res) {
    res.send('POST isteği geldi!')
})

app.get('/bialettiUrunler', (req, res) => {
    res.json(bialettiUrunler);
});

app.post('/bialettiUrunler', function (req, res) {
    res.send('POST isteği geldi!')
})

app.get('/harioUrunler', (req, res) => {
    res.json(harioUrunler);
});

app.post('/harioUrunler', function (req, res) {
    res.send('POST isteği geldi!')
})

app.get('/kahhvesetler', (req, res) => {
    res.json(kahhvesetler);
});

app.post('/kahhvesetler', function (req, res) {
    res.send('POST isteği geldi!')
})

app.get('/bialettiSetler', (req, res) => {
    res.json(bialettiSetler);
});

app.post('/bialettiSetler', function (req, res) {
    res.send('POST isteği geldi!')
})

app.get('/aeropressSetler', (req, res) => {
    res.json(aeropressSetler);
});

app.post('/aeropressSetler', function (req, res) {
    res.send('POST isteği geldi!')
})

app.get('/harioSetler', (req, res) => {
    res.json(harioSetler);
});

app.post('/harioSetler', function (req, res) {
    res.send('POST isteği geldi!')
})

app.get('/bialettiKahveler', (req, res) => {
    res.json(bialettiKahveler);
});

app.post('/bialettiKahveler', function (req, res) {
    res.send('POST isteği geldi!')
})

app.get('/caffeVergnanoKahveler', (req, res) => {
    res.json(caffeVergnanoKahveler);
});

app.post('/caffeVergnanoKahveler', function (req, res) {
    res.send('POST isteği geldi!')
})

app.get('/caffeFrescoKahveler', (req, res) => {
    res.json(caffeFrescoKahveler);
});

app.post('/caffeFrescoKahveler', function (req, res) {
    res.send('POST isteği geldi!')
})

app.get('/coffeeSapiensKahveler', (req, res) => {
    res.json(coffeeSapiensKahveler);
});

app.post('/coffeeSapiensKahveler', function (req, res) {
    res.send('POST isteği geldi!')
})

app.get('/kronotropKahveler', (req, res) => {
    res.json(kronotropKahveler);
});

app.post('/kronotropKahveler', function (req, res) {
    res.send('POST isteği geldi!')
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
});