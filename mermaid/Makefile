MERMAID_COMPILER = ../mmdc.js -c mermaid_config.json -C mermaid_style.css -p puppeteer_config.json
PDFCROP = pdfcrop
.PHONY: all mermaid_pdf mermaid_png mermaid_svg clean

MMD_FILES=$(shell find . -name '*.mmd')

%.pdf: %.mmd
	${MERMAID_COMPILER} -i $< -o $@
	${PDFCROP} $@ $@

%.png: %.mmd
	${MERMAID_COMPILER} -i $< -o $@

%.svg: %.mmd
	${MERMAID_COMPILER} -i $< -o $@
	sed -i.temp -e 's/<br>/<br\/>/g' $@
	rm $@.temp

all: mermaid_svg
mermaid_pdf: $(MMD_FILES:mmd=pdf)
mermaid_png: $(MMD_FILES:mmd=png)
mermaid_svg: $(MMD_FILES:mmd=svg)

clean:
	rm -f *.temp $(MMD_FILES:mmd=pdf) $(MMD_FILES:mmd=png) $(MMD_FILES:mmd=svg)
