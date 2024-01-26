const path = require("path");
const fs = require("fs");
// const image_logo = require("../dypuniversity.png");
module.exports = (student_data) => {
  const today = new Date();
  const localLogoPath = path.resolve(__dirname, "dypuniversity.png");
  const imgData = fs.readFileSync("dypuniversity.png", { encoding: "base64" });
  const imgData1 = fs.readFileSync("dypusm.png", { encoding: "base64" });
  const universityAddress = "University Address, City, Country"; // Replace with the actual address
  const data = {
    surname: "Doe",
    students_name: "John",
    fathers_name: "John Doe Sr.",
    mothers_name: "Jane Doe",
    dob: "1990-01-01",
    gender: "Male",
    place_of_birth: "CityX",
    father_email_id: "john.doe@example.com",
    mother_email_id: "jane.doe@example.com",
    father_mobile_no: "1234567890",
    mother_mobile_no: "9876543210",
    nationality: "CountryX",
    state: "StateX",
    city_village: "VillageX",
    religion: "ReligionX",
    cast: "CastX",
    sub_category: "OBC",
    aadhar_no: "123456789012",
    pan_card_no: "ABCDE1234F",
    blood_group: "A",
    permanent_address: "Permanent AddressX",
    residential_address: "Residential AddressX",
    parents_telephone_no: "1112223333",
    parents_annual_income: 50000,
    parent_email_id: "parent@example.com",
    parents_occupation: "OccupationX",
    educational_qualification: [
      {
        qualification: "10th",
        stream: "Arts",
        year_of_passing: "2022-12-25",
        name_of_board: "UP",
        marks_obtained: 566,
        percentage: "56",
      },
      {
        qualification: "12th",
        stream: "Arts",
        year_of_passing: "2014-12-12",
        name_of_board: "UP",
        marks_obtained: 654,
        percentage: "89",
      },
    ],
    experience: [],
  };

  return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>Admission Form</title>
           <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
        }

        .header {
            text-align: center;
            background-color: #f2f2f2;
            padding: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            max-width: 50px;
            max-height: 50px;
        }

        .university-address {
            font-size: 14px;
            margin-bottom: 2px;
            text-align: center;
        }

        .form-container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
           
        }
        .content-container {
            padding: 50px; 
        }


        .field-container {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
      margin-top: 10px;
    white-space: nowrap;
}

        .field-label {
            width: 200px; /* Adjust as needed */
            font-weight: bold;
        }

        .educational-qualification {
            margin-top: 20px;
        }

        .qualification-item {
            margin-bottom: 10px;
        }

        .heading {
            background-color: #f2f2f2;
            font-weight: bold;
        }
         .educational-qualification {
            margin-top: 20px;
        }

        .qualification-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        .qualification-table th, .qualification-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        
        .header-table {
            width: 100%;
            border-collapse: collapse;
        }

        .header-table td {
            vertical-align: top;
        }
        .declarations-table {
            margin-top: 20px;
            width: 100%;
            border-collapse: collapse;
        }

         .declarations-table-new {
            margin-top: 20px;
            width: 100%;
            border-collapse: collapse;
            text-align: left;
        }
        .grey-block {
            background-color: #ccc;
            padding: 20px;
            text-align: center;
            width: 90%;
            margin-bottom: 20px;
            margin-top: 20px
        }
        .box {
            width: 80px; /* Adjust the width as needed */
            height: 20px; /* Adjust the height as needed */
            border: 1px solid #000;
            margin: 0 auto; /* Center the box horizontally in the cell */
        }
         .special-table {
            margin-top:10px;
            width: 100%;
            border-collapse: collapse;
        }

        .special-table td {
            border: 1px solid #ddd;
            padding: 8px;
        }

      
        .special-table tr:first-child td:nth-child(2) {
            width: 70%;
        }
          .custom-table {
            width: 100%;
            border-collapse: collapse;
        }

        .custom-table td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left; 
        }
           .table-cell-admit {
        
            padding: 10px;
            text-align: left;
        }

        /* Style for the box in the second column */
        .box-application {
        width: 150px;
            height: 50px;
            border: 1px solid black;
            text-align: center;
            line-height: 50px;
        }
        .box-photo{
            width: 150px;
            height: 150px;
            border: 1px solid black;
            text-align: center;
            line-height: 40px;
        }
      
        table {
            text-align: center;
        }
        </style>
        </head>
        <body>
        <table class="header-table">
        <tr>
        <td>
        
                <img  src="data:image/png;base64,${imgData}"
         style="width:200px; height:80px; margin-top:50px; margin-left:50px; ">
            </td>
            <td>
            <div style="font-weight: bold; font-size: 25px; width: 100%;  margin-top:50px; text-align:center; ">D. Y. PATIL DEEMED TO BE UNIVERSITY</div>
            <div style="text-align:center ;font-weight: bold;  font-size: 12px; width: 100%;;">Established under section 1 of the UGC Act, 1956 (NAAC Re-Accredited 'A++')</div>
            <div style="text-align:center; font-weight: bold; font-size: 12px;">AICTE Approved </div>
             <div style="text-align:center;font-weight: bold; font-size: 12px;">Amongst the Top 10 % of Indian Universities</div>
             <div style="text-align:center;font-weight: bold; ">SCHOOL OF MANAGEMENT</div>
             
            </td>
            <td>
                <img  src="data:image/png;base64,${imgData1}"
         style="width:200px; height:80px; margin-top:50px; margin-right:50px;">
            </td>
        </tr>
       
    </table>
    <div style="text-align:center;">
       <div class="university-address">Dnyanpushpa Niketan', Plot No, 10, Sector 4, C,B,D Belapur, Navi Mumbai 400 614</div>
                 <div>Tel.: +91 22 2758 9200 www.dypusm.org</div>
                    <div style=" text-align: center; font-weight: 500; font-size: 20px;">BBA ADMISSION FORM (Four Year Full Time Program : 2024-2028)</div>
                    </div>

