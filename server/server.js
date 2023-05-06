import connectDB from "./db/connect.js";

const startServer = async (app, port, mongoURI) => {
  try {
    connectDB(mongoURI);
    app.listen(port, () => {
      console.log(`Server has started on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

export default startServer;
