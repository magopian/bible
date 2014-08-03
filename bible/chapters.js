var toc = document.getElementsByTagName('ul')[0];
var chapters = toc.getElementsByTagName('li');
var book_name = document.getElementsByTagName('h1')[0].textContent;

for (var i = 0; i < chapters.length; i++) {
  // Remove the book name from the links to the chapters.
  var chapter_name = chapters[i].textContent;
  var chapter_num = chapter_name.substring(book_name.length + 1);
  chapters[i].firstChild.textContent = chapter_num;
}
