import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:adevo159118@cluster0.bbho8ne.mongodb.net/alura-node");
// mongoose.connect("mongodb+srv://alura:<adevo159118>@cluster0.bbho8ne.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;