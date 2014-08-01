#!/bin/bash

pandoc --toc --template bible_template.html $1 -o bible/$(basename $1 .md).html
python validate_book.py bible/$(basename $1 .md).html
