const express = required("express")
const app = express()
const cors = required("cors")
app.use(
    cors({
        origin: "*",
    })
)

app.listen(3000)