<hr style="border: 1px solid #222; width: 85%;">
  <table class="declarations-table">
            <tr>
               
                    <td><b>(4 Years full time BBA program )</b></td>
                 
                  <td>
       <b>Application No: ................................</b> 
            </td>
            </tr>
           
        </td>
            </table>

 <table style="margin-left: 100px;">
  
   <tr>
      <td>
         <div style=" width: 40px;  margin-left: 80px;height: 20px;  border: 1px solid #000; margin: 0 auto;"></div>
      </td>
      <td>
         <div style="font-size: 14px;"> 1.BBA (Marketing) </div>
      </td>
     
      <td>
         <div style=" width: 40px;  margin-left: 80px;height: 20px;  border: 1px solid #000; margin: 0 auto;"></div>
      </td>
      <td>
         <div style="font-size: 14px;"> 2.BBA (Finance) </div>
      </td>
     
    <td style=" padding: 10px;text-align: left;"  rowspan="6">
         <div class="box-photo">Student's Latest photo: (in formal only) </div>
      </td>
   </tr>
   <tr>
       <td>
         <div style=" width: 40px;  margin-left: 80px;height: 20px;  border: 1px solid #000; margin: 0 auto;"></div>
      </td>
      <td>
         <div style="font-size: 14px;"> 3.BBA (International Business) </div>
      </td>
     
      <td>
         <div style=" width: 40px;  margin-left: 80px;height: 20px;  border: 1px solid #000; margin: 0 auto;"></div>
      </td>
      <td>
         <div style="font-size: 14px;"> 4.BBA (Banking and Insurance) </div>
      </td>
     
   </tr>
   <tr>
  <td>
         <div style=" width: 40px;  margin-left: 80px;height: 20px;  border: 1px solid #000; margin: 0 auto;"></div>
      </td>
      <td>
         <div style="font-size: 14px;"> 5.BBA (Hospital Administration) </div>
      </td>
     
      <td>
         <div style=" width: 40px;  margin-left: 80px;height: 20px;  border: 1px solid #000; margin: 0 auto;"></div>
      </td>
      <td>
         <div style="font-size: 14px;"> 6.BBA (Business Analytics) </div>
      </td>
     
   </tr>
   <tr>
      <td>
         <div style=" width: 40px; margin-left: 80px; height: 20px;  border: 1px solid #000; margin: 0 auto;"></div>
      </td>
      <td>
         <div style="font-size: 14px;"> 7.Integrated BBA + MBA Program (5 Years) </div>
      </td>
      <td>
         
      </td>
      <td>
         
      </td>
   </tr>
  
     
