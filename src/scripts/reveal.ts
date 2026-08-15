import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import RevealMath from "reveal.js/plugin/math/math";
// @ts-ignore
import RevealMermaid from "reveal.js-mermaid-plugin/plugin/mermaid/mermaid";

import { mermaidConfig } from "../utils/mermaid";

type RevealOptions = NonNullable<Parameters<typeof Reveal.initialize>[0]>;

/** Initializes reveal.js with the plugins and mermaid theme used by all decks. */
export function initReveal(options: RevealOptions = {}): void {
	Reveal.initialize({
		// hash: true,
		// @ts-ignore mermaid initialize config, consumed by the mermaid plugin
		mermaid: mermaidConfig,
		plugins: [RevealHighlight, RevealMarkdown, RevealMermaid, RevealMath.KaTeX],
		...options,
	});
}
