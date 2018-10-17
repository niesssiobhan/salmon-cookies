'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
var allCookies = [];
var cookieTable = document.getElementById('cookies');

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
        console.log(i)
        var cookiesPerHour = Math.round(this.totalCustomersPerHour[i] * this.avgCookiesPerCustomer);
        this.totalCookiesPerHour.push(cookiesPerHour);
        console.log(this.totalCookiesPerHour);
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

Cookies.prototype.render = function() {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name[i];
    trEl.appendChild(tdEl);
    
    trEl = document.createElement('tr');
    for(var i = 0; i < this.totalCookiesPerHour; i++) {
    var cookiesPerHour = Math.round(this.totalCustomersPerHour[i] * pike.avgCookiesPerCustomer);
    tdEl.textContent = this.totalCookiesPerHour[i];
    trEl.appendChild(tdEl);

}
cookieTable.appendChild(trEl);
}

function makeHeaderRow(){
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);

    thEl = document.createElement('th');
    for(var i = 0; i < totalCookiesPerHour[i].length; i++) {
        totalCookies += totalCookiesPerHour[i];
    thEl.textContent = totalCookies[i];
    trEl.appendChild(thEl);
}
cookieTable.appendChild(trEl);
}
function renderAllCookies() {
    for(var i = 0; i < allCookies.length; i++){
        allCookies[i].render();
    }
}
renderAllCookies();
// var pike = {
//     name: '1st and Pike',
//     minCustomersPerHour: 23,
//     maxCustomersPerHour: 65,
//     avgCookiesPerCustomer: 6.3,
//     totalCookies: 0,
//     totalCustomersPerHour: [],
//     totalCookiesPerHour: [],

// getCustomersPerHour : function(){
    //     for(var i = 0; i < hours.length; i++){
//         var totalCustomers = Math.floor(Math.random() * (65 - 23)) + 23;
//         this.totalCustomersPerHour.push(totalCustomers)
//     }
// },
// getTotalCookiesPerHour : function(){
//     this.getCustomersPerHour();  
// for(var i = 0; i < hours.length; i++){
//     var cookiesPerHour = Math.round(this.totalCustomersPerHour[i] * pike.avgCookiesPerCustomer);
//     this.totalCookiesPerHour.push(cookiesPerHour)
//     }
// },
// totalCookiesSold : function(){
//     this.getTotalCookiesPerHour();
// for(var i = 0; i < this.totalCookiesPerHour.length; i++){
//     this.totalCookies += this.totalCookiesPerHour[i];
//     }
// return this.totalCookies;
//     } 
// }
// pike.totalCookiesSold();

// pike.render = function(){
    //     console.log(pikeUl, "pike ul");
    //     var pikeUl = document.getElementById('pike');
//     for(var i = 0; i < this.totalCookiesPerHour.length; i++){
//     var liEl = document.createElement('li');
//     liEl.textContent = `${hours[i]}: ${this.totalCookiesPerHour[i]}`;
//     pikeUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total Cookies Sold: ${this.totalCookies}`;
//     pikeUl.appendChild(liEl);
// }
// pike.render();

// var seaTacAirport = {
//     name: 'SeaTac Airport',
//     minCustomersPerHour: 3,
//     maxCustomersPerHour: 24,
//     avgCookiesPerCustomer: 1.2,
//     totalCookies: 0,
//     totalCustomersPerHour: [],
//     totalCookiesPerHour: [],

//     getCustomersPerHour : function(){
//         for(var i = 0; i < hours.length; i++){
//             var totalCustomers = Math.floor(Math.random() * (24 - 3)) + 3;
//             this.totalCustomersPerHour.push(totalCustomers)
//         }
//     },
//     getTotalCookiesPerHour : function(){
//         this.getCustomersPerHour();  
//     for(var i = 0; i < hours.length; i++){
//         var cookiesPerHour = Math.round(this.totalCustomersPerHour[i] * seaTacAirport.avgCookiesPerCustomer);
//         this.totalCookiesPerHour.push(cookiesPerHour)
//         }
//     },
//     totalCookiesSold : function(){
//         this.getTotalCookiesPerHour();
//     for(var i = 0; i < this.totalCookiesPerHour.length; i++){
//         this.totalCookies += this.totalCookiesPerHour[i];
//         }
//     return this.totalCookies;
//         } 
//     }
//     seaTacAirport.totalCookiesSold();
    
//     seaTacAirport.render = function(){
//         var seaTacAirportUl = document.getElementById('seaTacAirport');
//         // console.log(pikeUl, "pike ul");
//         for(var i = 0; i < this.totalCookiesPerHour.length; i++){
//         var liEl = document.createElement('li');
//         liEl.textContent = `${hours[i]}: ${this.totalCookiesPerHour[i]}`;
//         seaTacAirportUl.appendChild(liEl);
//         }
//         liEl.textContent = `Total Cookies Sold: ${this.totalCookies}`;
//         seaTacAirportUl.appendChild(liEl);
//     }
//     seaTacAirport.render();

