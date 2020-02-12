import envVariables from "../envVariables";
import db from '../db';
import { ConsumerGroup } from "kafka-node";
var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient({ kafkaHost: envVariables.KAFKA_BROKER_HOST }),
    consumer = new ConsumerGroup(
        {
            groupId: 'item-id',
            autoCommit: true,
            fromOffset: "latest",
            outOfRangeOffset: "latest"
        },
        ['itemDetails']

    )
// consumer = new Consumer(client,
//     [{ topic: 'itemDetails', offset: 0 }],
//     {
//         groupId: 'item-id',
//         autoCommit: true,
//         fromOffset: false,
//         outOfRangeOffset: "latest"
//     }
// );


consumer.on('message', (message) => {

    console.log(message)


    // if (message.offset === (message.highWaterOffset - 1)) {
    //     console.log(message, 'Line 14')
    //     const { item_id, label, area, capacity, rate, image_name } = JSON.parse(message.value);
    //     // console.log(item_id, label, area, capacity, rate, image_name);
    //     console.log(typeof message, 'wht');

    //     if (message.value) {
    //         // const { res } = JSON.parse(message.value)
    //         console.log(message.value.res, "bye");

    //         db.query(`INSERT INTO item_details (label, area, capacity, rate, image_name,item_id) VALUES ('${label}',${area},${capacity},${rate},'${image_name}',${item_id})`, (err, response) => {
    //             if (err) {
    //                 console.log(err.stack)
    //             } else {
    //                 console.log(response.rows)
    //                 res.json({ status: 'Successful' })
    //             }
    //         })
    //     }



    // }

})

consumer.on('error', (err) => {
    console.log('Error:', err)
})

consumer.on('offsetOutOfRange', (err) => {
    console.log('offsetOutOfRange:', err)
})

export default consumer;