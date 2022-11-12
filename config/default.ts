export default {
  port: 4000,
  host: "localhost",
  dbUri: `mongodb+srv://${process.env.DB_AUTHOR}:${process.env.DB_PASS}@cluster0.mt97uac.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  saltWorkFactor: 10,
};
