function add(items) {
  const frag = document.createDocumentFragment();

  for (let item of items) {
    let newTr = document.createElement("tr");
    newTr.innerHTML = `
          <td>${item.name}</td>
          <td>${item.price.toFixed(2)}</td>
          <td><a href="javascript:void(0);">删除</a></td>
      `;
    frag.appendChild(newTr);
  }

  document.querySelector("tbody").appendChild(frag);
  bind();
}

function bind() {
  const tbody = document.querySelector("tbody");
  let trs = [].slice.call(tbody.getElementsByTagName("tr"), 0);
  let tfootData = document.querySelector("tfoot td");
  let total = 0;
  for (let tr of trs) {
    let price = +tr.children[1].innerText;
    total += price;
    if (!tr.onclick) {
      tr.onclick = function (e) {
        if (e.target.tagName == "A") {
          this.remove();
          bind();
        }
      };
    }
  }
  total = total.toFixed(2);
  tfootData.innerText = `${total}(${trs.length}件商品)`;
}
