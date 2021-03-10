import data from '../data/Articles';

let container = document.querySelector('.articles');

function articleMaker(article){
  let newArticle = document.createElement('div');
  newArticle.classList.add('article');

  let title = document.createElement('h2');
  title.innerText = article.title;
  newArticle.appendChild(title);

  let date = document.createElement('p');
  date.classList.add('date');
  date.innerText = article.date;
  newArticle.appendChild(date);

  let p1 = document.createElement('p');
  p1.innerText = article.firstParagraph;
  newArticle.appendChild(p1);

  let p2 = document.createElement('p');
  p2.innerText = article.secondParagraph;
  newArticle.appendChild(p2);

  let p3 = document.createElement('p');
  p3.innerText = article.thirdParagraph;
  newArticle.appendChild(p3);

  let span = document.createElement('span');
  span.classList.add('expandButton');
  span.addEventListener('click', e => {
    e.preventDefault()

    let parent = e.target.parentElement

    parent.classList.contains('article-open') ?
      e.path[1].classList.remove('article-open')
      : e.path[1].classList.add('article-open');
  });
  newArticle.appendChild(span);

  return newArticle;
}


data.forEach(a => {
  container.appendChild(articleMaker(a));
});