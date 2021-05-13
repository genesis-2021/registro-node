const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
nombre: String,
monto: String,
});

module.exports = mongoose.model('task', TaskSchema);
