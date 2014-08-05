var book_name = document.getElementsByTagName('h1')[0].textContent;
var toc = document.getElementsByTagName('ul')[0];
var chapter_links = toc.children;

for (var i = 0; i < chapter_links.length; i++) {
  // Remove the book name from the links to the chapters.
  var chapter_name = chapter_links[i].textContent;
  var chapter_num = chapter_name.substring(book_name.length + 1);
  chapter_links[i].firstChild.textContent = chapter_num;
}
