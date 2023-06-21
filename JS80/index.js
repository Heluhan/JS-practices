function sort(type, order) {
  var list = document.getElementById("jsList");
  var trs = list.getElementsByTagName("tr");
  var trsArr = [].slice.call(trs);
  var swObj = {
    id: 0,
    price: 1,
    sales: 2,
  };

  trsArr
    .sort(function (a, b) {
      var aVal = parseFloat(a.children[swObj[type]].innerHTML);
      var bVal = parseFloat(b.children[swObj[type]].innerHTML);
      return order === "asc" ? aVal - bVal : bVal - aVal;
    })
    .forEach(function (tr) {
      list.appendChild(tr);
    });
}

function add(price, sales) {
  var list = document.getElementById("jsList");
  var trs = list.getElementsByTagName("tr");
  var trsArr = [].slice.call(trs);
  price = parseFloat(price).toFixed(2);
  let newRow = document.createElement("tr");
  const content = `
        <td>${1 + trsArr.length}</td>
        <td>${price}</td>
        <td>${sales}</td>
        <td><a href="javascript:void(0);">delete</a></td>
  `;
  newRow.innerHTML = content;
  list.appendChild(newRow);
}

function addAll(items) {
  const frag = document.createDocumentFragment();

  for (let item of items) {
    let newTr = document.createElement("tr");
    newTr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td><a href="javascript:void(0);">delete</a></td>
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
