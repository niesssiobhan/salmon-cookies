'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
var allCookies = [];
var cookieTable = document.getElementById('cookies');

// function newElement(type, content, parent) {
//     var element = document.createElement(type);
//     element.textContent = content;
//     parent.appendChild(element);
// }

function Cookies(name, minCustomerPerHour, maxCustomerPerHour, avgCookiesPerCustomer) {
//these are the constructors/objects
    this.name = name;
    this.minCustomersPerHour = minCustomerPerHour;
    this.maxCustomersPerHour = maxCustomerPerHour;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.totalCookies = 0;
    this.totalCustomersPerHour = [];
    this.totalCookiesPerHour = [];
    allCookies.push(this);
}
//these are instances of the constructor/objects above
new Cookies('1st and Pike', 23, 65, 6.3);
new Cookies('SeaTac Airport', 3, 24, 1.2);
new Cookies('Seattle Center', 11, 38, 3.7);
new Cookies('Capital Hill', 20, 38, 2.3);
new Cookies('Alki', 2, 16, 4.6);

function random(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Cookies.prototype.customersPerHour = function(maxCustomerPerHour,minCustomerPerHour) {
    for(var i = 0; i < hours.length; i++){
        var totalCustomers = random (this.minCustomersPerHour, this.maxCustomersPerHour)
        this.totalCustomersPerHour.push(totalCustomers)
    }
};
Cookies.prototype.getTotalCookiesPerHour = function() {
    // this.customersPerHour();  
    for(var i = 0; i < hours.length; i++) {
        var cookiesPerHour = Math.round(this.totalCustomersPerHour[i] * this.avgCookiesPerCustomer);
        this.totalCookiesPerHour.push(cookiesPerHour);
        // console.log(this.totalCookiesPerHour);
    }
};
Cookies.prototype.totalCookiesSold = function() {
    // this.totalCookiesPerHour();
    for(var i = 0; i < this.totalCookiesPerHour.length; i++) {
        this.totalCookies += this.totalCookiesPerHour[i];
    }
    return this.totalCookies;
} 
function callingAllCookies() {
    for(var i = 0; i < allCookies.length; i++){
        allCookies[i].customersPerHour();
        allCookies[i].getTotalCookiesPerHour();
        allCookies[i].totalCookiesSold();
    }
}
callingAllCookies();

function makeHeaderRow(){

    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Store Locations';
    trEl.appendChild(thEl)
    cookieTable.append(trEl);
    for(var i = 0; i < hours.length; i++) {
    // newElement('th', hours[i], trEl);
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
    }
    thEl = document.createElement('th');
    thEl.textContent = "Total Cookies"
    trEl.appendChild(thEl);

cookieTable.appendChild(trEl);
}
function renderAllCookies() {
    for(var i = 0; i < allCookies.length; i++) {
        allCookies[i].render();
    }
}
makeHeaderRow();

Cookies.prototype.render = function() {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    // newElement('td', this.name, trEl)
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    
    for(var i = 0; i < this.totalCookiesPerHour.length; i++) {
    // newElement('td', this.totalCookiesPerHour[i], trEl)
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerHour[i];
    trEl.appendChild(tdEl);
}
// newElement('td', this.totalCookies, trEl);
tdEl= document.createElement('td');
tdEl.textContent = this.totalCookies;
trEl.appendChild(tdEl);
cookieTable.append(trEl);
}
renderAllCookies();

function cookieFooter(){
    //calculated footer totals
    var dailyCookieTotals = 0;
    var dailyStoreTotals = [];
    for(var i = 0; i < hours.length; i++){
        var initalTotal = 0;
        for(var j = 0; j < allCookies.length; j++){
            initalTotal += allCookies[j].totalCookiesPerHour[i]
        }
        dailyCookieTotals += initalTotal;
        dailyStoreTotals.push(initalTotal);
    }
    dailyStoreTotals.push(dailyCookieTotals);

//now appending to dom
var trEl = document.createElement('tr');
var thEl = document.createElement('th');
thEl.textContent = 'Hourly Totals';
trEl.setAttribute('id', 'footer'); //locking the footer to the bottom of the table
trEl.appendChild(thEl);
cookieTable.appendChild(trEl); //this is working to put to the bottom 

for(var k = 0; k < dailyStoreTotals.length; k++){
    var tdEl = document.createElement('td'); 
    tdEl.textContent = dailyStoreTotals[k];
    trEl.appendChild(tdEl);
    cookieTable.appendChild(trEl);  
    }
}
cookieFooter();
//this is creating the form

//these are my global variables
var newStoreLocation = document.getElementById('store-form'); //this is the for id in my html
// var clearChatForm = document.getElementById('clear-chat-form'); 
newStoreLocation.addEventListener('submit', handleAdditionSubmit);

 function handleAdditionSubmit(event) {
    event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event

// Validation to prevent empty form fields
if (!event.target.name.value || !event.target.minCustomersPerHour.value || !event.target.maxCustomersPerHour.value || !event.target.avgCookiesPerCustomer.value) {
    return alert('Fields cannot be empty!');
  }
//here I am populating the new field spaces 
    var store = event.target.name.value;
    var minCus = event.target.minCustomersPerHour.value; 
    var maxCus = event.target.maxCustomersPerHour.value;  
    var avgCookie = event.target.avgCookiesPerCustomer.value; 

if (isNaN(avgCookie)) {
    return alert('Please only numbers for Avg. Cookies Per Customer field')
}

//creating a new instance for new store locations 
    var storeAddition = new Cookies(store, minCus, maxCus, avgCookie);

//these will clear the form fields so that new information can be entered 
    event.target.name.value = null;
    event.target.minCustomersPerHour.value = null;
    event.target.maxCustomersPerHour.value = null;
    event.target.avgCookiesPerCustomer.value = null;

    cookieTable.innerHTML = '';//without this a new table will appear in addition but the new one has the footer
    makeHeaderRow();
    
    //calling the other protoype functions and bind them to the new instace varaibles
    storeAddition.customersPerHour();
    storeAddition.getTotalCookiesPerHour();
    storeAddition.totalCookiesSold();
    
    //we are going call the footer, render, and header logic 
    renderAllCookies();
    cookieFooter();
}