</table>
         <div class="form-container">
           <div>Name of the student's (NAME IN CAPITAL LETTERS)</div>
            <table class="declarations-table">
            <tr>
               
                    <td>${data.surname}</td>
                   <td>${data.students_name}</td>
                   <td>${data.fathers_name}</td>
                   <td>${data.mothers_name}</td>
                
            </tr>
            <tr>
        <td colspan="4">
            <hr />
        </td>
    </tr>
            <tr>
            <th>Surname:</th>
            <th>Student's Name</th>
            <th>Father's Name</th>
            <th>Mother's Name</th>
            
            </tr>
            </table>
              <div class="field-container"> 
                <div >Date of Birth:            ${
                  data.dob
                }  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Place of Birth        :${
    data.place_of_birth
  } &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gender:              ${
    data.gender
  } </div>
                </div>

           
            <div class="field-container">
                <div > Father Email ID:................${
                  data.father_email_id
                }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Father Mobile No.:..............${
    data.father_mobile_no
  }</div>
                </div>
           
  <div class="field-container">
                <div > Mother Email ID:...............${
                  data.mother_email_id
                }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mother Mobile No.:.............${
    data.mother_mobile_no
  }</div>
                </div>

                  <div class="field-container">
                <div > Nationality:..........${
                  data.nationality
                }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; State:.............${
    data.state
  }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;City/Village:................${
    data.city_village
  }</div>
                </div>

                  <div class="field-container">
                <div >Student's Place of Birth:        ${
                  data.place_of_birth
                }</div>
                </div>


                  <div class="field-container">
                <div >Religion:.............${
                  data.religion
                }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cast:..............${
    data.cast
  }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sub-Category:.............${
    data.sub_category
  }</div>
                </div>


                  <div class="field-container">
                <div >Aadhar no:......${
                  data.aadhar_no
                }&nbsp;&nbsp;&nbsp;&nbsp;Pan Card No:.......${
    data.pan_card_no
  }&nbsp;&nbsp;&nbsp;&nbsp;Blood Group:......${data.blood_group}</div>
                </div>

  <table class="special-table">
        <tr>
            <td>Permanent Address</td>
            <td>${data.permanent_address}</td>
        </tr>
        <tr>
            <td colspan="2" >&nbsp;</td>
           
        </tr>
    </table>


 <table class="special-table">
        <tr>
            <td>Residential Address</td>
            <td>${data.residential_address}</td>
        </tr>
        <tr>
            <td colspan="2">&nbsp;</td>
           
        </tr>
    </table>

    <table class="custom-table">
        <tr>
            <td>Parents Telephone No:  ${data.parents_telephone_no}</td>
            <td>Parents Annual Income:  ${data.parents_annual_income}</td>
        </tr>
        <tr>
            <td >Parent Email ID:        ${data.parent_email_id}</td>
            <td >Parents Occupation:        ${data.parents_occupation}</td>
           
        </tr>
    </table>

     <table class="declarations-table">
            <tr>
                <td>
                    <div>  Last college attended : ......................................................................... Roll No. .................</div>
                   
                </td>
                
            </tr>
       </table>        
           <div class="educational-qualification">
            <div class="heading">Educational Qualification</div>
            <table class="qualification-table">
                <thead>
                    <tr>
                        <th>Qualification</th>
                        <th>Stream</th>
                        <th>Year of Passing</th>
                        <th>Name of Board</th>
                        <th>Marks Obtained</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                            ${data.educational_qualification
                              .map(
                                (qualification) => `
                            <tr>
                                <td>${qualification.qualification}</td>
                                <td>${qualification.stream}</td>
                                <td>${qualification.year_of_passing}</td>
                                <td>${qualification.name_of_board}</td>
                                <td>${qualification.marks_obtained}</td>
                                <td>${qualification.percentage}</td>
                            </tr>
                        `
                              )
                              .join("")}
                </tbody>
            </table>
        </div>
