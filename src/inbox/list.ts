export function inboxListComp() {
  const divEl = document.querySelector(".content");
  divEl.innerHTML = `
  <h2 class="inbox-title"> Recibidos </h2>

  <ul class="inbox-list">
  <li class="inbox-listItem"><a class="link-interno" href="./inbox/1234">Mail recibido 1</a></li>
  <li class="inbox-listItem"><a class="link-interno" href="./inbox/2365">Mail recibido 2</a></li>
</ul>`;

  return divEl;
}
