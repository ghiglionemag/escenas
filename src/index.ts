import { handleRoute } from "./handle-route";

function goTo(path) {
  history.pushState({}, "", path);
  handleRoute(path);
}

export function findAndProcessLinks(conteiner: any = document) {
  const els = document.querySelectorAll(".link-interno");

  for (const link of els) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const route = (e.target as any).getAttribute("href");
      goTo(route);
    });
  }
}

(function () {
  /* Para evitar que los botones de header 
     /recarguen la página
         */
  const logInButton = document.querySelector(".header-logInButton");

  logInButton.addEventListener("click", (e) => {
    e.preventDefault();
  });

  const searchButton = document.querySelector(".header-searchButton");

  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
  });

  findAndProcessLinks();

  window.addEventListener("load", () => {
    handleRoute(location.pathname);
  });
})();
