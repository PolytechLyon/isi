import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealNotes from 'reveal.js/plugin/notes/notes';

const evalConsole = {
    element: undefined,
    timeoutId: undefined,
    close() {
        evalConsole.element?.close();
        evalConsole.element.innerHTML = "";
        document.removeEventListener("keyup", evalConsole.close);
    },
    open(html) {
        evalConsole.element.innerHTML = html;
        evalConsole.element?.showModal();
        document.addEventListener("keyup", evalConsole.close);
        clearTimeout(evalConsole.timeoutId);
        evalConsole.timeoutId = setTimeout(evalConsole.close, 7_000);
    }
};

function createDemoFrame(element) {
    const example = element.getAttribute('data-code-example');
    if (!example) return;
    const size = element.getAttribute('data-code-example-size');
    size && element.classList.add(size);
    const demoLink = `code/${example}/index.html`;
    const frame = element.closest('.reveal-print') ?
        `<div class="frame"><a href="${demoLink}">Voir dans le navigateur</a></div>` :
        `<iframe class="frame" src="${demoLink}"></iframe>`;
    element.innerHTML += `
        ${frame}
        <div class="icons">
            <a
                href='https://github.com/PolytechLyon/isi1/tree/master/public/code/${example}'
                class="icon"
                target="_blank">
                    <img src="images/github.svg" alt="GitHub"/>
                </a>
            <a
                href='${demoLink}'
                class="icon"
                target="_blank">
                    <img src="images/preview.svg" alt="Afficher"/>
            </a>
        </div>
    `;
}

function extractTextFromEvent(event) {
    return event.target.closest('code')?.innerText?.trim();
}

function copyToClipboard(event) {
    const text = extractTextFromEvent(event);
    if (!text) {
        return;
    }
    navigator.clipboard.writeText(text).then();
}

function evaluateSnippet(event) {
    const text = extractTextFromEvent(event);
    if (!evalConsole.element) {
        return;
    }
    const output = [];
    let value;
    const originalLog = console.log;
    try {
        console.log = (...args) => output.push(args);
        value = eval(text);
    } catch (error) {
        value = error;
    } finally {
        console.log = originalLog;
    }
    if (value !== undefined) {
        output.push([], [value]);
    }
    const html = output.map(args => args.join(" ")).join("<br />");
    evalConsole.open(html);
}

function createCodeIcons(element) {
    const externalExample = element
        .parentElement
        .previousElementSibling?.getAttribute('data-external-example');
    const isSnippet = !!element.closest(".javascript");
    const externalLink = externalExample ? `<a
                href='${externalExample}'
                target="_blank">
                <img
                    src="images/view.svg"
                    alt="Exemple extèrne" />
        </a>` : '';
    const evalButton = isSnippet ? `<a
                class="eval-icon no-print">
                <img src="images/play.svg" alt="Évaluer" />
        </a>` : '';

    element.innerHTML += `<div class="icons">
            <a
                class="copy-icon no-print">
                <img src="images/copy.svg" alt="Copier" />
            </a>
            ${externalLink}
            ${evalButton}
        </div>`;
    element.getElementsByClassName("copy-icon")[0].addEventListener("click", copyToClipboard);
    element.getElementsByClassName("eval-icon")[0]?.addEventListener("click", evaluateSnippet);
}

function prepareEvalConsole() {
    evalConsole.element = document.getElementById("eval-console");
    evalConsole.element.addEventListener("click", evalConsole.close);
}

Reveal.initialize({
    hash: true,
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ],
    navigationMode: 'linear',
}).then(() => {
    prepareEvalConsole();
    document.querySelectorAll('.reveal section [data-code-example]').forEach(createDemoFrame);
    document.querySelectorAll('.reveal section pre code').forEach(createCodeIcons);
    Reveal.sync();
});
