class Panel{
  constructor(parent, data) {
    this.parent = parent;
    this.data = data;
    this.content = data.content;
    this.name = data.name;
    this.header = document.createElement("DIV");
    this.body = document.createElement("DIV");
    this.index = 0;
  }

  init(){
    this.header.classList.add("panel-header")
    this.body.classList.add("panel-body")
    this.parent.appendChild(this.header)
    this.parent.appendChild(this.body)
  }

  create(){
    this.content.forEach((item, index) =>{
      const el = document.createElement("DIV")
      el.innerText = item.title
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
    this.body.innerText = this.content[index].text
  }

  run(){
    this.init();
    this.create();
  }
}

const dataPanels = [
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
  }
]