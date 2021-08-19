export function sentListComp() {
  const divEl = document.querySelector(".content");

  divEl.innerHTML = `
  <h2 class="sent-title"> Enviados </h2>
  
  <ul class="sent-list">
  <li class="sent-listItem"><a class="link-interno" href="./inbox/1234">Mail enviado 1</a></li>
  <li class="sent-listItem"><a class="link-interno" href="./inbox/2365">Mail enviado 2</a></li>

  </ul>`;

  return divEl;
}
