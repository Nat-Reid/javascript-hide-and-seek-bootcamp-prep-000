function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
<<<<<<< HEAD
  return document.querySelector('#nested .target');
}
function increaseRankBy(n){
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for (let i=0; i<ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}
function deepestChild(){
  var current = document.querySelector('#grand-node');
  while (current.querySelector('div') != null){
    current = current.querySelector('div');
  }
  return current;
=======
  return document.querySelector(#nested .target);
>>>>>>> 4177433df9b6af3d9dfc94da3c22ec8a84ed7619
}
