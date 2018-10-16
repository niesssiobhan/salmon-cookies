'use strict';

// var days= ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

var pike = {
    name: '1st and Pike',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerCustomer: 6.3,
    totalCookies: 0,
    totalCustomersPerHour: [],
    totalCookiesPerHour: [],

getCustomersPerHour : function(){
    for(var i = 0; i < hours.length; i++){
        var totalCustomers = Math.floor(Math.random() * (65 - 23)) + 23;
        this.totalCustomersPerHour.push(totalCustomers)
    }
},
getTotalCookiesPerHour : function(){
    this.getCustomersPerHour();  
for(var i = 0; i < hours.length; i++){
    var cookiesPerHour = Math.round(this.totalCustomersPerHour[i] * pike.avgCookiesPerCustomer);
    this.totalCookiesPerHour.push(cookiesPerHour)
    }
},
totalCookiesSold : function(){
    this.getTotalCookiesPerHour();
for(var i = 0; i < this.totalCookiesPerHour.length; i++){
    this.totalCookies += this.totalCookiesPerHour[i];
    }

console.log(this.totalCookies);
return this.totalCookies;
    } 
}
pike.totalCookiesSold();

pike.render = function(){
    var pikeUl = document.getElementById('pike');
    console.log(pikeUl, "pike ul");
    for(var i = 0; i < this.totalCookiesPerHour.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${this.totalCookiesPerHour[i]}`;
    pikeUl.appendChild(liEl);
    }
    liEl.textContent = `Total Cookies Sold: ${this.totalCookies}`;
    pikeUl.appendChild(liEl);
}
pike.render();

var seaTacAirport = {
    name: 'SeaTac Airport',
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    avgCookiesPerCustomer: 1.2,
    totalCookies: 0,
    totalCustomersPerHour: [],
    totalCookiesPerHour: [],

    getCustomersPerHour : function(){
        for(var i = 0; i < hours.length; i++){
            var totalCustomers = Math.floor(Math.random() * (24 - 3)) + 3;
            this.totalCustomersPerHour.push(totalCustomers)
        }
    },
    getTotalCookiesPerHour : function(){
        this.getCustomersPerHour();  
    for(var i = 0; i < hours.length; i++){
        var cookiesPerHour = Math.round(this.totalCustomersPerHour[i] * seaTacAirport.avgCookiesPerCustomer);
        this.totalCookiesPerHour.push(cookiesPerHour)
        }
    },
    totalCookiesSold : function(){
        this.getTotalCookiesPerHour();
    for(var i = 0; i < this.totalCookiesPerHour.length; i++){
        this.totalCookies += this.totalCookiesPerHour[i];
        }
    console.log(this.totalCookies);
    return this.totalCookies;
        } 
    }
    seaTacAirport.totalCookiesSold();
    
    seaTacAirport.render = function(){
        var seaTacAirportUl = document.getElementById('seaTacAirport');
        // console.log(pikeUl, "pike ul");
        for(var i = 0; i < this.totalCookiesPerHour.length; i++){
        var liEl = document.createElement('li');
        liEl.textContent = `${hours[i]}: ${this.totalCookiesPerHour[i]}`;
        seaTacAirportUl.appendChild(liEl);
        }
        liEl.textContent = `Total Cookies Sold: ${this.totalCookies}`;
        seaTacAirportUl.appendChild(liEl);
    }
    seaTacAirport.render();

var seattleCenter = {
    name: "Seattle Center",
    minCustomerPerHour: 11,
    maxCustomerPerHour: 38,
    avgCookiesPerCustomer: 3.7,
    totalCookies: 0,
    totalCustomersPerHour: [],
    totalCookiesPerHour: [],

    getCustomersPerHour : function(){
        for(var i = 0; i < hours.length; i++){
            var totalCustomers = Math.floor(Math.random() * (24 - 3)) + 3;
            this.totalCustomersPerHour.push(totalCustomers)
        }
    },
    getTotalCookiesPerHour : function(){
        this.getCustomersPerHour();
    for(var i = 0; i < hours.length; i++){
        var cookiesPerHour = Math.round(this.totalCustomersPerHour[i] * seaTacAirport.avgCookiesPerCustomer);
        this.totalCookiesPerHour.push(cookiesPerHour)
        }
    },
    totalCookiesSold : function(){
        this.getTotalCookiesPerHour();
    for(var i = 0; i < this.totalCookiesPerHour; i++){
        this.totalCookies += this.totalCookiesPerHour[i];
        }
    return this.totalCookies;
    }
}
seattleCenter.totalCookiesSold();

seattleCenter.render = function(){
    var seattleCenterUl = document.getElementById('seattleCenter');
    for(var i = 0; i < this.totalCookiesPerHour.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${this.totalCookiesPerHour[i]}`;
    seattleCenterUl.appendChild(liEl);
    }
    liEl.textContent = `Total Cookies Sold: ${this.totalCookies}`;
    seattleCenterUl.appendChild(liEl);
}
seattleCenter.render();

