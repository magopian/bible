# Bible Firefox OS web application

This is really just an experimentation at the moment.

The aim is to scratch an itch that I have: I want to read my bible (French
"Louis Segond" translation) on my Firefox OS phone, but none of the current
applications are working or offer French translations.

The "Louis Segond 1910" translation is in the public domain, but the files I
found to download it are... full of cruft, and really difficult to process
(check the "sources" folder).

As a first step, transform the current html files to the markdown format, which
will then be exported to clean html using pandoc.

Having clean markdown means it'll be easy to export it to whatever file format
(epub, pdf, odt...).
