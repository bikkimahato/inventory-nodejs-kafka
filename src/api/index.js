import { Router } from "express";
import producer from "../kafka/producer";
import consumer from '../kafka/consumer';
import envVariables from "../envVariables";

const asyncHandler = require("express-async-handler");

export default ({ config, db }) => {
  let api = Router();


  api.post(
    "/createItemDetails",
    asyncHandler(async ({ body }, res, next) => {
      let response = await createApiResponse({ body }, res, next);

      res.json(response);
    })
  );
  return api;
};


export const createApiResponse = async ({ body }, res, next) => {
  let payloads = [];

  payloads.push({
    topic: envVariables.KAFKA_TOPICS_ITEM_DETAILS,
    messages: JSON.stringify(body.message),
  });
  return new Promise((resolve, reject) => {

    producer.send(payloads, function (err, data) {
      if (err) {
        reject(err);
        console.log(err);
      }
      resolve(data);

    });
  }).then(result => {
    return { result: result, status: 200 }
  })
    .catch(err => {
      return { err: err, status: 400 }
    })


};