DITAA_COMPILER = ditaa
DITAA_ARGS = -E -o --svg
.PHONY: all ditaa_svg clean

DITAA_FILES=$(shell find . -name '*.ditaa')

%.svg: %.ditaa
	${DITAA_COMPILER} $< $@ ${DITAA_ARGS}

all: ditaa_svg
ditaa_svg: $(DITAA_FILES:ditaa=svg)

clean:
	rm -f $(DITAA_FILES:ditaa=svg)
