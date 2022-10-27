import Home from "../views/Home.js";
import Puzzles from "../views/Puzzles.js";
import Settings from "../views/Settings.js";

//spa setting
const naviagateTo = url => {
  history.pushState(null, null,  url);
  router();
}

const router = async () => {
  const routes = [
    { path: "/", view : Home},
    { path: "/puzzles", view : Puzzles},
    { path: "/settings", view : Settings}
  ];

  const potentialMatches = routes.map(route => {
    return {
      route,
      isMatch : location.pathname === route.path }
  })

  let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);

  if  (!match)  {
    match = {
      route: routes[0],
      isMatch: true
    };
  }

  const view = new match.route.view(); //view instance

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