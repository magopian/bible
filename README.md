# Bible Firefox OS web application

This is really just an experimentation at the moment.

The aim is to scratch an itch that I have: I want to read my bible (French
"Louis Segond" translation) on my Firefox OS phone, but none of the current
applications are working or offer French translations.

The "Louis Segond 1910" translation is in the public domain, but the files I
found to download it are... full of cruft, and really difficult to process
(check the "sources" folder, already cleaned up from
http://www.info-bible.org/bible/telechar.htm).

As a first step, transform the current html files to the markdown format, which
will then be exported to clean html using
[pandoc](http://johnmacfarlane.net/pandoc/README.html).

Having clean markdown means it'll be easy to export it to whatever file format
(epub, pdf, odt...).


## Process

Here's the process I use to create this "Louis Segond 1910" translation. This
needs pandoc to convert to html, and
[BeautifulSoup](http://www.crummy.com/software/BeautifulSoup/bs4/doc/#) to
check the number of chapters and verses of the generated book.

1. Grab the `source/01.GEN.html` file, and clean it up a little bit (make sure
   the markup is at least somewhat coherent).
2. Using several 'search and replace' commands (in vim), transform it to clean
   markdown:
    - remove the header/footer
    - make sure headers are on a new line: `%s/<H/\r<H/g`
    - transform the `h1` tags: `%s/<H1>/# /g`, `%s/<\/H1>//g`
    - transform the `h2` tags: `%s/<H2>/## /g`, `%s/<\/H2>//g`
    - get rid of the `dl|dt|dd` tags: `%s/<.\?D.>//g`
    - only keep the verse number from the `#chapter#.#verse#` (eg: 24.2 => 2.):
      `%s/\d\+\.\(\d\+\)/\1. /g`
    - remove the anchor links: `%s/<A [^>]\+><\/A>//g`
    - get rid of all the empty lines: `%s/^\n//g`
    - re-add an empty line before headers: `%s/#/\r#/g`
3. Generate the html from the markdown file:
    - `./gen_book.sh markdown/01.GEN.md`
    - make sure the output says everything is fine (correct number of chapters
      and of verses per chapters)
