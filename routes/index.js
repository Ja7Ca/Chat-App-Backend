var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    // res.render('index', { title: 'Express' });
    res.send(
        `<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.8.1/socket.io.js" integrity="sha512-8BHxHDLsOHx+flIrQ0DrZcea7MkHqRU5GbTHmbdzMRnAaoCIkZ97PqZcXJkKZckMMhqfoeaJE+DNUVuyoQsO3Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
         <script>
          const socket = io()
          socket.on("message", (mess) => {
            document.body.innerHTML += "<div><p>Chat From : "+mess.from+"</p><h4>"+mess.message+"</h4></div>"
            })
         </script>
        `
    );
});

module.exports = router;
