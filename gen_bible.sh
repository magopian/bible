#!/bin/bash

find markdown/ -name '*.md' -exec ./gen_book.sh {} \;
