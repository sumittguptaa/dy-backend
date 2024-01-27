const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  userId: { type: String, unique: true },
  courseId: { type: String},
  program: String,
  preferenceprogram: String,
  studentname:{type:String , default:'-'},
  surname:{type:String , default:'-'},
  fathername:{type:String , default:'-'},
  mothername:{type:String , default:'-'},

  dob:{type:String , default:'-'},
  birthplace:{type:String , default:'-'},
  gender:{type:String , default:'-'},
  fatheremail:{type:String , default:'-'},
  fathermobile:{type:String , default:'-'},
  motheremail:{type:String , default:'-'},
  mothermobile:{type:String , default:'-'},
  nationality:{type:String , default:'-'},
  state:{type:String , default:'-'},
  cityvilaage:{type:String , default:'-'},
  religion:{type:String , default:'-'},
  cast:{type:String , default:'-'},
  subcategory:{type:String , default:'-'},
  aadharno:{type:String , default:'-'},
  pancardno:{type:String , default:'-'},
  bloodgroup:{type:String , default:'-'},
  permanentaddress:{type:String , default:'-'},
  residentialaddress:{type:String , default:'-'},
  parenttelno:{type:String , default:'-'},
  parentannualincome:{type:String , default:'-'},
  parentoccupation:{type:String , default:'-'},
  educationQualification:[
    {
        grade:{type:String , default:'-'},
        stream:{type:String , default:'-'},
        passingyear:{type:String , default:'-'},
        boardname:{type:String , default:'-'},
        marks:{type:String , default:'-'},
        percentage:{type:String , default:'-'},
    }
  ],
  workexperience:[
    {
        nameaddressofemployear:{type:String , default:'-'},
        position:{type:String , default:'-'},
        employementperiod:{type:String , default:'-'},
        briefjobresponsablities:{type:String , default:'-'},
        lastsalary:{type:String , default:'-'},

    }
  ],
  lastcollageattende:{type:String , default:'-'},
  collageRollNo:{type:String , default:'-'},
  entranceExam:[
    {
      exanname:{type:String , default:'-'},
      examYear:{type:String , default:'-'},
      scoreObtained:{type:String , default:'-'},
    }
  ],
  representedNationalSports:Boolean

  // Add other fields as needed
});

const UserCourse = mongoose.model('UserCourse', courseSchema);

module.exports = UserCourse;
