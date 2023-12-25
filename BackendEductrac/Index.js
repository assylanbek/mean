const express=require("express")
const cors=require("cors")
const { Connection } = require("./db")
const { instructorRoutes } = require("./Routes/instructor.routes")
const { ChatRoutes } = require("./Routes/chatbot.routes")
const { Courserouter } = require("./Routes/course.routes")
const { Asignmentrouter } = require("./Routes/assignment.routes")
const { Announcementrouter } = require("./Routes/announcement.routes")
const { studentRoutes } = require("./Routes/student.routes")
const { auth } = require("./Middleware/Authmiddleware")

const app=express()
app.use(cors())
app.use(express.json())
require("dotenv").config()
// app.use(auth)
app.use("/instructors",instructorRoutes)
app.use("/students",studentRoutes)

// app.use('/chatbot', ChatRoutes)
app.use("/course",Courserouter)
app.use("/assignment",Asignmentrouter)
app.use("/announcement",Announcementrouter)


app.listen(5050,async()=>{
    console.log("server is runing on port 5050")
    try {
        await Connection
        console.log("server is connected to db")
    } catch (error) {
        console.log('server is not connected')
    }
})

module.export=app