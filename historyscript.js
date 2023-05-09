// // regular expression for validation
// const strRegex =  /^[a-zA-Z\s]*$/; // containing only letters
// const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
// /* supports following number formats - (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
// const digitRegex = /^\d+$/;


var prescriptions=[];
let preID=1;
let form=document.querySelector("#form");
let main=document.querySelector("#main");
let closeBtn=document.querySelector("#close-btn");
let addBtn=document.querySelector("#add-btn");
let saveBtn=document.querySelector("#save-btn");
let preTableBody=document.querySelector("#pre-table-body");
addBtn.addEventListener('click',function(){
     form.style="display:block;";
     main.style="display:block;";
 })

closeBtn.addEventListener('click',function(){
    form.style="display:none;";
    main.style="display:none;";    
})

saveBtn.addEventListener('click',function(){
    addPrescription();
})

let jsonCountryList=document.querySelector("#country_list");


//loading country list from json file

window.addEventListener('DOMContentLoaded',function(){
    loadJSON();
})


function loadJSON(){
    fetch('countries1.json')
    .then(response => response.json())
    .then(data => {
        let html="";
        data.forEach(country => {
            html += `
            <option> ${country.country} </option>
            `;
        });
        jsonCountryList.innerHTML = html;
    })
}

//end of loading country list from json file


//add prescription function 

function addPrescription(){
    let preAddressingName=document.querySelector("#addressing_name").value;
    let preFirstName=document.querySelector("#first_name").value;
    let preLastName=document.querySelector("#last_name").value;
    let preEmail=document.querySelector("#email").value;
    let prePhone=document.querySelector("#phone").value;
    let preAddress=document.querySelector("#address").value;
    let prePostalCode=document.querySelector("#postal_code").value;
    let preCity=document.querySelector("#city").value;
    let preCountryList=document.querySelector("#country_list").value;
    let preLabels=document.querySelector("#labels").value;
    var prescription={};
    prescription.addressingName=preAddressingName;
    prescription.firstName=preFirstName;
    prescription.lastName=preLastName;
    prescription.email=preEmail;
    prescription.phone=prePhone;
    prescription.address=preAddress;
    prescription.postalCode=prePostalCode;
    prescription.city=preCity;
    prescription.countryList=preCountryList;
    prescription.labels=preLabels;
    createPrescription(prescription);
    if(localStorage.getItem('prescriptionKey')){
        prescriptions=JSON.parse(localStorage.getItem('prescriptionKey'));
    }
    prescriptions.push(prescription); 
    localStorage.setItem('prescriptionKey',JSON.stringify(prescriptions));

}

//end of add prescription function


//create prescription function

function createPrescription(prescription){
    var tr=document.createElement('tr');
    var tdID=document.createElement('td');
    var tdAddress=document.createElement('td');
    var tdLabels=document.createElement('td');
    var tdByName=document.createElement('td');
    var tdPhone=document.createElement('td');
    tdID.innerHTML=preID++;
    tdAddress.innerHTML=`<span class = "addressing-name">${ prescription.addressingName}</span><br><span class = "address">${prescription.address} ${prescription.postalCode} ${prescription.city} ${prescription.countryList}</span>`
    tdLabels.innerHTML=`<span>${prescription.labels}</span>`;
    tdByName.innerHTML=`${prescription.firstName + " " + prescription.lastName}`;
    tdPhone.innerHTML=prescription.phone;
    tr.append(tdID);
    tr.append(tdAddress);
    tr.append(tdLabels);
    tr.append(tdByName);
    tr.append(tdPhone);
    preTableBody.append(tr);
}

//end of create prescription function

//function on local storage during onload 

document.body.onload = function(){
    if(localStorage.getItem('prescriptionKey')){
        prescriptions=JSON.parse(localStorage.getItem('prescriptionKey'));
        prescriptions.forEach(function(element){
            createPrescription(element);
        });
    }
}

//end of function on local storage during onload

