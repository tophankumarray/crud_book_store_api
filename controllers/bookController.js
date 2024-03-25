const User = require("../models/BookModel");


const getBooks=  async (req,res)=>{
    try {
        const books= await User.find({});
        return res.status(200).json({
            count:books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
}

const getBook =async (req,res)=>{
    try {

        const {id} = req.params;
        const book= await User.findById(id);
        return res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
}

const postBook = async (req,res)=>{
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return response.status(400).send({
                message: 'Send all required fields: title, author, publisher'
            })
        }
        const newBook ={
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        const book = await User.create(newBook)
        return res.status(201).send(book)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
}


const updateBook = async(req,res)=>{
    try {
         if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return response.status(400).send({
                message: 'Send all required fields: title, author, publisher'
            })
        }

        const {id}= req.params;

        const result = await User.findByIdAndUpdate(id,req.body);

        if(!result){
            return res.status(404).json({message: 'Book not found'});
        }
        return res.status(200).send({message: 'Book Update Successfully'});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
}


const deleteBook = async (req,res)=>{
    try {
        const {id} = req.params;
        const result = await User.findByIdAndDelete(id);

         if(!result){
            return res.status(404).json({message: 'Book not found'});
        }
        return res.status(200).send({message: 'Book Delete Successfully'});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
}

module.exports= {getBook,getBooks,postBook,updateBook,deleteBook}