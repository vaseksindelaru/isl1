import {conectardb} from "../../../utills/dbConnect"
conectardb()

export default function handler(req, res) {
    res.status(200).json("torneos ")
  }