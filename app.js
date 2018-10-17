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
    this.name = name;
    this.minCustomersPerHour = minCustomerPerHour;
    this.maxCustomersPerHour = maxCustomerPerHour;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.totalCookies = 0;
    this.totalCustomersPerHour = [];
    this.totalCookiesPerHour = [];
    allCookies.push(this);
}
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
// function stores() {
//     for(var i = 0; i < allCookies.length; i++) {
//         allCookies[i].customersPerHour();
//     }
// };
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
    
    // cookieTable.appendChild(trEl);
}
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
        console.log(dailyCookieTotals);
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
console.log(thEl);

for(var k = 0; k < dailyStoreTotals.length; k++){
    var tdEl = document.createElement('td');
    tdEl.textContent = dailyStoreTotals[k];
    trEl.appendChild(tdEl);
    cookieTable.appendChild(trEl);
}

}
cookieFooter();








