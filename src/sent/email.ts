export function sentEmailComp() {
  const divEl = document.querySelector(".content");
  const emailId = location.pathname.split("/")[2];

  divEl.innerHTML = `
    <h2 class="content-title">Email ${emailId}</h2>
    `;

  return divEl;
}
