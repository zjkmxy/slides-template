.PHONY: all mermaid ditaa clean

all: mermaid ditaa index.html

index.html: index.md
	node main.js

mermaid:
	make -C mermaid

ditaa:
	make -C ditaa

clean:
	rm index.html