// var seattleCenter = {
//     name: "Seattle Center",
//     minCustomerPerHour: 11,
//     maxCustomerPerHour: 38,
//     avgCookiesPerCustomer: 3.7,
//     totalCookies: 0,
//     totalCustomersPerHour: [],
//     totalCookiesPerHour: [],

//     getCustomersPerHour : function(){
//         for(var i = 0; i < hours.length; i++){
//             var totalCustomers = Math.floor(Math.random() * (24 - 3)) + 3;
//             this.totalCustomersPerHour.push(totalCustomers)
//         }
//     },
//     getTotalCookiesPerHour : function(){
//         this.getCustomersPerHour();
//     for(var i = 0; i < hours.length; i++){
//         var cookiesPerHour = Math.round(this.totalCustomersPerHour[i] * seaTacAirport.avgCookiesPerCustomer);
//         this.totalCookiesPerHour.push(cookiesPerHour)
//         }
//     },
//     totalCookiesSold : function(){
//         this.getTotalCookiesPerHour();
//     for(var i = 0; i < this.totalCookiesPerHour.length; i++){
//         this.totalCookies += this.totalCookiesPerHour[i];
//         }
//     return this.totalCookies;
//     }
// }
// seattleCenter.totalCookiesSold();

// seattleCenter.render = function(){
//     var seattleCenterUl = document.getElementById('seattleCenter');
//     for(var i = 0; i < this.totalCookiesPerHour.length; i++){
//     var liEl = document.createElement('li');
//     liEl.textContent = `${hours[i]}: ${this.totalCookiesPerHour[i]}`;
//     seattleCenterUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total Cookies Sold: ${this.totalCookies}`;
//     seattleCenterUl.appendChild(liEl);
// }
// seattleCenter.render();

// var capitalHill = {
//     name: "Capital Hill",
//     minCustomerPerHour: 20,
//     maxCustomerPerHour: 38,
//     avgCookiesPerCustomer: 2.3,
//     totalCookies: 0,
//     totalCustomersPerHour: [],
//     totalCookiesPerHour: [],

// getCustomersPerHour : function(){
//     for(var i = 0; i < hours.length; i++){
//         var totalCustomers = Math.floor(Math.random() * (24 - 3)) + 3;
//         this.totalCustomersPerHour.push(totalCustomers)
//     }
// },
// getTotalCookiesPerHour : function(){
//     this.getCustomersPerHour();
//     for(var i = 0; i < hours.length; i++){
//         var cookiesPerHour = Math.round(this.totalCustomersPerHour[i] * capitalHill.avgCookiesPerCustomer);
//         this.totalCookiesPerHour.push(cookiesPerHour)
//     }
// },
// totalCookiesSold : function(){
//     this.getTotalCookiesPerHour();
// for(var i = 0; i < this.totalCookiesPerHour.length; i++){
//     this.totalCookies += this.totalCookiesPerHour[i];
//     }
// return this.totalCookies;
// }
// }
// capitalHill.totalCookiesSold();

// capitalHill.render = function(){
//     var capitalHillUl = document.getElementById('capitalHill');
// for(var i = 0; i < this.totalCookiesPerHour.length; i++){
// var liEl = document.createElement('li');
// liEl.textContent = `${hours[i]}: ${this.totalCookiesPerHour[i]}`;
// capitalHillUl.appendChild(liEl);
// }
// liEl.textContent = `Total cookies sold: ${this.totalCookies}`;
// capitalHillUl.appendChild(liEl);
// }
// capitalHill.render();

// var alki = {
//     name: "Alki",
//     minCustomerPerHour: 2,
//     maxCustomerPerHour: 16,
//     avgCookiesPerCustomer: 4.6,
//     totalCookies: 0,
//     totalCustomersPerHour: [],
//     totalCookiesPerHour: [],

//     getCustomersPerHour : function(){
//         for(var i = 0; i < hours.length; i++){
//             var totalCustomers = Math.floor(Math.random() * (16 - 2)) + 2;
//             this.totalCustomersPerHour.push(totalCustomers)
//         }
//     },
//     getTotalCookiesPerHour : function(){
//         this.getCustomersPerHour();
//     for(var i = 0; i < hours.length; i++){
//         var cookiesPerHour = Math.round(this.totalCustomersPerHour[i] * alki.avgCookiesPerCustomer);
//         this.totalCookiesPerHour.push(cookiesPerHour)
//         }
//     },
//     totalCookiesSold : function(){
//         this.getTotalCookiesPerHour();
//     for(var i = 0; i < this.totalCookiesPerHour.length; i++){
//         this.totalCookies += this.totalCookiesPerHour[i];
//         console.log(this.totalCookies);       
//     }
//     return this.totalCookies;
//     }
// }
// alki.totalCookiesSold();

// alki.render = function(){
//     var alkiUl = document.getElementById('alki');
//     for(var i = 0; i < this.totalCookiesPerHour.length; i++){
//     var liEl = document.createElement('li');
//     liEl.textContent = `${hours[i]}: ${this.totalCookiesPerHour[i]}`;
//     alkiUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total cookies sold: ${this.totalCookies}`;
//     alkiUl.appendChild(liEl);
// }
// alki.render();






