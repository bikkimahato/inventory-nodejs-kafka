const envVariables = {
  // DB configurations
  DB_USER: process.env.DB_USER || "hlgbzxxujrenym",
  DB_PASSWORD: process.env.DB_PASSWORD || "83552fc8abc0ba837a1e8ee847fea6db9b62736e52620d31412c7e141b2f831c",
  DB_HOST: process.env.DB_HOST || "ec2-54-221-217-204.compute-1.amazonaws.com",
  DB_NAME: process.env.DB_NAME || "d9n70h10pcnrnq",
  DB_SSL: process.env.DB_SSL || true,
  DB_PORT: process.env.DB_PORT || 5432,
  DB_MAX_POOL_SIZE: process.env.DB_MAX_POOL_SIZE || "5",
  //server configurations
  SERVER_PORT: process.env.SERVER_PORT || "8080",
  PORT: 8080,
  BODY_LIMIT: "100kb",
  CROS_HEADERS: ["Link"],

  //kafka configurations
  KAFKA_BROKER_HOST: process.env.KAFKA_BROKER_HOST || "localhost:9092",
  KAFKA_TOPICS_ITEM_DETAILS:
    process.env.KAFKA_TOPICS_ITEM_DETAILS || "itemDetails",
};
export default envVariables;

