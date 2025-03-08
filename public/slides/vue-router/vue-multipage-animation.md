### Application web classiques

* Une page par lien
* Requête HTTP obligatoire

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
      <div style="margin: 4px; width: calc(100% - 8px); height: calc(100% - 24px); background-color: gray" class="deferred">
        <ul style="margin-top: 20px; text-decoration: underline">
          <li>Article bleu</li>
          <li>Article jaune</li>
        </ul>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 5em">
        <div>➡<br/>req</div>
        <div class="deferred">⬅<br/>rés</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; font-size: 128px">🖥</div>
</div>

</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

<div style="display: flex; flex-direction: row">
    <div data-id="app-multi-page-browser" style="height: 300px; width: 300px; background-color: white; color: black; font-size: .5em">
      <pre style="width: 100%; padding-top: 3px; margin: 0"> • • • https://www.example.com/blue</pre>
      <div style="margin: 4px; width: calc(100% - 8px); height: calc(100% - 24px); background-color: lightblue" class="deferred">
        <h6>Titre</h6>
        <ul style="margin-top: 20px; text-decoration: underline">
          <li>Page principale</li>
        </ul>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 5em">
        <div>➡<br/>req</div>
        <div class="deferred">⬅<br/>rés</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; font-size: 128px">🖥</div>
</div>

</div>

<div class="fragment">  

<div style="display: flex; flex-direction: row">
    <div data-id="app-multi-page-browser" style="height: 300px; width: 300px; background-color: white; color: black; font-size: .5em">
      <pre style="width: 100%; padding-top: 3px; margin: 0"> • • • https://www.example.com</pre>
      <div style="margin: 4px; width: calc(100% - 8px); height: calc(100% - 24px); background-color: gray" class="deferred">
        <ul style="margin-top: 20px; text-decoration: underline">
          <li>Article bleu</li>
          <li>Article jaune</li>
        </ul>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 5em">
        <div>➡<br/>req</div>
        <div class="deferred">⬅<br/>rés</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; font-size: 128px">🖥</div>
</div>

</div>

<div class="fragment">  

<div style="display: flex; flex-direction: row">
    <div data-id="app-multi-page-browser" style="height: 300px; width: 300px; background-color: white; color: black; font-size: .5em">
      <pre style="width: 100%; padding-top: 3px; margin: 0"> • • • https://www.example.com/yellow</pre>
      <div style="margin: 4px; width: calc(100% - 8px); height: calc(100% - 24px); background-color: lightyellow" class="deferred">
        <h6>Titre</h6>
        <ul style="margin-top: 20px; text-decoration: underline">
          <li>Page principale</li>
        </ul>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 5em">
        <div>➡<br/>req</div>
        <div class="deferred">⬅<br/>rés</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; font-size: 128px">🖥</div>
</div>

</div>

</div>
