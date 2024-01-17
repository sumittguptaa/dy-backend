const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  userId: { type: String, unique: true },
  courseId: { type: String},
  program: String,
  preferenceprogram: String,
  studentname:String,
  surname:String,
  fathername:String,
  mothername:String,

  dob:String,
  birthplace:String,
  gender:String,
  fatheremail:String,
  fathermobile:String,
  motheremail:String,
  mothermobile:String,
  nationality:String,
  state:String,
  cityvilaage:String,
  religion:String,
  cast:String,
  subcategory:String,
  aadharno:String,
  pancardno:String,
  bloodgroup:String,
  permanentaddress:String,
  residentialaddress:String,
  parenttelno:String,
  parentannualincome:String,
  parentoccupation:String,
  educationQualification:[
    {
        grade:String,
        stream:String,
        passingyear:String,
        boardname:String,
        marks:String,
        percentage:String
    }
  ],
  workexperience:[
    {
        nameaddressofemployear:String,
        position:String,
        employementperiod:String,
        briefjobresponsablities:String,
        lastsalary:String

    }
  ],
  lastcollageattende:String,
  collageRollNo:String,
  entranceExam:[
    {
      exanname:String,
      examYear:String,
      scoreObtained:String,
    }
  ],
  representedNationalSports:Boolean

  // Add other fields as needed
});

const UserCourse = mongoose.model('UserCourse', courseSchema);

module.exports = UserCourse;
