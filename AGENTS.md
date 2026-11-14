# AGENTS.md

Course slides for "Ingénierie des Systèmes d'Information" (front-end development: HTML, JavaScript, DOM, Vue.js), built with reveal.js and Vite. Slide content is in French.

## Layout

- `index.html` lists the slides in presentation order, one `<section data-markdown="slides/<chapter>/<slide>.md">` per slide, grouped by chapter.
- `public/slides/<chapter>/*.md`: the slide content (Markdown with reveal.js fragments).
- `public/code/<example>/`: runnable live examples (`index.html`, `script.js`, `style.css`). A slide embeds one with `<div data-code-example="<example>">`, which `src/main.js` turns into an iframe plus links to GitHub and to the standalone page.
- Classes on code blocks in slides: `not-runnable` hides the "evaluate" button on JavaScript snippets; `fix` is a styling class defined in `style/main.css`.

## Conventions

- When a slide shows the code of a live example, the snippet and the files in `public/code/<example>/` must say the same thing. Change both together.
- Live example files use 4-space indentation. Slide snippets may use tighter indentation (1 or 2 spaces) and fold lines so the code fits on a slide; that difference is intended.
- Examples should be driven by user actions (a button click) rather than timers (`setInterval`), so students can connect the code to what happens. The reactivity examples follow this.

## Teaching decisions (don't flag these as problems)

- In the Vue chapter, "Composants" comes before "Syntaxe de gabarit" on purpose. The template-syntax examples use names returned by `setup()` and the notion of a component instance, so components are introduced first. Templates are described orally as "augmented HTML fragments" at the start of the components section.
- Some forward references are unavoidable and are covered orally by the presenter (for example, `:`/`@`/`v-for` syntax appearing in the demo and components slides before the template-syntax section).
- Prop binding (passing values from a parent component to a child) and attribute binding (binding a value to an HTML attribute) share the `:name="value"` syntax but are taught as distinct concepts. Introducing `:name` in "Composants" and `:value` again in "Syntaxe de gabarit" is not duplication.
- Event modifiers (`.stop`, `.prevent`, `.once`, …) are introduced under "Liaison d'événement" in "Syntaxe de gabarit".
