class CollectionPanel{
  constructor(parent, data) {
    this.parent = parent;
    this.data = data;
    this.content = data.content;
    this.name = data.name;
    this.header = document.createElement("DIV");
    this.body = document.createElement("DIV");
    this.ctImage = document.createElement('DIV')
    this.index = 0;
  }

  init(){
    this.header.classList.add("panel-header")
    this.body.classList.add("panel-body")
    this.ctImage.classList.add("panel-image")
    this.parent.appendChild(this.header)
    this.parent.appendChild(this.body)
    this.parent.appendChild(this.ctImage)
  }

  create(){
    this.content.forEach((item, index) =>{
      const el = document.createElement("DIV")
      el.innerHTML = item.title
      el.setAttribute('data-index', index)
      this.header.appendChild(el)
      el.onclick = () => this.update(el)
      if(index===0) this.update(el)
    })
  }

  removeClasses(){
    Array.from(this.header.children).forEach(item => item.classList.remove('active'))
  }

  update(el){
    const index = el.getAttribute('data-index')
    this.removeClasses();
    el.classList.add('active')
    this.body.innerHTML = this.content[index].text
    if(this.content[index].image) this.ctImage.innerHTML = this.content[index].image
    else this.ctImage.innerText = ''
  }

  run(){
    this.init();
    this.create();
  }
}

