PUG = $(wildcard pug/*.pug)
HTML = $(PUG:.pug=.html)

.PHONY: clean

all: $(HTML)

%.html: %.pug
	node compile.js $< $@
	cp $@ html/$(shell basename $@)

clean:
	rm -f $(HTML)
	rm -v html/*
