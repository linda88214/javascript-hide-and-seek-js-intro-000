function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("div#nested div.target");
}

function deepestChild() {

}

function increaseRankBy(n) {
  var list = document.getElementById("app").querySelectorAll("ul.ranked-list li")

  for(let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i]).innerHTML + 1
  }
}