${
  data.experience > 0
    ? `
    <div class="educational-qualification">
        <div class="heading">Educational Qualification</div>
        <table class="qualification-table">
            <thead>
                <tr>
                    <th>Name and Address of the employer</th>
                    <th>Position</th>
                    <th>Period of employment</th>
                    <th>Give the brief of job responsibilities</th>
                    <th>Last Salary Drawn (Rs per month)</th>
                 
                </tr>
            </thead>
            <tbody>
                ${data.experience
                  .map(
                    (qualification) => `
                        <tr>
                            <td>${qualification.name}</td>
                            <td>${qualification.position}</td>
                            <td>${qualification.period_of_employment}</td>
                            <td>${qualification.job_responsibilities}</td>
                            <td>${qualification.last_salary}</td>
                        </tr>
                    `
                  )
                  .join("")}
            </tbody>
        </table>
    </div>
`
    : ""
}

        <table class="declarations-table-new">
            <tr>
                <td>
                    <div>Undertaking:</div>
                </td>
            </tr>
             <tr>
                <td>

                    <p>1 &nbsp;&nbsp;&nbsp;&nbsp&nbsp;Minimum 75% class attendance is necessary for all semesters.
If my attendance is found to be unsatisfactory, I shall not be permitted to give the semester end examination.</p>
                </td>
            </tr>

             <tr>
                <td>
                   
                    <p>2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I promise that I shall attend the classes regularly and appear for the entire internals and Examinations held by the college during
the academic year.</p>
                </td>
            </tr>

            
             <tr>
                <td>
                   
                    <p>3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Students will not be granted terms unless,</p>
<p>a. They have attended at least 75% of the lectures in each semester ;</p>
<p>b. Their Projects / Assignments for semester work are certified by the department Concerned ;.</p>
                </td>
            </tr>

            
             <tr>
                <td>
                    
                    <p>4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have read and have fully understood the UCG Regulations on "Curbing the Menace of Ragging in Higher Educational Institutions, 2009"
and the directions of the Supreme Court and the Central / State Government in this regard, as given in the prospectus. If found guilty of
any aspect of ragging, I may be punished as per the provisions of the UGC Regulations mentioned above and / or as per the law in force.
I also herby affirm that I have not been expelled or debarred from admission by any institution. I accept all the above conditions.</p>
                </td>
            </tr>

            
             <tr>
                <td>
                    
                    <p>5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As per the refund policy no fees refund is possible after starting the lectures.</p>
                </td>
            </tr>

            
             <tr>
                <td>
                    
                    <p>6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I promise that I shall attend the classes regularly and appear for the entire internals and Examinations held by the college during
the academic year.</p>
                </td>
            </tr>
        </table>


        <table class="declarations-table">
            <tr>
                <td>
                    <div> <b> Declaration by Student: </b> I hereby declare that, I have read the rules related to admission and the information filled in by me this form is
