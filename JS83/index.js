function randomFn() {
  const redBallwp = document.querySelector(".red .balls-wp");
  const blueBallwp = document.querySelector(".blue .balls-wp");
  let r = 1;
  let redChildren = Array.from(redBallwp.children);
  for (let child of redChildren) {
    if (r <= 33) {
      child.innerText = r;
      child.classList.remove("active");
    } else {
      child.remove();
    }
    r++;
  }

  let b = 1;
  let blueChildren = Array.from(blueBallwp.children);
  for (let cd of blueChildren) {
    if (b <= 16) {
      cd.innerText = b;
      cd.classList.remove("active");
    } else {
      cd.remove();
    }
    b++;
  }

  // get an array of non-repeating random numbers
  const lst = [];
  while (lst.length < 6) {
    let num = Math.floor(Math.random() * 33) + 1;
    if (!lst.includes(num)) {
      lst.push(num);
    }
  }
  lst.sort((a, b) => b - a);

  // delete the balls that will be moved forward
  const redballs = Array.from(redBallwp.children);
  for (let rb of redballs) {
    if (lst.includes(parseInt(rb.innerText))) {
      rb.remove();
    }
  }

  // add new balls at the front
  for (let num of lst) {
    let newBall = document.createElement("b");
    newBall.setAttribute("class", "active");
    newBall.innerText = num;
    redBallwp.prepend(newBall);
  }

  // same procedure for the blue ball
  let blueNum = Math.floor(Math.random() * 16) + 1;
  const blueballs = Array.from(blueBallwp.children);
  for (let bb of blueballs) {
    if (parseInt(bb.innerText) === blueNum) {
      bb.remove();
    }
  }
  let newBall = document.createElement("b");
  newBall.setAttribute("class", "active");
  newBall.innerText = blueNum;
  blueBallwp.prepend(newBall);
}
