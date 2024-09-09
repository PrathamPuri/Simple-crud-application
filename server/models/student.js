const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tech: {
    type: String,
    required: true,
  },
  sub: {
    type: String,
    required: true,
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
