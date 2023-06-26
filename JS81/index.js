function link() {
  const container = document.getElementById("jsContainer");
  const reg = /(https?:\/\/)?(www\.\w+(\.\w+)*(\?\w+=\w*(&\w+=\w*)*)?(#\w+)?)/g;
  container.innerHTML = container.innerHTML.replace(reg, function (...args) {
    if (args[1]) {
      return `<a target="_blank" href="${args[0]}">${args[0]}</a>`;
    } else {
      return `<a target="_blank" href="http://${args[0]}">${args[0]}</a>`;
    }
  });
}