accurate and true to the best of my knowledge. I will be responsible for any discrepancy, arising out of the form signed by me and I undertake
that, in absence of any document the final admission will not be granted and or admission will stand cancel.</div>
                   
                </td>
            </tr>
            
        </table>
          
             <table class="declarations-table">
            <tr>
                <td>
                    <div>  Place : ......................</div>
                   
                </td>
                <td>
                    <div>  Date : .......................</div>
                   
                </td>
                <td>
                    <div>  Signature of Student : .......................</div>
                   
                </td>
            </tr>
            
        </table>
                <table class="declarations-table">
            <tr>
                <td>
                    <div>  Declaration by Parent:  I have permitted my son / daughter to join your college. The information supplied by him / her is correct to best of my knowledge. I have acquainted myself with rules and fees, dues to my son / daughter .</div>
                   
                </td>
            </tr>
            
        </table>

           <table class="declarations-table">
            <tr>
                <td>
                    <div>  Place : ......................</div>
                   
                </td>
                <td>
                    <div>  Date : .......................</div>
                   
                </td>
                <td>
                    <div>  Signature of Parent : .......................</div>
                   
                </td>
            </tr>
            
        </table>
           
<div class="grey-block">
            <p style="margin: 0; color: #fff;">OFFICE USE ONLY</p>
        </div>


        <div >
            <p style="margin: 0; color: #000;">List of the Xerox to be submitted ( two sets of photo copies along with necessary original certificates )</p>
        </div>

         <table class="declarations-table">
         <thead>
                    <tr>
                       
                       
                        <th></th>
                        <th>Submitted</th>
                        <th>Not Submitted</th>
                        <th>Original Document Submitted</th>
                    </tr>
                </thead>

                 <tbody>
            <tr>
                <td>
                    <div> 1 SSC Mark Sheel & Passing Certificate. </div>
                   
                </td>
                <td>
                    <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
            </tr>

             <tr>
                <td>
                    <div> 2  HSC Mark Sheet & Passing Certificate </div>
                   
                </td>
                <td>       <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
            </tr>

             <tr>
                <td>
                    <div> 3  HSC Transfer Certificate </div>
                   
                </td>
                <td>       <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
            </tr>

             <tr>
                <td>
                    <div> 4  HSC Migration Certificate </div>
                   
                </td>
                <td>       <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
            </tr>

             <tr>
                <td>
                    <div> 5  Caste Certificate & Caste Validity Certificate </div>
                   
                </td>
                <td>       <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
            </tr>

             <tr>
                <td>
                    <div> 6  PAN Card </div>
                   
                </td>
                <td>       <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
            </tr>

             <tr>
                <td>
                    <div> 7  Birth Certificate / Leaving Certificate </div>
                   
                </td>
                <td>       <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
            </tr>

             <tr>
                <td>
                    <div> 8  Aadhar Card </div>
                   
                </td>
                <td>       <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
            </tr>

             <tr>
                <td>
                    <div> 9  Domicile Certificate (for out side of maharashtra) </div>
                   
                </td>
                <td>       <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
            </tr>

            <tr>
                <td>
                    <div> 10 Valid Passport & Visa (for foreign National) </div>
                   
                </td>
                <td>       <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
            </tr>

            <tr>
                <td>
                    <div> 11 Income/ Salary Certificate of parent </div>
                   
                </td>
                <td>       <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
                <td>
                     <div class="box"></div>
                </td>
            </tr>
</tbody>


            
        </table>

        <table class="declarations-table">
            <tr>
                <td>
                    <div style="margin: 15;">  Marks obtained in the all india qualifying exam : .................. or Marks obtained at DYPCET entrance exam : ............. </div>
                   
                </td>
                
            </tr>

             <tr>
                <td>
                    <div style="margin: 15;">  Marks obtained at PI: ............................................  &nbsp;&nbsp;&nbsp;     Additional marks for sports activities : ............. </div>
                   
                </td>
                
            </tr>
            
            <tr>
                <td>
                    <div style="margin: 15;"> Total Marks: ......................     &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                  Admitted : Yes/No ...... </div>
                   
                </td>
                
            </tr>


              <tr>
                <td>
                    <div  style="margin: 15;"> Remarks: .............................................................................................................................................. </div>
                   
                </td>
                
            </tr>
        </table>
 
         <table class="declarations-table">
    <thead>
        <tr>
            <th>......................................................</th>
            <th>......................................................</th>
            <th>......................................................</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td style="vertical-align: top;">
                <div>&nbsp;&nbsp;&nbsp;Co-ordinator of Admission</div>
            </td>
            <td style="vertical-align: top;">
                <div>&nbsp;&nbsp;&nbsp;Admin Head</div>
            </td>
            <td style="vertical-align: top;">
                <div>&nbsp;&nbsp;&nbsp;Director</div>
            </td>
        </tr>
    </tbody>
