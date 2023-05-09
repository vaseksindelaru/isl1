import {Schema,model,models} from 'mongoose'


const taskSchema = new Schema({
title: {
    type: String,
    required: [true, 'Title is required'],
    unique: true,
    trim:true,
    maxlength: [50, 'Title must be less then 50 characters']
},
description: {
    type: String,
    required: true,
    trim:true,
    maxlength: [200, 'Title must be less then 200 characters']
}},{
    timestamps: true,
    versionKey: false,
})
export default models.Taskkk || model('Taskkk',taskSchema)