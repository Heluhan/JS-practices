function add(items) {
  //items [{name, price}]
  //1.获取父节点
  var tbody = document.getElementsByTagName("tbody")[0];
  var tfoot = document.getElementsByTagName("tfoot")[0];
  //2.获取初始数据
  var num = tbody.children.length;
  console.log(tfoot.innerText);
  var total = parseFloat(tfoot.innerText.match(/\d+.\d+/)[0]);
  // var total = tfoot.innerText.match(/^.*\t(\d*\.?\d*)\(.*\)$/)[1]
  //3.创建子节点
  //产品行
  var tr = "";
  for (let i in items) {
    total = parseFloat((total + items[i].price).toFixed(2));
    tr += `
                    ${items[i].name}
                    ${items[i].price.toFixed(2)}
                    <a href="javascript:void(0);">删除</a>
                   `;
    num++;
  }
  //总计行
  var tf = `总计${total.toFixed(2)}(${num}件商品)`;
  //4.将新增的添加进去
  tfoot.innerHTML = tf;
  tbody.innerHTML = tbody.innerHTML + tr;
}
