const {Schema,model} = require("mongoose");

const bookSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    author:{
        type: String,
        require: true
    },
    publishYear:{
        type: Number,
        require: true
    },
},
{
    timestamps: true,
}
)
module.exports = model("book",bookSchema)