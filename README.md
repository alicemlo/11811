## 11811

## Single Page Application (vanilla js)
Das Grundgerüst dieser Seite funktioniert ohne Framework, sondern basiert auf diesem [SPA-Setup](https://github.com/managervcf/vanilla-js-single-page-app).


## Live Server
`npm run dev` -> bringt den Live Server zum Laufen


## Ordnerstruktur
`/assets` -> Bilder & Icons
`/data` -> Darin ist das Model eines selbst trainierten Gestenerkennungsmodell gespeichert. Aus diesem Ordner wird nur das Modell gebraucht, 
das zwischen einer geschlossenen Hand und einer Faust unterscheiden kann (data/models/hand-open)
`/js` -> In diesem Ordner befinden sind alle Scrips für Klassen, Collections, Funktionen und Variablen
`/services` -> beinhaltet nur eine Datei für das SPA Setup
`/style` -> beinhaltet alles, was zu CSS / SCSS gehört
`/views` -> beinhaltet alle Seiten, sowie Footer- und Header-Komponente