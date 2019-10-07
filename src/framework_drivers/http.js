import express from "express"
import bodyParser from "body-parser"

const http = express()

http.use(bodyParser.json())
http.use(bodyParser.urlencoded({
  extended: true,
}))

export default http