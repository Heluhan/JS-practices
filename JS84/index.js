function suggest(items) {
  const ul = document.getElementsByTagName("ul")[0];
  ul.innerHTML = "";
  const inputField = document.getElementsByClassName("js-input")[0];
  const suggestField = document.getElementsByClassName("js-suggest")[0];

  let input = inputField.value.trim();

  let reg = "";
  let special = ["(", ")", ".", "[", "{", "|", "\\", "?", "+", "*", "^", "$"];
  for (let chr of input) {
    let s = chr;
    if (special.includes(chr)) {
      s = "\\" + chr;
    }
    reg += `${s}.*?`;
  }

  items = items.filter((item) => {
    const rgx = new RegExp(reg);
    return rgx.test(item);
  });

  if (!items.length || !input) {
    suggestField.classList.add("hide");
  } else {
    suggestField.classList.remove("hide");
    for (let item of items) {
      let nc = document.createElement("li");
      nc.innerText = item;
      ul.appendChild(nc);
    }
  }
}
