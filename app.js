const express = require('express')
const cors = require('cors')

const app = express()
const appname = process.env.APP_NAME

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":`${appname}`
    },
    {
      "id":"2",
      "title":` ${appname} Game Review: Pokemon Brillian Diamond`
    },
    {
      "id":"3",
      "title":"Show Review: Alice in Borderland"
    }
  ])
})

app.listen(3000, () => {
  console.log(`APP Name ${appname} is listening for requests on port 3000`)
})