// Greeting
var today = new Date();
var hour = today.getHours();
var greeting;
if (hour >= 5 && hour < 12) {
    greeting = 'Good morning!';
} else if (hour >= 12 && hour < 18) {
    greeting = 'Good afternoon!';
} else {
    greeting = 'Good evening!';
}
document.getElementById('greeting').innerHTML = greeting;

// Date and Time
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
document.getElementById('datetime').innerHTML = today.toLocaleDateString('en-US', options);