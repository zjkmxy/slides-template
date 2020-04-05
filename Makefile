.PHONY: all mermaid clean

all: mermaid index.html

index.html: index.md
	node main.js

mermaid:
	make -C mermaid

clean:
	rm index.html