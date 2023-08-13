

// ? 177 - Request And Response From Real API //////////////////////////////////////////////////////////////
/* // todo instruction
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found
*/


// let MyRequest =  new XMLHttpRequest();
// MyRequest.open("GET","http://myjson.dit.upm.es/api/bins/45ll" )
// MyRequest.send()
// console.log(MyRequest);



// MyRequest.onreadystatechange=function () {
//   // console.log(MyRequest.readyState);
//   // console.log(MyRequest.status);
// if (this.readyState === 4 && this.status === 200) {
//   console.log(this.responseText);
// }

// }; 




// ? 178 - Loop On Data  //////////////////////////////////////////////////////////////
/* // todo instruction
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/
// let My_Request =  new XMLHttpRequest();
// // My_Request.open("GET","jsonFile.json");
// My_Request.open("GET","jsonFile.json");
// My_Request.send();
// // console.log(My_Request);
// My_Request.onreadystatechange=function () {
//   if (this.status === 200 && this.readyState === 4) {
//     // console.log(this.responseText);
//     let jsData = JSON.parse(this.responseText);
//     // console.log(jsData[0].full_name);
//     for (let i = 0; i < jsData.length; i++) {

//       let dataDiv =  document.querySelector(".data");
//       let div = document.createElement("div");
//       let Name = document.createTextNode(`hello Iam ${jsData[i].name} and iam ${jsData[i].age} years old and my skills is ${jsData[i].Skills} `)
//       div.appendChild(Name);
//       dataDiv.appendChild(div)
//       document.body.appendChild(dataDiv)
      
//     }

//   }
// }



// !test2

// let My_Request =  new XMLHttpRequest();
// // My_Request.open("GET","jsonFile.json");
// My_Request.open("GET","jsonFile.json");
// My_Request.send();
// // console.log(My_Request);
// My_Request.onreadystatechange=function () {
//   if (this.status === 200 && this.readyState === 4) {
//     // console.log(this.responseText);
//     let jsData = JSON.parse(this.responseText);
//     // console.log(jsData[0].full_name);
//     for (let i = 0; i < jsData.length; i++) {

//       let template = document.createElement("div")
      
//       template.innerHTML= `
//         <h4> id : <span>${jsData[i].id}</span> </h4> 
//         <h4> Name : <span>${jsData[i].name}</span> </h4> 
//         <h4> age : <span>${jsData[i].age}</span> </h4> 
//         <h4> skills : <span>${jsData[i].Skills}</span> </h4>`

//       let dataDiv =  document.querySelector(".data");
//       dataDiv.appendChild(template)
//       document.body.appendChild(dataDiv)

//     }

//   }
// }





// let My_Request =  new XMLHttpRequest();
// My_Request.open("GET","jsonFile.json");
// My_Request.open("GET","jsonFile.json");
// My_Request.send();
// console.log(My_Request);
// My_Request.onreadystatechange=function () {
//   if (this.status === 200 && this.readyState === 4) {
//     console.log(this.responseText);
//     let jsData = JSON.parse(this.responseText);
//     console.log(jsData[0].full_name);
//     for (let i = 0; i < jsData.length; i++) {

//             selectBox.innerHTML += `<option  class="optionaya" >${jsData[i]['name']}</option> ` 

//             hadeth.innerHTML= `${jsData[i].hadeth}`
//         }

//     }

//   }
// // }