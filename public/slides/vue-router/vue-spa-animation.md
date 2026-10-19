### Application web monopage

* Une page par application
* Requête HTTP asynchrone _si nécessaire_

<div class="r-stack" style="margin-top: 10px">
<div class="fragment fade-out" data-fragment-index="1">  

<div style="display: flex; flex-direction: row">
    <div data-id="app-multi-page-browser" style="height: 300px; width: 300px; background-color: white; color: black; font-size: .5em">
      <pre style="width: 100%; padding-top: 3px; margin: 0"> • • • </pre>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; width: 5em">
    </div>
    <div style="display: flex; align-items: center; justify-content: center; font-size: 128px">🖥</div>
</div>

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">  

<div style="display: flex; flex-direction: row">
    <div data-id="app-multi-page-browser" style="height: 300px; width: 300px; background-color: white; color: black; font-size: .5em">
      <pre style="width: 100%; padding-top: 3px; margin: 0"> • • • https://www.example.com</pre>
      <div style="margin: 4px; width: calc(100% - 8px); height: calc(20% - 24px); background-color: lightgray" class="deferred">
        En-tête fixe
      </div>
      <div style="margin: 4px; display: flex; flex-direction: row; height: calc(80% - 4px);">
        <div style="width: calc(40% - 2px); height:100%; background-color: lightgray" class="deferred">
            Barre fixe
        </div>
        <div style="margin-left: 4px; width: calc(60% - 2px); height: 100%; background-color: lightgray" class="deferred">
            <ul style="margin-top: 20px; text-decoration: underline">
              <li>Article bleu</li>
              <li>Article jaune</li>
            </ul>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 5em">
        <div>➡<br/>1re req</div>
        <div class="deferred">⬅<br/>rés</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; font-size: 128px">🖥</div>
</div>

</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">  

<div style="display: flex; flex-direction: row">
    <div data-id="app-multi-page-browser" style="height: 300px; width: 300px; background-color: white; color: black; font-size: .5em">
      <pre style="width: 100%; padding-top: 3px; margin: 0"> • • • https://www.example.com/blue</pre>
      <div style="margin: 4px; width: calc(100% - 8px); height: calc(20% - 24px); background-color: lightgray">
        En-tête fixe
      </div>
      <div style="margin: 4px; display: flex; flex-direction: row; height: calc(80% - 4px);">
        <div style="width: calc(40% - 2px); height:100%; background-color: lightgray">
            Barre fixe
        </div>
        <div style="margin-left: 4px; width: calc(60% - 2px); height: 100%; background-color: lightblue" class="deferred">
          <h6>Titre</h6>
          <ul style="margin-top: 20px; text-decoration: underline">
            <li>Page principale</li>
          </ul>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 5em">
        <div>?￫<br/>ajax</div>
        <div class="deferred">?￩</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; font-size: 128px">🖥</div>
</div>

</div>

<div class="fragment fade-in-then-out">  

<div style="display: flex; flex-direction: row">
    <div data-id="app-multi-page-browser" style="height: 300px; width: 300px; background-color: white; color: black; font-size: .5em">
      <pre style="width: 100%; padding-top: 3px; margin: 0"> • • • https://www.example.com</pre>
      <div style="margin: 4px; width: calc(100% - 8px); height: calc(20% - 24px); background-color: lightgray">
        En-tête fixe
      </div>
      <div style="margin: 4px; display: flex; flex-direction: row; height: calc(80% - 4px);">
        <div style="width: calc(40% - 2px); height:100%; background-color: lightgray">
            Barre fixe
        </div>
        <div style="margin-left: 4px; width: calc(60% - 2px); height: 100%; background-color: lightgray" class="deferred">
            <ul style="margin-top: 20px; text-decoration: underline">
              <li>Article bleu</li>
              <li>Article jaune</li>
            </ul>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 5em">
        <div>↩</div>
        <div>en mém.</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; font-size: 128px">🖥</div>
</div>

</div>

<div class="fragment">  

<div style="display: flex; flex-direction: row">
    <div data-id="app-multi-page-browser" style="height: 300px; width: 300px; background-color: white; color: black; font-size: .5em">
      <pre style="width: 100%; padding-top: 3px; margin: 0"> • • • https://www.example.com/yellow</pre>
      <div style="margin: 4px; width: calc(100% - 8px); height: calc(20% - 24px); background-color: lightgray">
        En-tête fixe
      </div>
      <div style="margin: 4px; display: flex; flex-direction: row; height: calc(80% - 4px);">
        <div style="width: calc(40% - 2px); height:100%; background-color: lightgray">
            Barre fixe
        </div>
        <div style="margin-left: 4px; width: calc(60% - 2px); height: 100%; background-color: lightyellow" class="deferred">
          <h6>Titre</h6>
          <ul style="margin-top: 20px; text-decoration: underline">
            <li>Page principale</li>
          </ul>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 5em">
        <div>?￫<br/>ajax</div>
        <div class="deferred">?￩</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; font-size: 128px">🖥</div>
</div>

</div>

</div>
