var express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
var config = require('./config/config');

var app = express();

const client = new MongoClient(config.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Get Latest 5 Registrations
app.route('/registrations/latest-five').get(async function(req, res) {
  await client.connect();
  const collection = client.db("Lab2").collection("registrations");
  const allRegistrations = await collection.aggregate([
    {
      $lookup: {
        from: 'students',
        localField: "student_id",
        foreignField: "id",
        as: "students"
      }
    },
    {
      $lookup: {
        from: 'courses',
        localField: "course_code",
        foreignField: "code",
        as: "courses"
      }
    },
    { $sort: { unix_timestamp: -1 } },
    { $limit: 5 }
  ]).toArray();
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1337');
  res.send(allRegistrations);

  client.close();
});

var server = app.listen(config.PORT, () => {
  console.log(`Lab2 Server listening on port ${config.PORT}`);
});
