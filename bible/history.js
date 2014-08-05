var title = document.getElementsByTagName('h1')[0].textContent;
var chapters = document.getElementsByTagName('h2');
var currentScrollY = window.scrollY;
var historyTimer = 0;
var chapterHistory = JSON.parse(window.localStorage.getItem('history')) || {};
var currentChapter;

window.addEventListener('scroll', function() {
  currentScrollY = window.scrollY;

  // If we're not already going to update the history, do it now.
  if (!historyTimer) {
    historyTimer = window.setTimeout(updateHistory, 1000);
  }
});

function updateHistory() {
  // Find the latest chapter that is above mid-screen and assume we've read it.
  var aboveMidScreen = currentScrollY + window.innerHeight / 2;
  var chapter;

  for (var i = chapters.length - 1; i >= 0; i--) {
    chapter = chapters[i];
    if (chapter.offsetTop < aboveMidScreen) {
      if (chapter != currentChapter) {
        currentChapter = chapter;
        chapterHistory[title] = [chapter.firstChild.href, new Date()];
        window.localStorage.setItem('history', JSON.stringify(chapterHistory));
      }
      break;
    }
  }
  historyTimer = 0;
}
