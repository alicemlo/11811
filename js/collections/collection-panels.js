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
        text: `In unserem Song-Beispiel haben wir die Songs in zwei fixe Klassen eingeteilt: LIKE oder DISLIKE. Das ist ein typisches Beispiel einer Klassifikation.`,
        image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 321.8072 135.8072">
  <defs>
    <style>
      .klas-1, .klas-3, .klas-4, .klas-9 {
        fill: none;
        stroke: #3bba7d;
        stroke-miterlimit: 10;
      }

      .klas-1 {
        stroke-width: 0.5px;
      }

      .klas-2 {
        font-size: 9px;
      }

      .klas-2, .klas-5, .klas-6, .klas-7, .klas-8 {
        fill: #3bba7d;
      }

      .klas-2, .klas-5, .klas-7, .klas-8 {
        font-family: FiraMono-Regular, Fira Mono;
      }

      .klas-4 {
        stroke-width: 0.4767px;
      }

      .klas-5 {
        font-size: 8px;
      }

      .klas-7 {
        font-size: 12px;
      }

      .klas-8 {
        font-size: 6.4706px;
      }

      .klas-9 {
        stroke-width: 0.4287px;
      }
    </style>
  </defs>
  <g id="Klassifikation2">
    <polyline class="klas-1" points="60.704 95 57 95 57 120 60.704 120"/>
    <polyline class="klas-1" points="80 95 83.704 95 83.704 120 80 120"/>
    <text class="klas-2" transform="translate(60.3369 104.2715)">x: 3<tspan x="0" y="10.7998">y: 5</tspan></text>
    <line class="klas-3" x1="211" y1="105.5" x2="244" y2="105.5"/>
    <line class="klas-3" x1="89" y1="105.5" x2="122" y2="105.5"/>
    <rect class="klas-4" x="107.5" y="72.5" width="118" height="60"/>
    <text class="klas-5" transform="translate(2.7035 64.2344)">Daten des Songs<tspan x="0" y="9.5996">Beispiel </tspan><tspan x="0" y="19.2002">-Lautstärke: 3</tspan><tspan x="0" y="28.7998">-Tempo: 4</tspan></text>
    <g>
      <path class="klas-6" d="M246.3984,57.1562h2.0469v.5674h-2.0469v1.9512h2.5108v.56h-3.1983V54.7256h3.126l-.08.5752h-2.3584Z"/>
      <path class="klas-6" d="M250.3027,56.0205h.5752l.0567.5918a1.8284,1.8284,0,0,1,1.3906-.68c.8232,0,1.1836.4639,1.1836,1.2471v3.0547h-.6719V57.6758c0-.8633-.0879-1.207-.72-1.207a1.48,1.48,0,0,0-1.1426.7031v3.0625h-.6719Z"/>
      <path class="klas-6" d="M257.3174,60.3223a1.2547,1.2547,0,0,1-1.4151-1.2637v-2.51h-.9677v-.5283h.9677v-.9512l.6709-.08v1.0312h1.4639l-.0879.5283h-1.376v2.502c0,.4638.2325.7119.8077.7119a1.6945,1.6945,0,0,0,.8076-.2l.2636.4561A2.2105,2.2105,0,0,1,257.3174,60.3223Z"/>
      <path class="klas-6" d="M262.0771,60.2344l-.5517-3.086-.5918,3.086h-.9277l-.76-4.2139h.68l.5439,3.7979.6719-3.2618h.791l.6319,3.2618.5439-3.7979h.6475l-.7276,4.2139Z"/>
      <path class="klas-6" d="M266.4609,59.7627a1.9046,1.9046,0,0,0,1.127-.376l.3125.4483a2.4035,2.4035,0,0,1-1.44.4873c-1.2314,0-1.9267-.88-1.9267-2.19,0-1.2714.7119-2.1992,1.831-2.1992,1.0635,0,1.7188.792,1.7188,2.0713,0,.1436-.0078.2715-.0156.3594h-2.8311C265.27,59.3389,265.8135,59.7627,266.4609,59.7627Zm-1.2236-1.9111h2.1914c-.0166-.9034-.416-1.3672-1.0557-1.3672C265.749,56.4844,265.2939,56.9238,265.2373,57.8516Z"/>
      <path class="klas-6" d="M272.7012,54.3252v5.9092h-.5918l-.0645-.5518a1.4209,1.4209,0,0,1-1.1914.64c-1.1025,0-1.6064-.88-1.6064-2.19,0-1.2636.6152-2.1992,1.6465-2.1992a1.4207,1.4207,0,0,1,1.1357.5039v-2.19Zm-2.7266,3.8066c0,1.0948.3516,1.6543,1.0156,1.6543a1.2665,1.2665,0,0,0,1.0391-.6709V57.0205a1.1424,1.1424,0,0,0-.959-.5439C270.374,56.4766,269.9746,57.0205,269.9746,58.1318Z"/>
      <path class="klas-6" d="M276.0615,59.7627a1.9046,1.9046,0,0,0,1.127-.376l.3125.4483a2.4035,2.4035,0,0,1-1.4395.4873c-1.2314,0-1.9267-.88-1.9267-2.19,0-1.2714.7109-2.1992,1.831-2.1992,1.0635,0,1.7188.792,1.7188,2.0713,0,.1436-.0078.2715-.0157.3594h-2.831C274.87,59.3389,275.4141,59.7627,276.0615,59.7627Zm-1.2236-1.9111h2.1914c-.0166-.9034-.416-1.3672-1.0557-1.3672C275.35,56.4844,274.8945,56.9238,274.8379,57.8516Z"/>
      <path class="klas-6" d="M282.54,56.0205l-.0957,1.4316H281.9v-.9033h-.04c-.6475,0-1.1114.4629-1.3829,1.3907v1.7753h.8555v.52h-2.19v-.52h.6631V56.54h-.6631v-.52h1.167l.1279,1a1.5716,1.5716,0,0,1,1.5117-1.0879A2.1936,2.1936,0,0,1,282.54,56.0205Z"/>
      <path class="klas-6" d="M288.99,54.7256h.6875v4.8935h2.5186l-.0879.6153H288.99Z"/>
      <path class="klas-6" d="M296.6758,55.2852h-1.2227v4.3974h1.2227v.5518h-3.15v-.5518h1.2236V55.2852h-1.2236v-.56h3.15Z"/>
      <path class="klas-6" d="M298.3418,60.2344V54.7256h.6953v5.5088Zm2.8945-5.5088h.8067l-2.15,2.5264,2.3027,2.9824h-.8711l-2.2471-2.9424Z"/>
      <path class="klas-6" d="M303.998,57.1562h2.0469v.5674H303.998v1.9512h2.5108v.56h-3.1983V54.7256h3.126l-.08.5752H303.998Z"/>
      <path class="klas-6" d="M248.917,67.7236c0,1.295-.64,2.1983-1.8154,2.1983-1.1836,0-1.8145-.8633-1.8145-2.19,0-1.2959.64-2.1992,1.8223-2.1992S248.917,66.3955,248.917,67.7236Zm-2.9024.0078c0,1.1192.3594,1.6387,1.087,1.6387s1.0879-.5195,1.0879-1.6465c0-1.1123-.36-1.64-1.08-1.64C246.3818,66.084,246.0146,66.6113,246.0146,67.7314Z"/>
      <path class="klas-6" d="M253.501,63.9248V69.834h-.5918l-.0645-.5518a1.4209,1.4209,0,0,1-1.1914.64c-1.1025,0-1.6064-.88-1.6064-2.19,0-1.2636.6152-2.1992,1.6465-2.1992a1.4207,1.4207,0,0,1,1.1357.5039v-2.19Zm-2.7266,3.8066c0,1.0948.3516,1.6543,1.0156,1.6543a1.2665,1.2665,0,0,0,1.0391-.6709V66.62a1.1427,1.1427,0,0,0-.96-.5439C251.1738,66.0762,250.7744,66.62,250.7744,67.7314Z"/>
      <path class="klas-6" d="M256.8613,69.3623a1.9046,1.9046,0,0,0,1.127-.376l.3125.4483a2.4035,2.4035,0,0,1-1.4395.4873c-1.2314,0-1.9267-.88-1.9267-2.19,0-1.2714.7119-2.1992,1.831-2.1992,1.0635,0,1.7188.792,1.7188,2.0713,0,.1436-.0078.2715-.0156.3594h-2.8311C255.67,68.9385,256.2139,69.3623,256.8613,69.3623Zm-1.2236-1.9111h2.1914c-.0166-.9033-.416-1.3672-1.0557-1.3672C256.1494,66.084,255.6943,66.5234,255.6377,67.4512Z"/>
      <path class="klas-6" d="M263.34,65.62l-.0957,1.4317H262.7v-.9034h-.04c-.6475,0-1.1114.4629-1.3829,1.3907v1.7754h.8555v.52h-2.19v-.52h.6631V66.14h-.6631v-.52h1.167l.1279,1a1.5713,1.5713,0,0,1,1.5107-1.0879A2.1951,2.1951,0,0,1,263.34,65.62Z"/>
      <path class="klas-6" d="M270.63,69.834h-1.2627V64.3252h1.1748c1.2959,0,2.583.4394,2.583,2.7266C273.125,69.3623,271.7734,69.834,270.63,69.834Zm.08-4.9414h-.6475v4.3818h.6553c.792,0,1.6631-.4,1.6631-2.2226C272.3809,65.1328,271.47,64.8926,270.71,64.8926Z"/>
      <path class="klas-6" d="M277.4766,64.8848h-1.2227v4.3974h1.2227v.5518h-3.15v-.5518H275.55V64.8848h-1.2236v-.56h3.15Z"/>
      <path class="klas-6" d="M280.5811,69.9219a2.7138,2.7138,0,0,1-1.9346-.6953l.416-.4717a2.1111,2.1111,0,0,0,1.5273.5918c.6709,0,1.2793-.3281,1.2793-1.0235,0-.5361-.2558-.8-1.1992-1.0722-1.0957-.3194-1.7754-.7188-1.7754-1.5908,0-.8311.7276-1.4229,1.7832-1.4229a2.5391,2.5391,0,0,1,1.7588.6318l-.416.4473a1.9714,1.9714,0,0,0-1.3193-.4961c-.6074,0-1.1035.2647-1.1035.8164,0,.4717.3359.711,1.3837,1.0147.8633.248,1.6153.6084,1.6153,1.6552C282.5967,69.2588,281.86,69.9219,280.5811,69.9219Z"/>
      <path class="klas-6" d="M284.19,64.3252h.6884v4.8936h2.5186l-.0879.6152H284.19Z"/>
      <path class="klas-6" d="M291.876,64.8848h-1.2237v4.3974h1.2237v.5518h-3.15v-.5518h1.2236V64.8848h-1.2236v-.56h3.15Z"/>
      <path class="klas-6" d="M293.542,69.834V64.3252h.6953V69.834Zm2.8945-5.5088h.8076l-2.1513,2.5264,2.3027,2.9824h-.8711l-2.2471-2.9424Z"/>
      <path class="klas-6" d="M299.1973,66.7559h2.0468v.5673h-2.0468v1.9512h2.5107v.56H298.51V64.3252h3.1259l-.08.5752h-2.3584Z"/>
    </g>
    <text class="klas-2" transform="translate(253.7035 107.2344)">LIKE</text>
    <text class="klas-7" transform="translate(244.7035 43.2344)">Output</text>
    <text class="klas-7" transform="translate(2.7035 45.2344)">Input</text>
    <text class="klas-7" transform="translate(141.7035 107.2344)">Modell</text>
  </g>
