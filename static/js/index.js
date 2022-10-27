import Home from "../views/Home.js";
import Puzzles from "../views/Puzzles.js";
import PuzzleView from "../views/PuzzleView.js";
import Settings from "../views/Settings.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g,"\\/").replace(/:\w+/g,"(.+)") + "$");

const getParams = match => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
  
  return Object.fromEntries(keys.map((key, i) => {
    return [key,values[i]];
  }));
}

//spa setting
const naviagateTo = url => {
  history.pushState(null, null,  url);
  router();
}

const router = async () => {
  const routes = [
    { path: "/", view : Home},
    { path: "/puzzles", view : Puzzles},
    { path: "/puzzles/:id", view : PuzzleView},
    { path: "/settings", view : Settings}
  ];

  const potentialMatches = routes.map(route => {
    return {
      route,
      result : location.pathname.match(pathToRegex(route.path))}
  })

  let match = potentialMatches.find(potentialMatches => potentialMatches.result !== null);
  console.log(match)
  if  (!match)  {
    match = {
      route : routes[0],
      result : [location.pathname]
    };
  }
  console.log(match);
  const view = new match.route.view(getParams(match)); //view instance

  document.querySelector("#app").innerHTML = await view.getHtml();
  
};

// histoty.pushState() is not excute popstate
window.addEventListener("popstate",router);

document.addEventListener("DOMContentLoaded", () => {
  // event.preventDefault and spa settings
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link")) {
      e.preventDefault();
      naviagateTo(e.target.href);
    }
  })
  router();
});