var capitalHill = {
    name: "Capital Hill",
    minCustomerPerHour: 20,
    maxCustomerPerHour: 38,
    avgCookiesPerCustomer: 2.3,
    totalCookies: [],
    totalCustomersPerHour: [],
    totalCooiesPerHour: [],

getCustomersPerHour : function(){
    for(var i = 0; i < hours.length; i++){
        var totalCustomers = Math.floor(Math.random() * (24 - 3)) + 3;
        this.totalCustomersPerHour.push(totalCustomers)
    }
},
getTotalCookiesPerHour : function(){
    this.getCustomersPerHour();
    for(var i = 0; i < hours.length; i++){
        var cookiesPerHour = Math.round(this.totalCustomersPerHour[i] * seaTacAirport.avgCookiesPerCustomer);
        this.totalCooiesPerHour.push(cookiesPerHour)
    }
},
totalCookiesSold : function(){
    this.getTotalCookiesPerHour();
for(var i = 0; i < this.totalCookiesPerHour; i++){
    this.totalCookies += totalCookiePerHour[i];
    }
return this.totalCookies;
}
}
capitalHill.totalCookiesSold();

capitalHill.render = function(){
    var capitalHillUl = document.getElementById('capitalHill');
for(var i = 0; i < this.getTotalCookiesPerHour.length; i++){
var liEl = document.createElement('li');
liEl.textContent = `${hours[i]}: ${this.totalCooiesPerHour[i]}`;
capitalHillUl.appendChild(liEl);
}
liEl.textContent = `Total cookies sold: ${this.totalcookies}`;
capitalHillUl.appendChild(liEl);
}
capitalHill.render();

var alki = {
    name: "Alki",
    minCustomerPerHour: 2,
    maxCustomerPerHour: 16,
    avgCookiesPerCustomer: 4.6,
    totalCookies: 0,
    totalCustomersPerHour: [],
    totalCookiesPerHour: [],

    getCustomersPerHour : function(){
        for(var i = 0; i < hours.length; i++){
            var totalCustomers = Math.floor(Math.random() * (16 - 2)) + 2;
            this.totalCustomersPerHour.push(totalCustomers)
        }
    },
    getTotalCookiesPerHour : function(){
        this.getCustomersPerHour();
    for(var i = 0; i < hours.length; i++){
        var cookiesPerHour = Math.round(this.totalCustomersPerHour[i] * seaTacAirport.avgCookiesPerCustomer);
        this.totalCooiesPerHour.push(cookiesPerHour)
        }
    },
    totalCookiesSold : function(){
        this.getTotalCookiesPerHour();
    for(var i = 0; i < this.totalCookiesPerHour; i++){
        this.totalCookies += this.totalCookiesPerHour[i];
        }
    return this.totalCookies;
    }
}
alki.totalCookiesSold();

alki.render = function(){
    var alkiUl = document.getElementById('alki');
    for(var i = 0; i < this.totalCookiesPerHour.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${this.totalCookiesPerHour[i]}`;
    alkiUl.appendChild(liEl);
    }
    liEl.textContent = `Total cookies sold: ${this.totalCookies}`;
    alkiUl.appendChild(liEl);
}
alki.render();






