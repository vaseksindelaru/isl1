import {conectardb} from "utills/dbConnect"
import Task from "../../../models/task"
conectardb()

export default async function handler(req, res) {
    console.log(req.method,req.url)

    const{method,body} = req
    switch (method) {
    case "GET":
        const  tasks = await Task.find();
        return res.status(200).json(tasks);
      
    case "POST":
        const newTask = new Task(body)
        const savedTask = await newTask.save()
        return res.status(201).json(savedTask);
    default:
        return res.status(400).json({msg:'this method is not '})
}


  }