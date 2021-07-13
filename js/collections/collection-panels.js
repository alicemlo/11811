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
      el.classList.add('gclick')
      el.setAttribute('data-index', index)
      el.setAttribute('data-id', generateRandomID())
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
    name: 'panel-discrimination',
    content: [
      {
        title: 'Gesichtserkennung',
        text: 'Modelle zur Erkennung von Gesichtern wurden lange nur mit männlichen, hellhäutigen Gesichtern trainiert. Das hat bis heute zur Folge, dass die Gesichtserkennung bei Männern mit heller Haut besser funktioniert als bei Frauen oder bei Leuten mit dunklerer Hautfarbe.'
      },
      {
        title: "Amazon",
        text: 'Amazon hat einen Bewerbungsroboter entwickelt, der für die Recruiter eine Vorauswahl an Bewerbern getroffen hat. Das System verglich die neuen Bewerbungen mit den erfolgreichen Neueinstellungen der letzten zehn Jahre. Da die meisten Mitarbeiter bei Amazon männlich waren, zog der Roboter den Schluss, dass Männer besser geeignet seien als Frauen und bevorzgte demnach Bewerbungen von Männern. Nach der Aufdeckung dieses Fehlers wird dieses System heute nur noch sehr eingeschränk eingesetzt.'
      },
      {
        title: 'COMPAS',
        text: 'Compas ist eine Software aus den USA, welche die Rückfallwahrscheinlichkeit von Angeklagten bestimmt. Diese soll den RichterInnen helfen einzuschätzen, mit welcher Wahrscheinlichkeit die angeklagte Person erneut eine Straftat begeht. Auch dieses Modell basiert auf den Daten der letzten Jahre. Das hat zur Folge, dass das System bei der Einschätzung der Rückfallswahrscheinlichkeit die Hautfarbe der angeklagten Person miteinbezieht. Dadruch wird das Risiko einer erneuten Straftat bei dunkelhäutige Personen automatisch höher eingeschätzt als bei hellhäutigen. '
      },
    ]
  },
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
    name: 'examples-ai',
    content: [
      {
        title: 'KI in der Radiologie - Krebsfrüherkennung',
        text: 'Künstlich intelligente Systeme können Abweichungen in einer Menge von Datensätzen gtu erkennen. In der Radiologie kann diese Mustererkennung sehr hilfreich sein, krankhafte Verändernungen (bsp. Tumore) auf Bildern zu identifizieren.'
      },
      {
        title: 'Wie Zalando KI einsetzt',
        text: 'Zalando setzt KI ein, um jedem Kunden ein personalisiertes Kauferlebnis zu ermöglichen. [ Lernmethode: unüberwacht, Assoziation ]'
      },
      {
        title: 'Intelligente Chatbots',
        text: 'Das Verstehen und Verarbeiten von Text und Sprache ist auch ein Teilgebiet von KI. Dadurch können Chatbots gebaut werden, welche die Fragen und Anliegen von Kunden verstehen und dementsprechend antworten.'
      }
    ]
  },
  {
    name: 'panel-1',
    content: [
      {
        title: 'Visuelle Intelligenz',
        text: 'Visuelle Intelligenz kann man auch als intelligente Bildverarbeitung beschreiben: Ein Algorithmus ist dabei fähig, Formen bzw. Muster auf Bildern zu erkennen. Ein einfaches Beispiel dafür ist die Unterscheidung zwischen Hund und Katze (Objekterkennung) auf einem Bild. Visuelle Intelligenz kann aber auch für Gesichtserkennung eingesetzt werden.',
      },
      {
        title: 'Sprachliche Intelligenz',
        text: 'Auch bekannt unter Natural Language Processing. Gemeint ist die maschinelle Verarbeitung von natürlicher Sprache: Texte aber auch gesprochene Sprache werden vom Algorithmus erkannt und analysiert. Sprachliche Intelligent ist momentan noch sehr schwierig künstlich zu generieren, weil der KI neben logischen Prozessen auch Weltwissen und ein Verständnis für Zusammenhänge zwischen den Sätzen angeignet werden müssen.',
      },
      {
        title: 'Robotics',
        text: 'In diesem sehr interdisziplinären Fachgebiet beschäftigt man sich damit, wie mechanische Vorgänge mit intelligenten Systemen verknüpft werden können. Intelligente Roboter sind in der Lage selbstständig mit Umwelt zu interagieren. Häufig werden diese in der Industrie eingesetzt. In der Landwirtschaft können Roboter zum Beispiel eingesetzt werden, um selbstständig Unkraut zu jätten.',
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
        font-family: droid-sans-mono, monospace;
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
        font-family: droid-sans-mono, monospace;
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
    name: 'unsupervised-learning',
    content: [
      {
        title: 'Cluster Analyse',
        text: 'Clustering kommt zum Beispiel im Marketing zum Einsatz, um verschiedene Kundensegmente zu identifizieren, um diese Kundensegemente besser ansprechen zu können.',
        image: `
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 570.8072 241.8072">
  <defs>
    <style>
      .clus-1, .clus-3, .clus-4 {
        fill: none;
        stroke: #3bba7d;
        stroke-miterlimit: 10;
      }

      .clus-1 {
        stroke-linecap: round;
      }

      .clus-2 {
        font-size: 12px;
        font-family: droid-sans-mono, monospace;
      }

      .clus-2, .clus-5 {
        fill: #3bba7d;
      }

      .clus-3 {
        stroke-width: 0.7644px;
      }

      .clus-4 {
        stroke-width: 0.7168px;
      }

      .clus-6 {
        opacity: 0.55;
      }

      .clus-7 {
        opacity: 0.2;
      }
    </style>
  </defs>
  <g id="clustering">
    <g>
      <line class="clus-1" x1="304" y1="143" x2="314.5" y2="133.5"/>
      <line class="clus-1" x1="314.5" y1="133.5" x2="304" y2="124"/>
      <line class="clus-1" x1="230.5" y1="133.5" x2="314.5" y2="133.5"/>
    </g>
    <g id="Label">
      <text class="clus-2" transform="translate(10.0691 18.916)">unclustered</text>
      <rect class="clus-3" x="5.991" y="4.5" width="89.509" height="20"/>
    </g>
    <g id="Label-2" data-name="Label">
      <text class="clus-2" transform="translate(327.0691 18.916)">clustered</text>
      <rect class="clus-4" x="322.991" y="4.5" width="76.509" height="20"/>
    </g>
    <g id="g2">
      <circle class="clus-5" cx="481.0008" cy="223.0315" r="4.8632"/>
      <circle class="clus-5" cx="444.5269" cy="221.4104" r="4.8632"/>
      <circle class="clus-5" cx="450.2006" cy="197.9051" r="4.8632"/>
      <circle class="clus-5" cx="458.306" cy="176.8313" r="4.8632"/>
      <circle class="clus-5" cx="502.0746" cy="231.1368" r="4.8632"/>
      <circle class="clus-5" cx="436.4216" cy="195.4735" r="4.8632"/>
      <circle class="clus-5" cx="446.148" cy="210.8736" r="4.8632"/>
      <circle class="clus-5" cx="489.1061" cy="181.6945" r="4.8632"/>
      <circle class="clus-5" cx="540.9801" cy="180.0734" r="4.8632"/>
      <circle class="clus-5" cx="550.7064" cy="189.7998" r="4.8632"/>
      <circle class="clus-5" cx="555.5696" cy="218.1683" r="4.8632"/>
      <circle class="clus-5" cx="523.1484" cy="193.0419" r="4.8632"/>
      <circle class="clus-5" cx="562.0539" cy="211.6841" r="4.8632"/>
      <circle class="clus-5" cx="559.6223" cy="200.3367" r="4.8632"/>
      <circle class="clus-5" cx="560.4328" cy="201.1472" r="4.8632"/>
      <circle class="clus-5" cx="557.1907" cy="176.8313" r="4.8632"/>
      <circle class="clus-5" cx="536.1169" cy="196.284" r="4.8632"/>
      <circle class="clus-5" cx="532.0642" cy="164.6733" r="4.8632"/>
      <circle class="clus-5" cx="498.022" cy="153.3259" r="4.8632"/>
      <circle class="clus-5" cx="507.7483" cy="163.0522" r="4.8632"/>
      <circle class="clus-5" cx="512.6115" cy="191.4208" r="4.8632"/>
      <circle class="clus-5" cx="468.8429" cy="212.4946" r="4.8632"/>
      <circle class="clus-5" cx="480.1903" cy="166.2944" r="4.8632"/>
      <circle class="clus-5" cx="468.8429" cy="227.8947" r="4.8632"/>
      <circle class="clus-5" cx="532.8748" cy="138.7363" r="4.8632"/>
      <circle class="clus-5" cx="519.0957" cy="184.9366" r="4.8632"/>
      <circle class="clus-5" cx="516.6642" cy="173.5891" r="4.8632"/>
      <circle class="clus-5" cx="431.5584" cy="179.2629" r="4.8632"/>
      <circle class="clus-5" cx="493.1588" cy="210.8736" r="4.8632"/>
      <circle class="clus-5" cx="470.4639" cy="197.0945" r="4.8632"/>
      <circle class="clus-5" cx="484.2429" cy="137.9258" r="4.8632"/>
      <circle class="clus-5" cx="493.1588" cy="198.7156" r="4.8632"/>
      <circle class="clus-5" cx="465.6007" cy="134.6837" r="4.8632"/>
      <circle class="clus-5" cx="549.8959" cy="159.8101" r="4.8632"/>
      <circle class="clus-5" cx="517.4747" cy="174.3997" r="4.8632"/>
      <circle class="clus-5" cx="472.085" cy="164.6733" r="4.8632"/>
      <circle class="clus-5" cx="516.6642" cy="146.0311" r="4.8632"/>
      <circle class="clus-5" cx="487.4851" cy="154.9469" r="4.8632"/>
      <circle class="clus-5" cx="469.6534" cy="153.3259" r="4.8632"/>
      <circle class="clus-5" cx="465.6007" cy="188.1787" r="4.8632"/>
      <circle class="clus-5" cx="493.1588" cy="169.5365" r="4.8632"/>
      <circle class="clus-5" cx="502.0746" cy="188.9892" r="4.8632"/>
      <circle class="clus-5" cx="446.148" cy="178.4523" r="4.8632"/>
      <circle class="clus-5" cx="470.4639" cy="154.1364" r="4.8632"/>
      <circle class="clus-5" cx="475.3271" cy="182.505" r="4.8632"/>
    </g>
    <g id="g1" class="clus-6">
      <circle class="clus-5" cx="439.6638" cy="147.6522" r="4.8632"/>
      <circle class="clus-5" cx="455.0638" cy="144.41" r="4.8632"/>
      <circle class="clus-5" cx="335.9158" cy="143.5995" r="4.8632"/>
      <circle class="clus-5" cx="336.7264" cy="83.6202" r="4.8632"/>
      <circle class="clus-5" cx="345.6422" cy="116.0415" r="4.8632"/>
      <circle class="clus-5" cx="331.8632" cy="134.6837" r="4.8632"/>
      <circle class="clus-5" cx="365.9055" cy="124.1468" r="4.8632"/>
      <circle class="clus-5" cx="359.4212" cy="146.8416" r="4.8632"/>
      <circle class="clus-5" cx="352.1264" cy="137.1153" r="4.8632"/>
      <circle class="clus-5" cx="388.6003" cy="167.9154" r="4.8632"/>
      <circle class="clus-5" cx="388.6003" cy="111.1783" r="4.8632"/>
      <circle class="clus-5" cx="378.874" cy="134.6837" r="4.8632"/>
      <circle class="clus-5" cx="355.3686" cy="169.5365" r="4.8632"/>
      <circle class="clus-5" cx="379.6845" cy="149.2732" r="4.8632"/>
      <circle class="clus-5" cx="391.0319" cy="146.8416" r="4.8632"/>
      <circle class="clus-5" cx="408.0531" cy="128.1994" r="4.8632"/>
      <circle class="clus-5" cx="389.4109" cy="124.9573" r="4.8632"/>
      <circle class="clus-5" cx="365.9055" cy="171.1576" r="4.8632"/>
      <circle class="clus-5" cx="425.0742" cy="162.2417" r="4.8632"/>
      <circle class="clus-5" cx="455.8744" cy="158.9996" r="4.8632"/>
      <circle class="clus-5" cx="451.8217" cy="112.7994" r="4.8632"/>
      <circle class="clus-5" cx="438.8532" cy="163.8628" r="4.8632"/>
      <circle class="clus-5" cx="431.5584" cy="112.7994" r="4.8632"/>
      <circle class="clus-5" cx="423.4531" cy="99.0203" r="4.8632"/>
      <circle class="clus-5" cx="421.0215" cy="85.2413" r="4.8632"/>
      <circle class="clus-5" cx="404.8109" cy="107.9362" r="4.8632"/>
      <circle class="clus-5" cx="366.716" cy="138.7363" r="4.8632"/>
      <circle class="clus-5" cx="384.5477" cy="158.9996" r="4.8632"/>
      <circle class="clus-5" cx="408.8636" cy="138.7363" r="4.8632"/>
      <circle class="clus-5" cx="418.59" cy="148.4627" r="4.8632"/>
      <circle class="clus-5" cx="412.1057" cy="171.1576" r="4.8632"/>
      <circle class="clus-5" cx="379.6845" cy="197.9051" r="4.8632"/>
      <circle class="clus-5" cx="432.369" cy="127.3889" r="4.8632"/>
      <circle class="clus-5" cx="404.8109" cy="92.5361" r="4.8632"/>
      <circle class="clus-5" cx="418.59" cy="114.4204" r="4.8632"/>
      <circle class="clus-5" cx="442.9059" cy="94.1571" r="4.8632"/>
      <circle class="clus-5" cx="404.8109" cy="161.4312" r="4.8632"/>
    </g>
    <g id="g1-2" data-name="g1" class="clus-7">
      <circle class="clus-5" cx="508.085" cy="108.6619" r="4.8632"/>
      <circle class="clus-5" cx="518.8688" cy="120.1242" r="4.8632"/>
      <circle class="clus-5" cx="457.5468" cy="17.9648" r="4.8632"/>
      <circle class="clus-5" cx="486.1403" cy="11.9266" r="4.8632"/>
      <circle class="clus-5" cx="463.0505" cy="9.8639" r="4.8632"/>
      <circle class="clus-5" cx="489.766" cy="33.4475" r="4.8632"/>
      <circle class="clus-5" cx="467.0125" cy="39.723" r="4.8632"/>
      <circle class="clus-5" cx="471.5209" cy="28.4318" r="4.8632"/>
      <circle class="clus-5" cx="464.2053" cy="75.6067" r="4.8632"/>
      <circle class="clus-5" cx="512.6517" cy="46.0762" r="4.8632"/>
      <circle class="clus-5" cx="487.5186" cy="50.0052" r="4.8632"/>
      <circle class="clus-5" cx="445.5247" cy="48.0747" r="4.8632"/>
      <circle class="clus-5" cx="475.4829" cy="58.2908" r="4.8632"/>
      <circle class="clus-5" cx="483.4652" cy="66.7145" r="4.8632"/>
      <circle class="clus-5" cx="508.2425" cy="71.5456" r="4.8632"/>
      <circle class="clus-5" cx="501.308" cy="53.94" r="4.8632"/>
      <circle class="clus-5" cx="449.6247" cy="57.9156" r="4.8632"/>
      <circle class="clus-5" cx="488.0338" cy="103.7978" r="4.8632"/>
      <circle class="clus-5" cx="506.833" cy="128.4098" r="4.8632"/>
      <circle class="clus-5" cx="544.1729" cy="100.9031" r="4.8632"/>
      <circle class="clus-5" cx="493.8213" cy="116.4071" r="4.8632"/>
      <circle class="clus-5" cx="533.6263" cy="83.6008" r="4.8632"/>
      <circle class="clus-5" cx="541.1732" cy="69.5082" r="4.8632"/>
      <circle class="clus-5" cx="551.6732" cy="60.2602" r="4.8632"/>
      <circle class="clus-5" cx="523.8573" cy="58.2306" r="4.8632"/>
      <circle class="clus-5" cx="477.7302" cy="41.7331" r="4.8632"/>
      <circle class="clus-5" cx="469.709" cy="67.5058" r="4.8632"/>
      <circle class="clus-5" cx="499.6672" cy="77.7219" r="4.8632"/>
      <circle class="clus-5" cx="496.4244" cy="91.0894" r="4.8632"/>
      <circle class="clus-5" cx="473.671" cy="97.3648" r="4.8632"/>
      <circle class="clus-5" cx="521.5905" cy="91.8864" r="4.8632"/>
      <circle class="clus-5" cx="537.007" cy="50.2152" r="4.8632"/>
      <circle class="clus-5" cx="525.4923" cy="73.3711" r="4.8632"/>
      <circle class="clus-5" cx="555.4505" cy="83.5872" r="4.8632"/>
      <circle class="clus-5" cx="478.1793" cy="86.0736" r="4.8632"/>
    </g>
    <g id="g2-2" data-name="g2">
      <circle class="clus-5" cx="168.0008" cy="223.0315" r="4.8632"/>
      <circle class="clus-5" cx="131.5269" cy="221.4104" r="4.8632"/>
      <circle class="clus-5" cx="137.2006" cy="197.9051" r="4.8632"/>
      <circle class="clus-5" cx="145.306" cy="176.8313" r="4.8632"/>
      <circle class="clus-5" cx="189.0746" cy="231.1368" r="4.8632"/>
      <circle class="clus-5" cx="123.4216" cy="195.4735" r="4.8632"/>
      <circle class="clus-5" cx="133.148" cy="210.8736" r="4.8632"/>
      <circle class="clus-5" cx="176.1061" cy="181.6945" r="4.8632"/>
      <circle class="clus-5" cx="227.9801" cy="180.0734" r="4.8632"/>
      <circle class="clus-5" cx="237.7064" cy="189.7998" r="4.8632"/>
      <circle class="clus-5" cx="242.5696" cy="218.1683" r="4.8632"/>
      <circle class="clus-5" cx="210.1484" cy="193.0419" r="4.8632"/>
      <circle class="clus-5" cx="249.0539" cy="211.6841" r="4.8632"/>
      <circle class="clus-5" cx="246.6223" cy="200.3367" r="4.8632"/>
      <circle class="clus-5" cx="247.4328" cy="201.1472" r="4.8632"/>
      <circle class="clus-5" cx="244.1907" cy="176.8313" r="4.8632"/>
      <circle class="clus-5" cx="223.1169" cy="196.284" r="4.8632"/>
      <circle class="clus-5" cx="219.0642" cy="164.6733" r="4.8632"/>
      <circle class="clus-5" cx="185.022" cy="153.3259" r="4.8632"/>
      <circle class="clus-5" cx="194.7483" cy="163.0522" r="4.8632"/>
      <circle class="clus-5" cx="199.6115" cy="191.4208" r="4.8632"/>
      <circle class="clus-5" cx="155.8429" cy="212.4946" r="4.8632"/>
      <circle class="clus-5" cx="167.1903" cy="166.2944" r="4.8632"/>
      <circle class="clus-5" cx="155.8429" cy="227.8947" r="4.8632"/>
      <circle class="clus-5" cx="219.8748" cy="138.7363" r="4.8632"/>
      <circle class="clus-5" cx="206.0957" cy="184.9366" r="4.8632"/>
      <circle class="clus-5" cx="203.6642" cy="173.5891" r="4.8632"/>
      <circle class="clus-5" cx="118.5584" cy="179.2629" r="4.8632"/>
      <circle class="clus-5" cx="180.1588" cy="210.8736" r="4.8632"/>
      <circle class="clus-5" cx="157.4639" cy="197.0945" r="4.8632"/>
      <circle class="clus-5" cx="171.2429" cy="137.9258" r="4.8632"/>
      <circle class="clus-5" cx="180.1588" cy="198.7156" r="4.8632"/>
      <circle class="clus-5" cx="152.6007" cy="134.6837" r="4.8632"/>
      <circle class="clus-5" cx="236.8959" cy="159.8101" r="4.8632"/>
      <circle class="clus-5" cx="204.4747" cy="174.3997" r="4.8632"/>
      <circle class="clus-5" cx="159.085" cy="164.6733" r="4.8632"/>
      <circle class="clus-5" cx="203.6642" cy="146.0311" r="4.8632"/>
      <circle class="clus-5" cx="174.4851" cy="154.9469" r="4.8632"/>
      <circle class="clus-5" cx="156.6534" cy="153.3259" r="4.8632"/>
      <circle class="clus-5" cx="152.6007" cy="188.1787" r="4.8632"/>
      <circle class="clus-5" cx="180.1588" cy="169.5365" r="4.8632"/>
      <circle class="clus-5" cx="189.0746" cy="188.9892" r="4.8632"/>
      <circle class="clus-5" cx="133.148" cy="178.4523" r="4.8632"/>
      <circle class="clus-5" cx="157.4639" cy="154.1364" r="4.8632"/>
      <circle class="clus-5" cx="162.3271" cy="182.505" r="4.8632"/>
    </g>
    <g id="g1-3" data-name="g1">
      <circle class="clus-5" cx="126.6638" cy="147.6522" r="4.8632"/>
      <circle class="clus-5" cx="142.0638" cy="144.41" r="4.8632"/>
      <circle class="clus-5" cx="22.9158" cy="143.5995" r="4.8632"/>
      <circle class="clus-5" cx="23.7264" cy="83.6202" r="4.8632"/>
      <circle class="clus-5" cx="32.6422" cy="116.0415" r="4.8632"/>
      <circle class="clus-5" cx="18.8632" cy="134.6837" r="4.8632"/>
      <circle class="clus-5" cx="52.9055" cy="124.1468" r="4.8632"/>
      <circle class="clus-5" cx="46.4212" cy="146.8416" r="4.8632"/>
      <circle class="clus-5" cx="39.1264" cy="137.1153" r="4.8632"/>
      <circle class="clus-5" cx="75.6003" cy="167.9154" r="4.8632"/>
      <circle class="clus-5" cx="75.6003" cy="111.1783" r="4.8632"/>
      <circle class="clus-5" cx="65.874" cy="134.6837" r="4.8632"/>
      <circle class="clus-5" cx="42.3686" cy="169.5365" r="4.8632"/>
      <circle class="clus-5" cx="66.6845" cy="149.2732" r="4.8632"/>
      <circle class="clus-5" cx="78.0319" cy="146.8416" r="4.8632"/>
      <circle class="clus-5" cx="95.0531" cy="128.1994" r="4.8632"/>
      <circle class="clus-5" cx="76.4109" cy="124.9573" r="4.8632"/>
      <circle class="clus-5" cx="52.9055" cy="171.1576" r="4.8632"/>
      <circle class="clus-5" cx="112.0742" cy="162.2417" r="4.8632"/>
      <circle class="clus-5" cx="142.8744" cy="158.9996" r="4.8632"/>
      <circle class="clus-5" cx="138.8217" cy="112.7994" r="4.8632"/>
      <circle class="clus-5" cx="125.8532" cy="163.8628" r="4.8632"/>
      <circle class="clus-5" cx="118.5584" cy="112.7994" r="4.8632"/>
      <circle class="clus-5" cx="110.4531" cy="99.0203" r="4.8632"/>
      <circle class="clus-5" cx="108.0215" cy="85.2413" r="4.8632"/>
      <circle class="clus-5" cx="91.8109" cy="107.9362" r="4.8632"/>
      <circle class="clus-5" cx="53.716" cy="138.7363" r="4.8632"/>
      <circle class="clus-5" cx="71.5477" cy="158.9996" r="4.8632"/>
      <circle class="clus-5" cx="95.8636" cy="138.7363" r="4.8632"/>
      <circle class="clus-5" cx="105.59" cy="148.4627" r="4.8632"/>
      <circle class="clus-5" cx="99.1057" cy="171.1576" r="4.8632"/>
      <circle class="clus-5" cx="66.6845" cy="197.9051" r="4.8632"/>
      <circle class="clus-5" cx="119.369" cy="127.3889" r="4.8632"/>
      <circle class="clus-5" cx="91.8109" cy="92.5361" r="4.8632"/>
      <circle class="clus-5" cx="105.59" cy="114.4204" r="4.8632"/>
      <circle class="clus-5" cx="129.9059" cy="94.1571" r="4.8632"/>
      <circle class="clus-5" cx="91.8109" cy="161.4312" r="4.8632"/>
    </g>
    <g id="g1-4" data-name="g1">
      <circle class="clus-5" cx="195.085" cy="108.6619" r="4.8632"/>
      <circle class="clus-5" cx="205.8688" cy="120.1242" r="4.8632"/>
      <circle class="clus-5" cx="144.5468" cy="17.9648" r="4.8632"/>
      <circle class="clus-5" cx="173.1403" cy="11.9266" r="4.8632"/>
      <circle class="clus-5" cx="150.0505" cy="9.8639" r="4.8632"/>
      <circle class="clus-5" cx="176.766" cy="33.4475" r="4.8632"/>
      <circle class="clus-5" cx="154.0125" cy="39.723" r="4.8632"/>
      <circle class="clus-5" cx="158.5209" cy="28.4318" r="4.8632"/>
      <circle class="clus-5" cx="151.2053" cy="75.6067" r="4.8632"/>
      <circle class="clus-5" cx="199.6517" cy="46.0762" r="4.8632"/>
      <circle class="clus-5" cx="174.5186" cy="50.0052" r="4.8632"/>
      <circle class="clus-5" cx="132.5247" cy="48.0747" r="4.8632"/>
      <circle class="clus-5" cx="162.4829" cy="58.2908" r="4.8632"/>
      <circle class="clus-5" cx="170.4652" cy="66.7145" r="4.8632"/>
      <circle class="clus-5" cx="195.2425" cy="71.5456" r="4.8632"/>
      <circle class="clus-5" cx="188.308" cy="53.94" r="4.8632"/>
      <circle class="clus-5" cx="136.6247" cy="57.9156" r="4.8632"/>
      <circle class="clus-5" cx="175.0338" cy="103.7978" r="4.8632"/>
      <circle class="clus-5" cx="193.833" cy="128.4098" r="4.8632"/>
      <circle class="clus-5" cx="231.1729" cy="100.9031" r="4.8632"/>
      <circle class="clus-5" cx="180.8213" cy="116.4071" r="4.8632"/>
      <circle class="clus-5" cx="220.6263" cy="83.6008" r="4.8632"/>
      <circle class="clus-5" cx="228.1732" cy="69.5082" r="4.8632"/>
      <circle class="clus-5" cx="238.6732" cy="60.2602" r="4.8632"/>
      <circle class="clus-5" cx="210.8573" cy="58.2306" r="4.8632"/>
      <circle class="clus-5" cx="164.7302" cy="41.7331" r="4.8632"/>
      <circle class="clus-5" cx="156.709" cy="67.5058" r="4.8632"/>
      <circle class="clus-5" cx="186.6672" cy="77.7219" r="4.8632"/>
      <circle class="clus-5" cx="183.4244" cy="91.0894" r="4.8632"/>
      <circle class="clus-5" cx="160.671" cy="97.3648" r="4.8632"/>
      <circle class="clus-5" cx="208.5905" cy="91.8864" r="4.8632"/>
      <circle class="clus-5" cx="224.007" cy="50.2152" r="4.8632"/>
      <circle class="clus-5" cx="212.4923" cy="73.3711" r="4.8632"/>
      <circle class="clus-5" cx="242.4505" cy="83.5872" r="4.8632"/>
      <circle class="clus-5" cx="165.1793" cy="86.0736" r="4.8632"/>
    </g>
  </g>
</svg>       
        `
      },
      {
        title: 'Assoziation',
        text: 'Ein typisches Beispiel für eine Assoziationsanalyse ist die Warenkorbanalyse: Man untersucht, welche Produkte häufig gleichzeitig gekauft werden. Zum Beispiel ist es sehr wahrscheinlich, dass beim Einkauf von Bier gleichzeitig auf Chips gekauft werden.',
        image: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 570.81 241.81"><defs><style>.assoc-1,.assoc-3{fill:#3bba7d;}.assoc-2{fill:none;stroke:#3bba7d;stroke-miterlimit:10;}.assoc-3{font-size:10px;font-family:FiraMono-Regular, Fira Mono;}</style></defs><g id="association"><ellipse class="assoc-1" cx="145" cy="115" rx="14.64" ry="15.15" transform="translate(-36.35 151.93) rotate(-49.93)"/><circle class="assoc-1" cx="202" cy="210" r="7"/><circle class="assoc-1" cx="450.53" cy="143.82" r="16.47"/><circle class="assoc-1" cx="288" cy="188" r="24"/><circle class="assoc-1" cx="230" cy="213" r="6"/><circle class="assoc-1" cx="262" cy="117" r="12"/><circle class="assoc-1" cx="82.03" cy="160.13" r="5.5"/><circle class="assoc-1" cx="383.05" cy="96.73" r="9"/><circle class="assoc-1" cx="130.47" cy="39.11" r="9"/><circle class="assoc-1" cx="102.05" cy="57.09" r="5.5"/><circle class="assoc-1" cx="180.51" cy="19.19" r="4" transform="translate(102.1 182.91) rotate(-70.48)"/><circle class="assoc-1" cx="208.5" cy="176.5" r="5.5"/><circle class="assoc-1" cx="103.5" cy="229.5" r="5.5"/><circle class="assoc-1" cx="100.5" cy="211.5" r="5.5"/><circle class="assoc-1" cx="347.92" cy="26.02" r="5.5"/><circle class="assoc-1" cx="308.92" cy="57.02" r="5.5"/><circle class="assoc-1" cx="522.96" cy="232.07" r="5.5"/><circle class="assoc-1" cx="482.67" cy="202.04" r="5.5"/><circle class="assoc-1" cx="39.01" cy="75.65" r="5"/><circle class="assoc-1" cx="67.83" cy="90.11" r="9"/><circle class="assoc-1" cx="14.53" cy="14.59" r="5"/><circle class="assoc-1" cx="499.15" cy="175.79" r="6.21"/><circle class="assoc-1" cx="531.25" cy="155.06" r="5.94"/><line class="assoc-2" x1="144.5" y1="114.5" x2="288.5" y2="187.5"/><line class="assoc-2" x1="450.5" y1="144.5" x2="288.5" y2="187.5"/><line class="assoc-2" x1="262.5" y1="117.5" x2="288.5" y2="187.5"/><line class="assoc-2" x1="130.17" y1="38.48" x2="145.75" y2="117.21"/><line class="assoc-2" x1="102.05" y1="57.09" x2="130.5" y2="38.5"/><line class="assoc-2" x1="180.51" y1="19.19" x2="130.17" y2="38.48"/><line class="assoc-2" x1="288.5" y1="187.5" x2="208.5" y2="176.5"/><line class="assoc-2" x1="68.5" y1="90.5" x2="82.03" y2="160.13"/><line class="assoc-2" x1="144.5" y1="115.5" x2="82.03" y2="160.13"/><line class="assoc-2" x1="101.67" y1="56.65" x2="15.5" y2="14.5"/><line class="assoc-2" x1="451.13" y1="143.45" x2="382.69" y2="96.12"/><line class="assoc-2" x1="348.5" y1="26.5" x2="382.69" y2="96.12"/><line class="assoc-2" x1="450.89" y1="144.42" x2="528.7" y2="154.93"/><line class="assoc-2" x1="37.76" y1="74.67" x2="68.47" y2="89.81"/><line class="assoc-2" x1="102.05" y1="57.09" x2="68.5" y2="90.5"/><line class="assoc-2" x1="208.5" y1="176.5" x2="228.5" y2="214.5"/><line class="assoc-2" x1="288.5" y1="187.5" x2="228.5" y2="214.5"/><line class="assoc-2" x1="530.88" y1="154.46" x2="522.77" y2="232.19"/><line class="assoc-2" x1="498.78" y1="175.18" x2="530.88" y2="154.46"/><line class="assoc-2" x1="522.77" y1="232.19" x2="498.78" y2="175.18"/><line class="assoc-2" x1="482.67" y1="202.04" x2="499.51" y2="176.4"/><line class="assoc-2" x1="522.5" y1="232.5" x2="482.67" y2="202.04"/><line class="assoc-2" x1="145.5" y1="117.5" x2="102.05" y2="57.09"/><line class="assoc-2" x1="14.56" y1="13.01" x2="37.5" y2="76.5"/><line class="assoc-2" x1="103.5" y1="229.5" x2="202.5" y2="210.5"/><line class="assoc-2" x1="100.5" y1="211.5" x2="202.5" y2="210.5"/><line class="assoc-2" x1="202.5" y1="208.5" x2="209.5" y2="176.5"/><line class="assoc-2" x1="230.5" y1="213.5" x2="202.5" y2="208.5"/><line class="assoc-2" x1="384" y1="97" x2="309" y2="57"/><line class="assoc-2" x1="450.5" y1="144.5" x2="499.5" y2="175.5"/><line class="assoc-2" x1="482.5" y1="201.5" x2="450.5" y2="144.5"/><line class="assoc-2" x1="68.13" y1="90.75" x2="146.36" y2="118.49"/><line class="assoc-2" x1="39.5" y1="75.5" x2="102.5" y2="57.5"/><g id="Label"><text class="assoc-3" transform="translate(309.07 210.92)">Regel 2</text></g><g id="Label-2" data-name="Label"><text class="assoc-3" transform="translate(160.07 104.92)">Regel 1</text></g><g id="Label-3" data-name="Label"><text class="assoc-3" transform="translate(460.07 124.92)">Regel 3</text></g></g></svg>`,
      },
      {
        title: 'Anomalie Erkennung',
        text: 'Mit dieser Methode können Abweichungen in grossen Datensätzen identifiziert werden. Das ist zum Beispiel hilfreich in der Radiologie bei der Erkennung von Tumor oder im Web, um betrügerische Inhalte zu erkennen (Bsp. Spam Mails).',
        image: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 570.8072 241.8072"><defs><style>.anom-1{opacity:0.6;}.anom-2{fill:none;stroke:#3bba7d;stroke-linecap:round;stroke-miterlimit:10;}.anom-3{fill:#3bba7d;}</style></defs><g id="anomaly"><g class="anom-1"><line class="anom-2" x1="519.7717" y1="32.8056" x2="523.7092" y2="29.2431"/><line class="anom-2" x1="523.7092" y1="29.2431" x2="519.7717" y2="25.6806"/><line class="anom-2" x1="511.2092" y1="29.2431" x2="523.7092" y2="29.2431"/></g><circle class="anom-3" cx="535.6921" cy="29.0964" r="4.8632"/><g class="anom-1"><line class="anom-2" x1="292.5625" y1="75" x2="296.5" y2="71.4375"/><line class="anom-2" x1="296.5" y1="71.4375" x2="292.5625" y2="67.875"/><line class="anom-2" x1="284" y1="71.4375" x2="296.5" y2="71.4375"/></g><circle class="anom-3" cx="308.4829" cy="71.2908" r="4.8632"/><g class="anom-1"><line class="anom-2" x1="148.5625" y1="106" x2="152.5" y2="102.4375"/><line class="anom-2" x1="152.5" y1="102.4375" x2="148.5625" y2="98.875"/><line class="anom-2" x1="140" y1="102.4375" x2="152.5" y2="102.4375"/></g><circle class="anom-3" cx="164.4829" cy="102.2908" r="4.8632"/><g class="anom-1"><line class="anom-2" x1="60.5625" y1="46" x2="64.5" y2="42.4375"/><line class="anom-2" x1="64.5" y1="42.4375" x2="60.5625" y2="38.875"/><line class="anom-2" x1="52" y1="42.4375" x2="64.5" y2="42.4375"/></g><circle class="anom-3" cx="162.4829" cy="178.2908" r="4.8632"/><circle class="anom-3" cx="544.4829" cy="205.2908" r="4.8632"/><circle class="anom-3" cx="554.4829" cy="187.2908" r="4.8632"/><circle class="anom-3" cx="552.4829" cy="227.2908" r="4.8632"/><circle class="anom-3" cx="524.4829" cy="215.2908" r="4.8632"/><circle class="anom-3" cx="522.4829" cy="231.2908" r="4.8632"/><circle class="anom-3" cx="564.4829" cy="232.2908" r="4.8632"/><circle class="anom-3" cx="557.4829" cy="211.2908" r="4.8632"/><circle class="anom-3" cx="531.4829" cy="235.2908" r="4.8632"/><circle class="anom-3" cx="499.4829" cy="229.2908" r="4.8632"/><circle class="anom-3" cx="505.4829" cy="195.2908" r="4.8632"/><circle class="anom-3" cx="453.4829" cy="231.2908" r="4.8632"/><circle class="anom-3" cx="483.4829" cy="214.2908" r="4.8632"/><circle class="anom-3" cx="462.4829" cy="193.2908" r="4.8632"/><circle class="anom-3" cx="488.4829" cy="201.2908" r="4.8632"/><circle class="anom-3" cx="452.4829" cy="206.2908" r="4.8632"/><circle class="anom-3" cx="442.4829" cy="203.2908" r="4.8632"/><circle class="anom-3" cx="418.4829" cy="209.2908" r="4.8632"/><circle class="anom-3" cx="480.4829" cy="226.2908" r="4.8632"/><circle class="anom-3" cx="475.4829" cy="199.2908" r="4.8632"/><circle class="anom-3" cx="433.4829" cy="222.2908" r="4.8632"/><circle class="anom-3" cx="463.4829" cy="220.2908" r="4.8632"/><circle class="anom-3" cx="522.4829" cy="196.2908" r="4.8632"/><circle class="anom-3" cx="488.4829" cy="183.2908" r="4.8632"/><circle class="anom-3" cx="443.4829" cy="230.2908" r="4.8632"/><circle class="anom-3" cx="468.4829" cy="206.2908" r="4.8632"/><circle class="anom-3" cx="499.4829" cy="210.2908" r="4.8632"/><circle class="anom-3" cx="405.4829" cy="198.2908" r="4.8632"/><circle class="anom-3" cx="440.4829" cy="179.2908" r="4.8632"/><circle class="anom-3" cx="421.4829" cy="236.2908" r="4.8632"/><circle class="anom-3" cx="332.4829" cy="214.2908" r="4.8632"/><circle class="anom-3" cx="76.4829" cy="42.2908" r="4.8632"/><circle class="anom-3" cx="291.4829" cy="166.2908" r="4.8632"/><circle class="anom-3" cx="405.4829" cy="232.2908" r="4.8632"/><circle class="anom-3" cx="381.4829" cy="208.2908" r="4.8632"/><circle class="anom-3" cx="407.4829" cy="216.2908" r="4.8632"/><circle class="anom-3" cx="389.4829" cy="230.2908" r="4.8632"/><circle class="anom-3" cx="361.4829" cy="218.2908" r="4.8632"/><circle class="anom-3" cx="367.4829" cy="231.2908" r="4.8632"/><circle class="anom-3" cx="420.4829" cy="193.2908" r="4.8632"/><circle class="anom-3" cx="394.4829" cy="214.2908" r="4.8632"/><circle class="anom-3" cx="325.4829" cy="233.2908" r="4.8632"/><circle class="anom-3" cx="338.4829" cy="195.2908" r="4.8632"/><circle class="anom-3" cx="364.4829" cy="203.2908" r="4.8632"/><circle class="anom-3" cx="346.4829" cy="217.2908" r="4.8632"/><circle class="anom-3" cx="318.4829" cy="205.2908" r="4.8632"/><circle class="anom-3" cx="316.4829" cy="221.2908" r="4.8632"/><circle class="anom-3" cx="356.4829" cy="228.2908" r="4.8632"/><circle class="anom-3" cx="351.4829" cy="201.2908" r="4.8632"/><circle class="anom-3" cx="252.4829" cy="198.2908" r="4.8632"/><circle class="anom-3" cx="293.4829" cy="219.2908" r="4.8632"/><circle class="anom-3" cx="275.4829" cy="233.2908" r="4.8632"/><circle class="anom-3" cx="247.4829" cy="221.2908" r="4.8632"/><circle class="anom-3" cx="245.4829" cy="233.2908" r="4.8632"/><circle class="anom-3" cx="296.4829" cy="235.2908" r="4.8632"/><circle class="anom-3" cx="296.4829" cy="206.2908" r="4.8632"/><circle class="anom-3" cx="256.4829" cy="183.2908" r="4.8632"/><circle class="anom-3" cx="282.4829" cy="191.2908" r="4.8632"/><circle class="anom-3" cx="225.4829" cy="229.2908" r="4.8632"/><circle class="anom-3" cx="236.4829" cy="193.2908" r="4.8632"/><circle class="anom-3" cx="260.4829" cy="213.2908" r="4.8632"/><circle class="anom-3" cx="274.4829" cy="216.2908" r="4.8632"/><circle class="anom-3" cx="269.4829" cy="189.2908" r="4.8632"/><circle class="anom-3" cx="53.4829" cy="196.2908" r="4.8632"/><circle class="anom-3" cx="13.4829" cy="208.2908" r="4.8632"/><circle class="anom-3" cx="46.4829" cy="174.2908" r="4.8632"/><circle class="anom-3" cx="20.4829" cy="186.2908" r="4.8632"/><circle class="anom-3" cx="89.4829" cy="228.2908" r="4.8632"/><circle class="anom-3" cx="102.4829" cy="218.2908" r="4.8632"/><circle class="anom-3" cx="138.4829" cy="211.2908" r="4.8632"/><circle class="anom-3" cx="159.4829" cy="206.2908" r="4.8632"/><circle class="anom-3" cx="121.4829" cy="221.2908" r="4.8632"/><circle class="anom-3" cx="133.4829" cy="199.2908" r="4.8632"/><circle class="anom-3" cx="79.4829" cy="204.2908" r="4.8632"/><circle class="anom-3" cx="104.4829" cy="196.2908" r="4.8632"/><circle class="anom-3" cx="61.4829" cy="218.2908" r="4.8632"/><circle class="anom-3" cx="33.4829" cy="206.2908" r="4.8632"/><circle class="anom-3" cx="31.4829" cy="222.2908" r="4.8632"/><circle class="anom-3" cx="121.4829" cy="202.2908" r="4.8632"/><circle class="anom-3" cx="71.4829" cy="229.2908" r="4.8632"/><circle class="anom-3" cx="66.4829" cy="202.2908" r="4.8632"/><circle class="anom-3" cx="88.4829" cy="192.2908" r="4.8632"/><circle class="anom-3" cx="157.4829" cy="234.2908" r="4.8632"/><circle class="anom-3" cx="170.4829" cy="224.2908" r="4.8632"/><circle class="anom-3" cx="206.4829" cy="217.2908" r="4.8632"/><circle class="anom-3" cx="227.4829" cy="212.2908" r="4.8632"/><circle class="anom-3" cx="189.4829" cy="227.2908" r="4.8632"/><circle class="anom-3" cx="201.4829" cy="205.2908" r="4.8632"/><circle class="anom-3" cx="147.4829" cy="210.2908" r="4.8632"/><circle class="anom-3" cx="172.4829" cy="202.2908" r="4.8632"/><circle class="anom-3" cx="129.4829" cy="224.2908" r="4.8632"/><circle class="anom-3" cx="106.4829" cy="227.2908" r="4.8632"/><circle class="anom-3" cx="86.4829" cy="215.2908" r="4.8632"/></g></svg>        
        `
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