</table>

 <div class="content-container">
 </div>
     <table class="header-table">
        <tr>
        <td>
        
                <img  src="data:image/png;base64,${imgData}"
         style="width:200px; height:80px; margin-top:50px; margin-left:50px; ">
            </td>
            <td>
            <div style="font-weight: bold; font-size: 25px; width: 100%;  margin-top:50px; text-align:center; ">D. Y. PATIL DEEMED TO BE UNIVERSITY</div>
            <div style="text-align:center ;font-weight: bold;  font-size: 12px; width: 100%;;">Established under section 1 of the UGC Act, 1956 (NAAC Re-Accredited 'A++')</div>
            <div style="text-align:center; font-weight: bold; font-size: 12px;">AICTE Approved </div>
             <div style="text-align:center;font-weight: bold; font-size: 12px;">Amongst the Top 10 % of Indian Universities</div>
             <div style="text-align:center;font-weight: bold; ">SCHOOL OF MANAGEMENT</div>
             
            </td>
            <td>
                <img  src="data:image/png;base64,${imgData1}"
         style="width:200px; height:80px; margin-top:50px; margin-right:50px;">
            </td>
        </tr>
       
    </table>
    <div style="text-align:center;">
       <div class="university-address">Dnyanpushpa Niketan', Plot No, 10, Sector 4, C,B,D Belapur, Navi Mumbai 400 614</div>
                 <div>Tel.: +91 22 2758 9200 www.dypusm.org</div>
                    </div>
         </div>

          <div style="text-align:center;font-weight: bold;margin-top:10px;">DYPCET & GD / PI HALL TICKET</div>
           <div style="text-align:center;font-weight: bold;margin-top:10px;">4 YEARS FULL TIME BBA</div>
            <div style="text-align:center;font-weight: bold;margin-top:10px;">Year 2024</div>

                        <table>
        <tr>
            <td class="table-cell-admit">
                <div style="margin-top: 35px; margin-left: 80px;">Name of the candidate: ....................................................................................................................</div>
            </td>
            <td class="table-cell-admit">
                <div class="box-application">Application No:</div>
            </td>
        </tr>
        
    </table>

                     <table>
        <tr>
            <td style="padding: 10px;text-align: left;">
            <div style="margin-top: 35px; margin-left: 80px;">Hall Ticket No.: .......................................................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</div>
 <div style="margin-top: 35px; margin-left: 80px;">Place of exam: D.Y. Patil Deemed to be university of management </div>
               <div style="margin-top: 5px; margin-left:180px;"> Dnyanpushpa Niketan', Plot No, 10, Sector 4</div>
                           <div style="margin-top: 5px; margin-left:180px;">  C,B,D Belapur, Navi Mumbai</div>
                <div style="margin-top: 35px; margin-left: 80px;">Date:  </div>
              
            </td>
            <td style=" padding: 10px;text-align: left;">
                <div class="box-photo">Student's Latest photo: (in formal only) </div>
            </td>
        </tr>
        
    </table>
                   <table class="declarations-table">
    <thead>
        <tr>
            <th>......................................................</th>
            
            <th>......................................................</th>
        </tr>
    </thead>

    <tbody>
        <tr>
          
            <td style="vertical-align: top;">
                <div>&nbsp;&nbsp;&nbsp;<b>Supervisor's Signature</b></div>
            </td>
            <td style="vertical-align: top;">
                <div>&nbsp;&nbsp;&nbsp;<b>Student's Signature</b></div>
            </td>
        </tr>
    </tbody>
