

const app = require("express")();
const cors = require("cors")

app.use(cors())
// app.get("/", (req, res) => res.send("hello!"));

app.get("/progress", (req,res) => {
    console.log("hi")

    res.setHeader("Content-Type", "text/event-stream");
    let p=0;
    const id = setInterval(()=>{
        p+=10
        res.write('data: {"progress":'+p+'}\n\n');
        if(p>=100){
            clearInterval(id)
            res.status(204)

            return
        }
    },1000)

})
const port = process.env.PORT || 8888;


app.listen(port)
console.log(`Listening on ${port}`)









