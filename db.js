const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Riju5838:12345@cluster0.btlysjx.mongodb.net/Foodyme?retryWrites=true&w=majority&appName=Cluster0';

module.exports = async function () {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected to MongoDB");

        const foodCollection = mongoose.connection.db.collection("food_items");
        const data = await foodCollection.find({}).toArray();

        const categoryCollection = mongoose.connection.db.collection("foodCategory");
        const catData = await categoryCollection.find({}).toArray();

        return { data, catData };
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        throw err;
    }
};
