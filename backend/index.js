import app from "./src/app.js"
import dotenv from "dotenv";
dotenv.config({ path: "./.env" })
console.log("Project Started")
import connectDB from "./src/db/db.js"

connectDB()
.then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is ready at ${process.env.PORT}`);
        })
        app.on("error", (error) => {
            console.error("ERROR:", error)
            throw error
        })
    })
    .catch((error) => {
        console.log("Mongo_DB connection failed", error);
    })

app.get('/api/v1', (req, res) => {
    res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>API Workflow</title>

      <style>
          body{
              margin:0;
              font-family: Arial, Helvetica, sans-serif;
              background: linear-gradient(135deg,#4f46e5,#9333ea);
              color:white;
              display:flex;
              align-items:center;
              justify-content:center;
              height:100vh;
          }
          .container{
              background: rgba(255,255,255,0.1);
              backdrop-filter: blur(10px);
              padding:40px;
              border-radius:16px;
              text-align:center;
              box-shadow:0 10px 25px rgba(0,0,0,0.3);
              max-width:600px;
          }
          h1{
              margin-bottom:10px;
              font-size:2.5rem;
          }
          p{
              opacity:.9;
              margin-bottom:20px;
          }
          .badge{
              display:inline-block;
              padding:8px 16px;
              border-radius:999px;
              background:#22c55e;
              font-weight:bold;
              font-size:.9rem;
          }
          footer{
              margin-top:25px;
              font-size:.8rem;
              opacity:.7;
          }
      </style>
  </head>

  <body>
      <div class="container">
          <h1>🚀 API Running Successfully</h1>
          <p>Your backend server is active and responding correctly.</p>

          <div class="badge">Status: Online</div>

          <footer>
              <p>Version: v1 • Node Server</p>
          </footer>
      </div>
  </body>
  </html>
  `)
})