</svg>
        `,
      },
      {
        title: 'Regression',
        text: `Hätten wir jedoch jeden Song auf einer Skala von 0 bis 1 bewertet und jedem Song diesem Wert zugewiesen, hätten wir ein regressives Modell generiert. Als Output wird uns das Modell also einen Wert berechnen, der auf dieser Skala liegt. `,
        image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 321.8072 131.8072">
  <defs>
    <style>
      .reg-1, .reg-3, .reg-4, .reg-8 {
        fill: none;
        stroke: #3bba7d;
        stroke-miterlimit: 10;
      }

      .reg-1 {
        stroke-width: 0.5px;
      }

      .reg-2 {
        font-size: 9px;
      }

      .reg-2, .reg-5, .reg-6, .reg-7 {
        fill: #3bba7d;
        font-family: FiraMono-Regular, Fira Mono;
      }

      .reg-4 {
        stroke-width: 0.4767px;
      }

      .reg-5 {
        font-size: 8px;
      }

      .reg-6 {
        font-size: 12px;
      }

      .reg-7 {
        font-size: 6.4706px;
      }

      .reg-8 {
        stroke-width: 0.3731px;
      }
    </style>
  </defs>
  <g id="Regression2">
    <polyline class="reg-1" points="60.704 91 57 91 57 116 60.704 116"/>
    <polyline class="reg-1" points="80 91 83.704 91 83.704 116 80 116"/>
    <text class="reg-2" transform="translate(60.3369 100.2715)">x: 3<tspan x="0" y="10.7998">y: 5</tspan></text>
    <line class="reg-3" x1="211" y1="101.5" x2="244" y2="101.5"/>
    <line class="reg-3" x1="89" y1="101.5" x2="122" y2="101.5"/>
    <rect class="reg-4" x="107.5" y="68.5" width="118" height="60"/>
    <text class="reg-5" transform="translate(2.7035 60.2344)">Daten des Songs<tspan x="0" y="9.5996">Beispiel </tspan><tspan x="0" y="19.2002">-Lautstärke: 3</tspan><tspan x="0" y="28.7998">-Tempo: 4</tspan></text>
    <text class="reg-5" transform="translate(244.7035 56.2344)">Wert zwischen <tspan x="0" y="9.5996">0 und 1</tspan></text>
    <text class="reg-2" transform="translate(253.7035 103.2344)">0.7</text>
    <text class="reg-6" transform="translate(244.7035 39.2344)">Output</text>
    <text class="reg-6" transform="translate(2.7035 41.2344)">Input</text>
    <text class="reg-6" transform="translate(141.7035 103.2344)">Modell</text>
  </g>
</svg>
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