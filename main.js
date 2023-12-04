const userName = `Tom`;
const userAge = 18;

let userIsAdmin = true;
let userIsLoggedIn = false;
let userIsBlocked = false;

let goToPage = "/home";
if (userIsAdmin) {
  goToPage = "/admin";
} else if (userName && userAge >= 18 && !userIsBlocked) {
  console.log(true);
  userIsLoggedIn = true;
} else {
  goToPage = `/login`;
}
console.log(goToPage);
console.log(userIsLoggedIn);
