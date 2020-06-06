// const express = require("express");
// const mongoose = require("mongoose");

// const PORT = process.env.PORT || 3000;

// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// // routes
// app.use(require("./public/api.js"));

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });

// Dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Setting up Express App
const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// db mongo
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

// Creating Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes.js")(app);

// Starts the server to begin listening
app.listen(PORT, function(){
    console.log(`App listening on Port ${PORT}!`);
});
