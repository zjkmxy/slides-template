/** Shared mermaid configuration, used both by the reveal.js mermaid plugin and
 * by the `Mermaid` component, so the theme is declared in a single place. */
export const mermaidConfig = {
	theme: "dark",
	themeVariables: {
		darkMode: true,
		fontSize: "20px",
	},
	class: {
		useMaxWidth: false,
	},
} satisfies Record<string, unknown>;

export type MermaidConfig = typeof mermaidConfig;

/** Builds a mermaid `%%{init: ...}%%` directive from the shared config. */
export function mermaidInit(overrides: Record<string, unknown> = {}): string {
	return `%%{init: ${JSON.stringify({ ...mermaidConfig, ...overrides })}}%%`;
}

/** Removes the common leading indentation, so diagrams can be indented inline. */
export function dedent(code: string): string {
	const lines = code.replace(/\t/g, "  ").split("\n");
	const indents = lines
		.filter((line) => line.trim().length > 0)
		.map((line) => line.length - line.trimStart().length);
	const common = indents.length > 0 ? Math.min(...indents) : 0;
	return lines
		.map((line) => line.slice(common))
		.join("\n")
		.trim();
}
