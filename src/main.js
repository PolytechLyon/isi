import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealNotes from 'reveal.js/plugin/notes/notes';

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

function copyToClipboard(event) {
    const text = event.target.closest('code')?.innerText?.trim()
    if (text) {
        navigator.clipboard.writeText(text).then();
    }
}

function createCodeIcons(element) {
    const externalExample = element
        .parentElement
        .previousElementSibling?.getAttribute('data-external-example');
    const externalLink = externalExample ? `<a
                href='${externalExample}'
                target="_blank">
                <img
                    src="images/view.svg"
                    alt="Exemple extèrne" />
          </a>` : '';
    element.innerHTML += `<div class="icons">
            <a 
                class="no-print">
                <img src="images/copy.svg" alt="Copier" />
            </a>
            ${externalLink}
        </div>`;
    element.getElementsByTagName("a")[0].addEventListener("click", copyToClipboard);
}

Reveal.initialize({
    hash: true,
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ],
    navigationMode: 'linear',
}).then(() => {
    document.querySelectorAll('.reveal section [data-code-example]').forEach(createDemoFrame);
    document.querySelectorAll('.reveal section pre code').forEach(createCodeIcons);
    Reveal.sync();
});
