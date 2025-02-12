import { Schema, model } from 'mongoose';
import { TBook } from './book.interface';

const bookSchema = new Schema<TBook>({
    title: {type: String, required: true, unique: true},
    author: {type: String, required: true},
    price: {type: Number, required: true},
    category: {
        type: String,
        enum: [ 'Fiction' , 'Science' , 'SelfDevelopment' , 'Poetry' , 'Religious'],
        required: true
    },
    description: {type: String, required: true},
    quantity: {type: Number, required: true},
    inStock: Boolean
}, {
    timestamps: true
})
  

export const BookModle = model<TBook>('Book', bookSchema);