var kafka = require("kafka-node");
import envVariables from "../envVariables";

const Producer = kafka.Producer;
let client;

client = new kafka.KafkaClient({ kafkaHost: envVariables.KAFKA_BROKER_HOST });

const producer = new Producer(client);

producer.on("ready", function () {
    console.log("Producer is ready");
});

producer.on("error", function (err) {
    console.log("Producer is in error state");
    console.log(err);
});

export default producer;










// var express = require('express');
// var kafka = require('kafka-node');
// var app = express();

// var bodyParser = require('body-parser')
// app.use(bodyParser.json());       // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//     extended: true
// }));

// var Producer = kafka.Producer,
//     client = new kafka.KafkaClient(),
//     producer = new Producer(client);

// producer.on('ready', function () {
//     console.log('Producer is ready');
// });

// producer.on('error', function (err) {
//     console.log('Producer is in error state');
//     console.log(err);
// })


// app.get('/', function (req, res) {
//     res.json({ greeting: 'Kafka Producer' })
// });

// app.post('/itemDetails', function (req, res) {

//     const formatedMessage = JSON.stringify(req.body.message)

//     payloads = [
//         { topic: req.body.topic, messages: formatedMessage, partition: 0 }
//     ];
//     producer.send(payloads, function (err, data) {
//         res.json(data);
//     });

// })

// app.listen(5001, function () {
//     console.log('Kafka producer running at 5001')
// })