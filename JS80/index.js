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