const COLLECTION_PANELS = [
  {
    name: 'panel-0',
    content: [
      {
        title: "1. Heransgehensweise (die langsame Variante)",
        text: 'Du analysierst die Wetterdaten sehr genau an und erkennst Muster und Häufigkeiten. Dir fällt aus, dass es im Sommer wärmer ist wie im Winter oder dass nach einem langsamen Aufstieg des Luftdrucks sonniges Wetter folgt. \n           Du stellst also ganz viele solcher Regeln und Gesetzmässigkeiten auf, anhand deren du dir eine Prognose für die kommenden Tage aufstellen kannst. Du beschreibst einem Computer diese Regeln, damit der Rechner die die genauen Zahlen ausrechnen kann.'
      },
      {
        title: '2. Heransgehensweise (der effiziente Weg)',
        text: 'Du gehst direkt an den Computer und generierst dein eigenes künstliches Modell. Dafür übergibst du dem System deine Daten. Es braucht jetzt eine Weile, bis das Modell fertig trainiert ist.Sobald es die Wetterdaten analysiert hat und daraus gelernt hat, kann es dir innert Sekunden eine Wetterprognose aufstellen. Ausserdem bleibt es weiterhin lernfähig: Die Prognosen werden immer besser, weil es seine Vorhersage wieder mit den den echten Daten vergleichen kann und so seinen Algorithmus ständig anpasst. Aus diesem Prozess hast du vielleicht nicht gelernt, dass auf eine klare Nacht ein kalter Morgen folgt, jedoch konntest du in dieser Zeit viel effiziereter anderes lernen.  '
      }
    ]
  },
  {
    name: 'panel-1',
    content: [
      {
        title: 'Visuelle Intelligenz',
        text: 'Visuelle Intelligenz kann man auch als intelligente Bildverarbeitung beschreiben: Ein Algorithmus ist dabei fähig, Formen bzw. Muster auf Bildern zu erkennen. Ein einfach Beispiel dafür ist die Unterscheidung zwischen Hund und Katze (Objekterkennung) auf einem Bild. Visuelle Intelligenz kann aber auch für Gesichtserkennung eingesetzt werden.',
      },
      {
        title: 'Sprachliche Intelligenz',
        text: 'Auch bekannt unter Natural Language Processing. Gemeint ist die maschinelle Verarbeitung von natürlicher Sprache: Texte aber auch gesprochene Sprache wird vom Algorithmus erkannt und analysiert. -> Eher neu und am Anfang der Entwicklung, Sinn / Kontext, Weltwissen mit Logik ..',
      },
      {
        title: 'Robotics',
        text: 'Bsp. Roboter, der Unkraut jätten kann.',
      },
    ]
  },
  {
    name: 'supervised-lerning',
    content: [
      {
        title: 'Klassifikation',
        text: `Die Vorhersage des Modells wird als Output eine Klasse / ein Label ausgeben. Eine Klasse wäre zum Beispiel HUND.</br>Das Modell, dass die Songs vorher trainiert hat, basiert auch auf Klassifikation: Die Vorhersage war entweder LIKE oder DISLIKE`,
        image: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 301"><defs><style>.cls-1{font-size:16px;}.cls-1,.cls-4{fill:#3bba7d;font-family:FiraMono-Regular, Fira Mono;}.cls-22,.cls-33{fill:none;stroke:#3bba7d;stroke-miterlimit:10;}.cls-2{stroke-width:1.086px;}.cls-33{stroke-linecap:round;}.cls-4{font-size:27px;}</style></defs><g id="klassifikation"><text class="cls-1" transform="translate(452.5781 21.1807)">Klassifikation</text><rect class="cls-22" x="443.5" y="2" width="154.5" height="26"/><line class="cls-33" x1="382" y1="260" x2="392.5" y2="250.5"/><line class="cls-33" x1="392.5" y1="250.5" x2="382" y2="241"/><line class="cls-33" x1="172" y1="250.5" x2="392.5" y2="250.5"/><text class="cls-1" transform="translate(402 68.8276)">Song 3<tspan x="0" y="19.2002">Tempo: 7</tspan><tspan x="0" y="38.3999">Lautstärke: 9</tspan><tspan x="0" y="57.6001">Output: DISLIKE</tspan></text><text class="cls-1" transform="translate(205 68.8276)">Song 2<tspan x="0" y="19.2002">Tempo: 6</tspan><tspan x="0" y="38.3999">Lautstärke: 4</tspan><tspan x="0" y="57.6001">Output: DISLIKE</tspan></text><text class="cls-1" transform="translate(8 68.8276)">Song 1 <tspan x="0" y="19.2002">Tempo: 2</tspan><tspan x="0" y="38.3999">Lautstärke: 5</tspan><tspan x="0" y="57.6001">Output: LIKE</tspan></text><text class="cls-1" transform="translate(8 240.8276)">Input<tspan x="0" y="19.2002">Tempo: 1</tspan><tspan x="0" y="38.3999">Lautstärke: 3</tspan></text><text class="cls-1" transform="translate(225 240.8276)">Vorhersage</text><text class="cls-1" transform="translate(422 240.8276)">Output<tspan x="0" y="19.2002">LIKE</tspan></text><text class="cls-4" transform="translate(8 206.0664)">Modell</text><text class="cls-4" transform="translate(8 31.0664)">Trainingsdaten</text></g></svg>
        `,
      },
      {
        title: 'Regression',
        text: `Als Ergbnis liefert das trainierte Modell ein stetiger Wert / eine Zahl. Hätten wir den Songs im vorherigen Beispiel nicht mit einer Klasse beschriftet, sondern mit einer Zahl zwischen 1 und 10 bewertet, hätte uns das Modell bei der Vorhersage einen Wert ausgerechnet, wie sehr wir einen Song mögen. Das wäre eine regressiver Output`,
        image: `
        <svg id="Regression" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 301"><defs><style>.cls-1{font-size:16px;}.cls-1,.cls-4{fill:#3bba7d;font-family:FiraMono-Regular, Fira Mono;}.cls-22,.cls-33{fill:none;stroke:#3bba7d;stroke-miterlimit:10;}.cls-2{stroke-width:0.9226px;}.cls-33{stroke-linecap:round;}.cls-4{font-size:27px;}</style></defs><text class="cls-1" transform="translate(494.0691 20.916)">Regression</text><rect class="cls-22" x="485.991" y="1.7354" width="111.509" height="26"/><line class="cls-33" x1="382" y1="260" x2="392.5" y2="250.5"/><line class="cls-33" x1="392.5" y1="250.5" x2="382" y2="241"/><line class="cls-33" x1="172" y1="250.5" x2="392.5" y2="250.5"/><text class="cls-1" transform="translate(402 68.8276)">Song 3<tspan x="0" y="19.2002">Tempo: 7</tspan><tspan x="0" y="38.3999">Lautstärke: 9</tspan><tspan x="0" y="57.6001">Output: 0.3</tspan></text><text class="cls-1" transform="translate(205 68.8276)">Song 2<tspan x="0" y="19.2002">Tempo: 6</tspan><tspan x="0" y="38.3999">Lautstärke: 4</tspan><tspan x="0" y="57.6001">Output: 0.5</tspan></text><text class="cls-1" transform="translate(8 68.8276)">Song 1 <tspan x="0" y="19.2002">Tempo: 2</tspan><tspan x="0" y="38.3999">Lautstärke: 5</tspan><tspan x="0" y="57.6001">Output: 0.8</tspan></text><text class="cls-1" transform="translate(8 240.8276)">Input<tspan x="0" y="19.2002">Tempo: 1</tspan><tspan x="0" y="38.3999">Lautstärke: 3</tspan></text><text class="cls-1" transform="translate(225 240.8276)">Vorhersage</text><text class="cls-1" transform="translate(422 240.8276)">Output<tspan x="0" y="19.2002">0.76</tspan></text><text class="cls-4" transform="translate(8 206.0664)">Modell</text><text class="cls-4" transform="translate(8 31.0664)">Trainingsdaten</text></svg>
        `,
      }
    ]
  },
  {
    name: 'bsp2',
    content: [
      {
        title: '',
        text: ''
      },
      {
        title: '',
        text: ''
      }
    ]
  },
  {
    name: 'bsp3',
    content: [
      {
        title: '',
        text: ''
      },
      {
        title: '',
        text: ''
      }
    ]
  }
]