</table>     
<hr style="border: 1px solid #222; width: 85%;">
       
     <table class="header-table">
        <tr>
        <td>
        
                <img  src="data:image/png;base64,${imgData}"
         style="width:200px; height:80px; margin-top:50px; margin-left:50px; ">
            </td>
            <td>
            <div style="font-weight: bold; font-size: 25px; width: 100%;  margin-top:50px; text-align:center; ">D. Y. PATIL DEEMED TO BE UNIVERSITY</div>
            <div style="text-align:center ;font-weight: bold;  font-size: 12px; width: 100%;;">Established under section 1 of the UGC Act, 1956 (NAAC Re-Accredited 'A++')</div>
            <div style="text-align:center; font-weight: bold; font-size: 12px;">AICTE Approved </div>
             <div style="text-align:center;font-weight: bold; font-size: 12px;">Amongst the Top 10 % of Indian Universities</div>
             <div style="text-align:center;font-weight: bold; ">SCHOOL OF MANAGEMENT</div>
             
            </td>
            <td>
                <img  src="data:image/png;base64,${imgData1}"
         style="width:200px; height:80px; margin-top:50px; margin-right:50px;">
            </td>
        </tr>
       
    </table>
    <div style="text-align:center;">
       <div class="university-address">Dnyanpushpa Niketan', Plot No, 10, Sector 4, C,B,D Belapur, Navi Mumbai 400 614</div>
                 <div>Tel.: +91 22 2758 9200 www.dypusm.org</div>
                    </div>
         </div>

          <div style="text-align:center;font-weight: bold;margin-top:10px;">DYPCET & GD / PI HALL TICKET</div>
           <div style="text-align:center;font-weight: bold;margin-top:10px;">4 YEARS FULL TIME BBA</div>
            <div style="text-align:center;font-weight: bold;margin-top:10px;">Year 2024</div>

                        <table>
        <tr>
            <td class="table-cell-admit">
                <div style="margin-top: 35px; margin-left: 80px;">Name of the candidate: ....................................................................................................................</div>
            </td>
            <td class="table-cell-admit">
                <div class="box-application">Application No:</div>
            </td>
        </tr>
        
    </table>

                     <table>
        <tr>
            <td style="padding: 10px;text-align: left;">
            <div style="margin-top: 35px; margin-left: 80px;">Hall Ticket No.: .......................................................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</div>
 <div style="margin-top: 35px; margin-left: 80px;">Place of exam: D.Y. Patil Deemed to be university of management </div>
               <div style="margin-top: 5px; margin-left:180px;"> Dnyanpushpa Niketan', Plot No, 10, Sector 4</div>
                           <div style="margin-top: 5px; margin-left:180px;">  C,B,D Belapur, Navi Mumbai</div>
                <div style="margin-top: 35px; margin-left: 80px;">Date:  </div>
              
            </td>
            <td style=" padding: 10px;text-align: left;">
                <div class="box-photo">Student's Latest photo: (in formal only) </div>
            </td>
        </tr>
        
    </table>
                   <table class="declarations-table">
    <thead>
        <tr>
            <th>......................................................</th>
            
            <th>......................................................</th>
        </tr>
    </thead>

    <tbody>
        <tr>
          
            <td style="vertical-align: top;">
                <div>&nbsp;&nbsp;&nbsp;<b>Supervisor's Signature</b></div>
            </td>
            <td style="vertical-align: top;">
                <div>&nbsp;&nbsp;&nbsp;<b>Student's Signature</b></div>
            </td>
        </tr>
    </tbody>
</table>   





       </body>
    </html>
    `;
};
