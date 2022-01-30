const express = require('express');
const cluster = require("cluster");

const app = express();
if (cluster.isMaster) {

   cluster.fork();
} else {
   function doWork(duration) {
      const start = Date.now();
      while ((Date.now() - start) < duration) {

      }
      console.log("Done")
   }


   app.get("/", (req, res) => {
      doWork(5000);
      res.send("Passed.");
   });
}
 

app.listen(3000);