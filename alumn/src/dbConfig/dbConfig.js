import mongoose from "mongoose";

let isConnected = false;

export async function connect() {
  try {
    if (!isConnected) {
      await mongoose.connect(process.env.MONGO_URI);
      isConnected = true;

      mongoose.connection.on("connected", () => {
        console.log("Mongodb connected successfully");
      });

      mongoose.connection.on("error", (err) => {
        console.log(
          "Mongodb connection error. Please make sure MongoDB is running " + err
        );
        process.exit();
      });
    }
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
}

