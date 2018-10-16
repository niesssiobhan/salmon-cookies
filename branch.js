//1ts and Pike 23 64 6.3

var pike = {
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerCustomer: 6.3,
    locationName: 'First and Pike',
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0
};

pike.calcCustomersEachHour = function() {
    for(var i = 0; i < hours.length; i++){
//calculate a random number
    var randomCustomers = random(this.minCustomersPerHour,
    this.maxCustomersPerHour);
//put that random number into the appropriate array
    this.customersEachHour.push(randomCustomers);
    }
}

pike.calcCookiesEachHour = function() {
    pike.calcCustomersEachHour();
    for(var i = 0; i < hours.length; i++){
// calc the cookies
        var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer); // this rounds the number up
// put the numbers into an array
    this.cookiesEachHour.push(hourlyCookies);
    this.totalDailyCookies += hourlyCookies;
    }
}

pike.render = function() {
    this.calcCookiesEachHour();
    var pikeUl = document.getElementById('pike');
    for(var i = 0; i < hours.length; i++){
// create an element
        var liEl = document.createElement('li');
// give it content of 6am : 16 cookies
        liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
//append it
        pikeUl.appendChild(liEl);
        }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailyCookies} cookies`
    pikeUl.appendChild(liEl);
}

function random(min, max) {
    return Math.floor(Math.randmon() * (max - min + 1)) + min;
}

pike.render();