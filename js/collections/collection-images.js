class CollectionImage{
  constructor(parent, data) {
    this.parent = parent;
    this.data = data;
    this.content = data.content;
    this.sourceName = data.content.source
    this.indications = data.content.indications
    this.startIndex = data.start_index || null;
    this.source = SVGS.find(item => item.name===this.sourceName).content
    this.text = data.content.text

    this.svgContainer = document.createElement('DIV')
    this.nextButton = document.createElement('BUTTON')
    this.ctText = document.createElement('DIV')

    this.index =  -1
    this.layers = null
    this.length = null
  }

  init(){
    this.nextButton.classList.add('btn-svg')
    this.nextButton.classList.add('gclick')
    this.nextButton.setAttribute('data-id', generateRandomID())
    this.ctText.classList.add('text-svg')
    this.nextButton.innerText = '-> '+this.indications[0]
    this.svgContainer.innerHTML = this.source
    this.ctText.innerText = this.text[0] + '  '
    this.parent.appendChild(this.svgContainer)
    this.parent.appendChild(this.ctText)
    this.ctText.appendChild(this.nextButton)
    this.layers = document.querySelectorAll(`.${this.sourceName}-layer`)
    this.length = this.layers.length-1
    if(this.startIndex) this.update(this.index++);
  }

  create(){
    this.nextButton.onclick = () => this.update(this.index++);
  }

  reset(){
    if(this.startIndex) this.index = 0
    else this.index=-1
  }

  checkIndex(){
    if(this.index>this.length) this.reset()
  }

  update(){
    this.checkIndex()
    this.layers.forEach(layer => layer.classList.remove('visible'))
    this.setContent();
  }

  setContent(){
    const i = this.index
    const activeLayer = this.layers[i]
    if(activeLayer) activeLayer.classList.add('visible')
    this.nextButton.innerText = '-> '+this.indications[i+1]
    this.ctText.innerText = this.text[i+1]+ '  '
    this.ctText.appendChild(this.nextButton)
  }

  run(){
    this.init()
    this.create()
  }
}

const COLLECTION_IMAGES = [
  {
    name: 'svg-songs',
    content: {
      indications: ['Daten visualisieren','alle Daten darstellen', 'Modell trainieren', 'Erste Vorhersage', 'Ergebnis', 'Mehr Vorhersagen', 'Übersicht', 'neu starten'],
      source: 'songs',
      text: [
        "Du erstellst eine Liste mit 14 Songs. 7 Davon magst du, 7 nicht",
        "Die Songs werden nach den Eigenschafen Lautstärke und Tempo grafisch darsgestellt",
        "So sehen alle Daten grafisch dargestellt aus. Mit diesem Datensatz kann das Modell trainiert werden",
        "",
        "Wir können nun irgendeinen neuen Song darstellen. Du musst jetzt nicht mehr selber klassifizieren, ob du den Song magst oder nicht. Wir lassen das Modell diese Klassifizierung durchführen.",
        "So wie es aussieht, wirst du diesen Song mögen",
        "Wie können das Modell mit beliebig vielen Songs austesten.",
        ''
      ]
    }
  },
  {
    name: 'svg-cluster',
    content: {
      indications:['Daten darstellen', 'Cluster organisieren', 'neu'],
      source: 'cluster',
      text: [
        "Bei einem Cluster...",
        "text 2",
        "text 2",
      ]
    }
  },
  {
    name: 'supervised-unsupervised',
    start_index: 1,
    content: {
      indications:['-', 'Vorbereitung des Trainings', 'Output', 'Einsatz', "Lernverfahren", "wann sich welches Verfahren eignet" , "von vorne beginnen"],
      source: 'super',
      text: [
        "-",
        "Der entscheidende Unterschied dieser beiden Lernmethoden besteht bei den Trainingsdaten, anhand derer die Modelle trainiert werden. ",
        "Bei der überwachten Methode werden die Daten vor dem Training strukturiert. Daher werden bei dieser Methode viel weniger Daten eingesetzt als beim unüberwachten Training. \n" +
        "\n" +
        "Dahingegen braucht es beim unüberwachten Lernen keine Vorbereitung. Da sehr viele Daten zur Verfügung stehen, kann die KI von alleine Muster in den Daten erkennen.",
        "Beim Strukturieren der Daten wird jeder Datensatz mit einem Label beschriftet oder einem Wert zugewiesen. Diese geben dem Modell vor, wie es lernen sollte. \n" +
        "\n" +
        "Da das Modell bei der unüberwachten Lernmethode selber Muster erkennt, kennen wir den Output bzw. die Vorhersage des Modells (noch) nicht.",
        "Ein Modell, das mit strukturierten Daten trainiert wurde, wird nur einmal trainiert, bevor man es einsetzt. Es richtet seine Vorhersagen immer nach den Beispieldaten, mit denen es trainiert wurde. \n" +
        "\n" +
        "Anders sieht es bei der unüberwachten Methode aus: Zum einem benötigt das Modell sehr viele Daten, bis die Mustererkennung gut funktioniert. Anschliessend kann es in Echtzeit mit immer mehr Daten gefüttert werden, anhand derer es sich verbessern kann. Hier liegt der entscheidende Vorteil dieser Methode.",
        "Bei beiden Methoden können unterschiedliche Verfahren eingesetzt werden. Jedes Verfahren hat seinen Einsatzbereich. In der Darstellung sind die Relevantesten aufgeführt.",
        "Um herauszufinden, wann man welches Verfahren braucht, fragt man sich am Besten, welches Ziel man mit seinem Modell erreichen möchte.",
        "",
      ]
    }
  },
  {
    name: 'svg-beispiel 2',
    content: {
      indications:['clustering', 'reset'],
      source: 'cluster',
      text: [
        "text 1",
        "text 2",
      ]
    }
  },
]





const SVGS = [
  {
    name: 'super',
    content: ` 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
  <defs>
    <style>
      .super-1 {
        font-size: 6.4706px;
      }

      .super-1, .super-11, .super-12, .super-14, .super-15, .super-16, .super-17, .super-18, .super-19, .super-4, .super-5, .super-7 {
        fill: #3bba7d;
      }

      .super-1, .super-12, .super-7 {
        font-family: droid-sans-mono, monospace;
      }

      .super-10, .super-13, .super-2, .super-20, .super-21, .super-3, .super-6, .super-8 {
        fill: none;
      }

      .super-10, .super-13, .super-15, .super-17, .super-18, .super-19, .super-2, .super-20, .super-21, .super-3, .super-5, .super-6, .super-8 {
        stroke: #3bba7d;
        stroke-miterlimit: 10;
      }

      .super-2 {
        stroke-width: 0.486px;
      }

      .super-3 {
        stroke-width: 0.5138px;
      }

      .super-7 {
        font-size: 8.425px;
      }

      .super-10, .super-8 {
        stroke-width: 0.7021px;
      }

      .super-9 {
        opacity: 0.6;
      }

      .super-10, .super-13, .super-20 {
        stroke-linecap: round;
      }

      .super-11 {
        opacity: 0.34;
      }

      .super-12 {
        font-size: 6px;
      }

      .super-13 {
        stroke-width: 0.3549px;
      }

      .super-14, .super-17 {
        opacity: 0.2;
      }

      .super-15, .super-17, .super-18 {
        stroke-width: 0.506px;
      }

      .super-16, .super-18 {
        opacity: 0.6;
      }

      .super-19 {
        stroke-width: 0.423px;
      }

      .super-20 {
        stroke-width: 0.3385px;
      }

      .super-21 {
        stroke-width: 0.199px;
      }
      .visible{
         visibility: visible !important;
      }
    </style>
  </defs>
  <g id="super-vs-unsuper">
    <g id="BASE-2" data-name="BASE">
      <text class="super-1" transform="translate(220.6934 10.7646)">Überwachtes Lernen</text>
      <rect class="super-2" x="217" y="3.0078" width="76.5" height="10.5147"/>
      <text class="super-1" transform="translate(210.6934 165.7646)">Unüberwachtes Lernen</text>
      <rect class="super-3" x="207" y="158.0078" width="85.5" height="10.5147"/>
    </g>
    <g id="super-layer-1" class="super-layer" visibility="hidden" data-name="1">
      <g>
        <circle class="super-4" cx="64.5104" cy="205.0095" r="3.5104"/>
        <circle class="super-4" cx="42.5104" cy="192.0095" r="3.5104"/>
        <circle class="super-4" cx="38.5104" cy="212.0095" r="3.5104"/>
        <circle class="super-4" cx="56.8072" cy="221.2892" r="3.5104"/>
        <circle class="super-4" cx="28.8072" cy="233.2892" r="3.5104"/>
        <circle class="super-4" cx="74.8554" cy="248.5542" r="3.5104"/>
        <circle class="super-4" cx="67.7732" cy="233.7157" r="3.5104"/>
        <circle class="super-4" cx="45.7732" cy="220.7157" r="3.5104"/>
        <circle class="super-4" cx="41.7732" cy="240.7157" r="3.5104"/>
        <circle class="super-4" cx="60.07" cy="249.9953" r="3.5104"/>
        <circle class="super-4" cx="32.07" cy="261.9953" r="3.5104"/>
        <circle class="super-4" cx="72.1182" cy="221.2604" r="3.5104"/>
        <circle class="super-5" cx="50.9031" cy="201.4951" r="3.5104"/>
        <circle class="super-5" cx="28.9031" cy="188.4951" r="3.5104"/>
        <circle class="super-5" cx="24.9031" cy="208.4951" r="3.5104"/>
        <circle class="super-5" cx="50.1999" cy="211.7748" r="3.5104"/>
        <circle class="super-5" cx="15.1999" cy="229.7748" r="3.5104"/>
        <circle class="super-5" cx="51.2481" cy="244.0398" r="3.5104"/>
        <circle class="super-5" cx="54.1659" cy="230.2013" r="3.5104"/>
        <circle class="super-5" cx="32.1659" cy="217.2013" r="3.5104"/>
        <circle class="super-5" cx="33.1659" cy="252.2013" r="3.5104"/>
        <circle class="super-5" cx="47.4627" cy="260.4809" r="3.5104"/>
        <circle class="super-5" cx="18.4627" cy="258.4809" r="3.5104"/>
        <circle class="super-5" cx="82.5109" cy="209.746" r="3.5104"/>
        <circle class="super-4" cx="131.5104" cy="208.0095" r="3.5104"/>
        <circle class="super-4" cx="109.5104" cy="195.0095" r="3.5104"/>
        <circle class="super-4" cx="105.5104" cy="215.0095" r="3.5104"/>
        <circle class="super-4" cx="123.8072" cy="224.2892" r="3.5104"/>
        <circle class="super-4" cx="95.8072" cy="236.2892" r="3.5104"/>
        <circle class="super-4" cx="141.8554" cy="251.5542" r="3.5104"/>
        <circle class="super-4" cx="134.7732" cy="236.7157" r="3.5104"/>
        <circle class="super-4" cx="112.7732" cy="223.7157" r="3.5104"/>
        <circle class="super-4" cx="108.7732" cy="243.7157" r="3.5104"/>
        <circle class="super-4" cx="127.07" cy="252.9953" r="3.5104"/>
        <circle class="super-4" cx="99.07" cy="264.9953" r="3.5104"/>
        <circle class="super-4" cx="139.1182" cy="224.2604" r="3.5104"/>
        <circle class="super-5" cx="117.9031" cy="204.4951" r="3.5104"/>
        <circle class="super-5" cx="96.9031" cy="195.4951" r="3.5104"/>
        <circle class="super-5" cx="91.9031" cy="211.4951" r="3.5104"/>
        <circle class="super-5" cx="117.1999" cy="214.7748" r="3.5104"/>
        <circle class="super-5" cx="82.1999" cy="232.7748" r="3.5104"/>
        <circle class="super-5" cx="69.1999" cy="263.7748" r="3.5104"/>
        <circle class="super-5" cx="118.2481" cy="247.0398" r="3.5104"/>
        <circle class="super-5" cx="121.1659" cy="233.2013" r="3.5104"/>
        <circle class="super-5" cx="99.1659" cy="220.2013" r="3.5104"/>
        <circle class="super-5" cx="100.1659" cy="255.2013" r="3.5104"/>
        <circle class="super-5" cx="114.4627" cy="263.4809" r="3.5104"/>
        <circle class="super-4" cx="94.8554" cy="185.5542" r="3.5104"/>
        <circle class="super-4" cx="87.7732" cy="170.7157" r="3.5104"/>
        <circle class="super-4" cx="61.7732" cy="177.7157" r="3.5104"/>
        <circle class="super-4" cx="80.07" cy="186.9953" r="3.5104"/>
        <circle class="super-5" cx="71.2481" cy="181.0398" r="3.5104"/>
        <circle class="super-5" cx="74.1659" cy="167.2013" r="3.5104"/>
        <circle class="super-5" cx="67.4627" cy="197.4809" r="3.5104"/>
        <circle class="super-5" cx="85.4627" cy="261.4809" r="3.5104"/>
        <circle class="super-4" cx="90.8554" cy="274.5542" r="3.5104"/>
        <circle class="super-4" cx="115.07" cy="290.9953" r="3.5104"/>
        <circle class="super-5" cx="134.2481" cy="273.0398" r="3.5104"/>
        <circle class="super-5" cx="116.1659" cy="281.2013" r="3.5104"/>
        <circle class="super-5" cx="130.4627" cy="289.4809" r="3.5104"/>
        <circle class="super-5" cx="101.4627" cy="287.4809" r="3.5104"/>
        <circle class="super-5" cx="149.5109" cy="212.746" r="3.5104"/>
        <circle class="super-4" cx="165.5104" cy="227.0095" r="3.5104"/>
        <circle class="super-4" cx="157.8072" cy="243.2892" r="3.5104"/>
        <circle class="super-4" cx="175.8554" cy="270.5542" r="3.5104"/>
        <circle class="super-4" cx="168.7732" cy="255.7157" r="3.5104"/>
        <circle class="super-4" cx="161.07" cy="271.9953" r="3.5104"/>
        <circle class="super-4" cx="173.1182" cy="243.2604" r="3.5104"/>
        <circle class="super-5" cx="151.1999" cy="233.7748" r="3.5104"/>
        <circle class="super-5" cx="152.2481" cy="266.0398" r="3.5104"/>
        <circle class="super-5" cx="155.1659" cy="252.2013" r="3.5104"/>
        <circle class="super-5" cx="148.4627" cy="282.4809" r="3.5104"/>
        <circle class="super-5" cx="183.5109" cy="231.746" r="3.5104"/>
      </g>
      <g>
        <circle class="super-4" cx="60.5104" cy="66.0095" r="3.5104"/>
        <circle class="super-4" cx="38.5104" cy="53.0095" r="3.5104"/>
        <circle class="super-4" cx="34.5104" cy="73.0095" r="3.5104"/>
        <circle class="super-4" cx="52.8072" cy="82.2892" r="3.5104"/>
        <circle class="super-4" cx="24.8072" cy="94.2892" r="3.5104"/>
        <circle class="super-4" cx="70.8554" cy="109.5542" r="3.5104"/>
        <circle class="super-4" cx="63.7732" cy="94.7157" r="3.5104"/>
        <circle class="super-4" cx="41.7732" cy="81.7157" r="3.5104"/>
        <circle class="super-4" cx="37.7732" cy="101.7157" r="3.5104"/>
        <circle class="super-4" cx="56.07" cy="110.9953" r="3.5104"/>
        <circle class="super-4" cx="28.07" cy="122.9953" r="3.5104"/>
        <circle class="super-4" cx="68.1182" cy="82.2604" r="3.5104"/>
        <circle class="super-4" cx="46.9031" cy="62.4951" r="3.5104"/>
        <circle class="super-4" cx="24.9031" cy="49.4951" r="3.5104"/>
        <circle class="super-4" cx="20.9031" cy="69.4951" r="3.5104"/>
        <circle class="super-4" cx="46.1999" cy="72.7748" r="3.5104"/>
        <circle class="super-4" cx="11.1999" cy="90.7748" r="3.5104"/>
        <circle class="super-4" cx="47.2481" cy="105.0398" r="3.5104"/>
        <circle class="super-4" cx="50.1659" cy="91.2013" r="3.5104"/>
        <circle class="super-4" cx="28.1659" cy="78.2013" r="3.5104"/>
        <circle class="super-4" cx="29.1659" cy="113.2013" r="3.5104"/>
        <circle class="super-4" cx="43.4627" cy="121.4809" r="3.5104"/>
        <circle class="super-4" cx="14.4627" cy="119.4809" r="3.5104"/>
        <circle class="super-4" cx="78.5109" cy="70.746" r="3.5104"/>
      </g>
      <text class="super-1" transform="translate(11.6934 29.7646)">Input </text>
      <text class="super-1" transform="translate(98.6934 82.7646)">-&gt; überschaubare Beispieldaten</text>
      <text class="super-1" transform="translate(199.6934 230.7646)">-&gt; Big Data</text>
      <text class="super-1" transform="translate(25.6934 173.7646)">Input</text>
    </g>
    <g id="super-layer-2" class="super-layer" visibility="hidden" data-name="2">
      <g>
        <circle class="super-4" cx="60.5104" cy="66.0095" r="3.5104"/>
        <circle class="super-4" cx="38.5104" cy="53.0095" r="3.5104"/>
        <circle class="super-4" cx="34.5104" cy="73.0095" r="3.5104"/>
        <circle class="super-4" cx="52.8072" cy="82.2892" r="3.5104"/>
        <circle class="super-4" cx="24.8072" cy="94.2892" r="3.5104"/>
        <circle class="super-4" cx="70.8554" cy="109.5542" r="3.5104"/>
        <circle class="super-4" cx="63.7732" cy="94.7157" r="3.5104"/>
        <circle class="super-4" cx="41.7732" cy="81.7157" r="3.5104"/>
        <circle class="super-4" cx="37.7732" cy="101.7157" r="3.5104"/>
        <circle class="super-4" cx="56.07" cy="110.9953" r="3.5104"/>
        <circle class="super-4" cx="28.07" cy="122.9953" r="3.5104"/>
        <circle class="super-4" cx="68.1182" cy="82.2604" r="3.5104"/>
        <circle class="super-6" cx="46.9031" cy="62.4951" r="3.5104"/>
        <circle class="super-6" cx="24.9031" cy="49.4951" r="3.5104"/>
        <circle class="super-6" cx="20.9031" cy="69.4951" r="3.5104"/>
        <circle class="super-6" cx="46.1999" cy="72.7748" r="3.5104"/>
        <circle class="super-6" cx="11.1999" cy="90.7748" r="3.5104"/>
        <circle class="super-6" cx="47.2481" cy="105.0398" r="3.5104"/>
        <circle class="super-6" cx="50.1659" cy="91.2013" r="3.5104"/>
        <circle class="super-6" cx="28.1659" cy="78.2013" r="3.5104"/>
        <circle class="super-6" cx="29.1659" cy="113.2013" r="3.5104"/>
        <circle class="super-6" cx="43.4627" cy="121.4809" r="3.5104"/>
        <circle class="super-6" cx="14.4627" cy="119.4809" r="3.5104"/>
        <circle class="super-6" cx="78.5109" cy="70.746" r="3.5104"/>
      </g>
      <text class="super-1" transform="translate(11.6934 29.7646)">Input</text>
      <text class="super-1" transform="translate(99.6934 84.7646)">-&gt; muss vor dem Training strukturiert werden</text>
      <text class="super-1" transform="translate(172.6934 208.7646)">-&gt; braucht keine Vorbereitung</text>
      <text class="super-1" transform="translate(25.6934 173.7646)">Input</text>
      <g>
        <circle class="super-4" cx="64.5104" cy="205.0095" r="3.5104"/>
        <circle class="super-4" cx="42.5104" cy="192.0095" r="3.5104"/>
        <circle class="super-4" cx="38.5104" cy="212.0095" r="3.5104"/>
        <circle class="super-4" cx="56.8072" cy="221.2892" r="3.5104"/>
        <circle class="super-4" cx="28.8072" cy="233.2892" r="3.5104"/>
        <circle class="super-4" cx="74.8554" cy="248.5542" r="3.5104"/>
        <circle class="super-4" cx="67.7732" cy="233.7157" r="3.5104"/>
        <circle class="super-4" cx="45.7732" cy="220.7157" r="3.5104"/>
        <circle class="super-4" cx="41.7732" cy="240.7157" r="3.5104"/>
        <circle class="super-4" cx="60.07" cy="249.9953" r="3.5104"/>
        <circle class="super-4" cx="32.07" cy="261.9953" r="3.5104"/>
        <circle class="super-4" cx="72.1182" cy="221.2604" r="3.5104"/>
        <circle class="super-5" cx="50.9031" cy="201.4951" r="3.5104"/>
        <circle class="super-5" cx="28.9031" cy="188.4951" r="3.5104"/>
        <circle class="super-5" cx="24.9031" cy="208.4951" r="3.5104"/>
        <circle class="super-5" cx="50.1999" cy="211.7748" r="3.5104"/>
        <circle class="super-5" cx="15.1999" cy="229.7748" r="3.5104"/>
        <circle class="super-5" cx="51.2481" cy="244.0398" r="3.5104"/>
        <circle class="super-5" cx="54.1659" cy="230.2013" r="3.5104"/>
        <circle class="super-5" cx="32.1659" cy="217.2013" r="3.5104"/>
        <circle class="super-5" cx="33.1659" cy="252.2013" r="3.5104"/>
        <circle class="super-5" cx="47.4627" cy="260.4809" r="3.5104"/>
        <circle class="super-5" cx="18.4627" cy="258.4809" r="3.5104"/>
        <circle class="super-5" cx="82.5109" cy="209.746" r="3.5104"/>
        <circle class="super-4" cx="131.5104" cy="208.0095" r="3.5104"/>
        <circle class="super-4" cx="109.5104" cy="195.0095" r="3.5104"/>
        <circle class="super-4" cx="105.5104" cy="215.0095" r="3.5104"/>
        <circle class="super-4" cx="123.8072" cy="224.2892" r="3.5104"/>
        <circle class="super-4" cx="95.8072" cy="236.2892" r="3.5104"/>
        <circle class="super-4" cx="141.8554" cy="251.5542" r="3.5104"/>
        <circle class="super-4" cx="134.7732" cy="236.7157" r="3.5104"/>
        <circle class="super-4" cx="112.7732" cy="223.7157" r="3.5104"/>
        <circle class="super-4" cx="108.7732" cy="243.7157" r="3.5104"/>
        <circle class="super-4" cx="127.07" cy="252.9953" r="3.5104"/>
        <circle class="super-4" cx="99.07" cy="264.9953" r="3.5104"/>
        <circle class="super-4" cx="139.1182" cy="224.2604" r="3.5104"/>
        <circle class="super-5" cx="117.9031" cy="204.4951" r="3.5104"/>
        <circle class="super-5" cx="96.9031" cy="195.4951" r="3.5104"/>
        <circle class="super-5" cx="91.9031" cy="211.4951" r="3.5104"/>
        <circle class="super-5" cx="117.1999" cy="214.7748" r="3.5104"/>
        <circle class="super-5" cx="82.1999" cy="232.7748" r="3.5104"/>
        <circle class="super-5" cx="69.1999" cy="263.7748" r="3.5104"/>
        <circle class="super-5" cx="118.2481" cy="247.0398" r="3.5104"/>
        <circle class="super-5" cx="121.1659" cy="233.2013" r="3.5104"/>
        <circle class="super-5" cx="99.1659" cy="220.2013" r="3.5104"/>
        <circle class="super-5" cx="100.1659" cy="255.2013" r="3.5104"/>
        <circle class="super-5" cx="114.4627" cy="263.4809" r="3.5104"/>
        <circle class="super-4" cx="94.8554" cy="185.5542" r="3.5104"/>
        <circle class="super-4" cx="87.7732" cy="170.7157" r="3.5104"/>
        <circle class="super-4" cx="61.7732" cy="177.7157" r="3.5104"/>
        <circle class="super-4" cx="80.07" cy="186.9953" r="3.5104"/>
        <circle class="super-5" cx="71.2481" cy="181.0398" r="3.5104"/>
        <circle class="super-5" cx="74.1659" cy="167.2013" r="3.5104"/>
        <circle class="super-5" cx="67.4627" cy="197.4809" r="3.5104"/>
        <circle class="super-5" cx="85.4627" cy="261.4809" r="3.5104"/>
        <circle class="super-4" cx="90.8554" cy="274.5542" r="3.5104"/>
        <circle class="super-4" cx="115.07" cy="290.9953" r="3.5104"/>
        <circle class="super-5" cx="134.2481" cy="273.0398" r="3.5104"/>
        <circle class="super-5" cx="116.1659" cy="281.2013" r="3.5104"/>
        <circle class="super-5" cx="130.4627" cy="289.4809" r="3.5104"/>
        <circle class="super-5" cx="101.4627" cy="287.4809" r="3.5104"/>
        <circle class="super-5" cx="149.5109" cy="212.746" r="3.5104"/>
        <circle class="super-4" cx="165.5104" cy="227.0095" r="3.5104"/>
        <circle class="super-4" cx="157.8072" cy="243.2892" r="3.5104"/>
        <circle class="super-4" cx="175.8554" cy="270.5542" r="3.5104"/>
        <circle class="super-4" cx="168.7732" cy="255.7157" r="3.5104"/>
        <circle class="super-4" cx="161.07" cy="271.9953" r="3.5104"/>
        <circle class="super-4" cx="173.1182" cy="243.2604" r="3.5104"/>
        <circle class="super-5" cx="151.1999" cy="233.7748" r="3.5104"/>
        <circle class="super-5" cx="152.2481" cy="266.0398" r="3.5104"/>
        <circle class="super-5" cx="155.1659" cy="252.2013" r="3.5104"/>
        <circle class="super-5" cx="148.4627" cy="282.4809" r="3.5104"/>
        <circle class="super-5" cx="183.5109" cy="231.746" r="3.5104"/>
      </g>
    </g>
    <g id="super-layer-3" class="super-layer" visibility="hidden" data-name="3">
      <text class="super-7" transform="translate(194.0264 77.1504)">X</text>
      <text class="super-7" transform="translate(194.0264 89.7871)">Y</text>
      <circle class="super-8" cx="164.0104" cy="74.574" r="3.5104"/>
      <circle class="super-4" cx="164.0104" cy="86.5095" r="3.5104"/>
      <g class="super-9">
        <line class="super-10" x1="180.2023" y1="77.0313" x2="182.9667" y2="74.5301"/>
        <line class="super-10" x1="182.9667" y1="74.5301" x2="180.2023" y2="72.029"/>
        <line class="super-10" x1="174.1907" y1="74.5301" x2="182.9667" y2="74.5301"/>
      </g>
      <g class="super-9">
        <line class="super-10" x1="180.2023" y1="88.9668" x2="182.9667" y2="86.4656"/>
        <line class="super-10" x1="182.9667" y1="86.4656" x2="180.2023" y2="83.9644"/>
        <line class="super-10" x1="174.1907" y1="86.4656" x2="182.9667" y2="86.4656"/>
      </g>
      <text class="super-1" transform="translate(158.6934 58.7646)">Output</text>
      <text class="super-1" transform="translate(240.6934 223.7646)">Output</text>
      <text class="super-1" transform="translate(240.6934 235.7646)">?</text>
      <text class="super-7" transform="translate(194.0264 77.1504)">X</text>
      <text class="super-7" transform="translate(194.0264 89.7871)">Y</text>
      <circle class="super-8" cx="164.0104" cy="74.574" r="3.5104"/>
      <circle class="super-4" cx="164.0104" cy="86.5095" r="3.5104"/>
      <g class="super-9">
        <line class="super-10" x1="180.2023" y1="77.0313" x2="182.9667" y2="74.5301"/>
        <line class="super-10" x1="182.9667" y1="74.5301" x2="180.2023" y2="72.029"/>
        <line class="super-10" x1="174.1907" y1="74.5301" x2="182.9667" y2="74.5301"/>
      </g>
      <g class="super-9">
        <line class="super-10" x1="180.2023" y1="88.9668" x2="182.9667" y2="86.4656"/>
        <line class="super-10" x1="182.9667" y1="86.4656" x2="180.2023" y2="83.9644"/>
        <line class="super-10" x1="174.1907" y1="86.4656" x2="182.9667" y2="86.4656"/>
      </g>
      <text class="super-1" transform="translate(158.6934 58.7646)">Output</text>
      <text class="super-1" transform="translate(240.6934 223.7646)">Output</text>
      <text class="super-1" transform="translate(240.6934 235.7646)">?</text>
      <text class="super-7" transform="translate(194.0264 77.1504)">X</text>
      <text class="super-7" transform="translate(194.0264 89.7871)">Y</text>
      <circle class="super-8" cx="164.0104" cy="74.574" r="3.5104"/>
      <circle class="super-4" cx="164.0104" cy="86.5095" r="3.5104"/>
      <g class="super-9">
        <line class="super-10" x1="180.2023" y1="77.0313" x2="182.9667" y2="74.5301"/>
        <line class="super-10" x1="182.9667" y1="74.5301" x2="180.2023" y2="72.029"/>
        <line class="super-10" x1="174.1907" y1="74.5301" x2="182.9667" y2="74.5301"/>
      </g>
      <g class="super-9">
        <line class="super-10" x1="180.2023" y1="88.9668" x2="182.9667" y2="86.4656"/>
        <line class="super-10" x1="182.9667" y1="86.4656" x2="180.2023" y2="83.9644"/>
        <line class="super-10" x1="174.1907" y1="86.4656" x2="182.9667" y2="86.4656"/>
      </g>
      <text class="super-1" transform="translate(158.6934 58.7646)">Output</text>
      <text class="super-1" transform="translate(240.6934 223.7646)">Output</text>
      <text class="super-1" transform="translate(240.6934 235.7646)">?</text>
      <g>
        <circle class="super-4" cx="60.5104" cy="66.0095" r="3.5104"/>
        <circle class="super-4" cx="38.5104" cy="53.0095" r="3.5104"/>
        <circle class="super-4" cx="34.5104" cy="73.0095" r="3.5104"/>
        <circle class="super-4" cx="52.8072" cy="82.2892" r="3.5104"/>
        <circle class="super-4" cx="24.8072" cy="94.2892" r="3.5104"/>
        <circle class="super-4" cx="70.8554" cy="109.5542" r="3.5104"/>
        <circle class="super-4" cx="63.7732" cy="94.7157" r="3.5104"/>
        <circle class="super-4" cx="41.7732" cy="81.7157" r="3.5104"/>
        <circle class="super-4" cx="37.7732" cy="101.7157" r="3.5104"/>
        <circle class="super-4" cx="56.07" cy="110.9953" r="3.5104"/>
        <circle class="super-4" cx="28.07" cy="122.9953" r="3.5104"/>
        <circle class="super-4" cx="68.1182" cy="82.2604" r="3.5104"/>
        <circle class="super-6" cx="46.9031" cy="62.4951" r="3.5104"/>
        <circle class="super-6" cx="24.9031" cy="49.4951" r="3.5104"/>
        <circle class="super-6" cx="20.9031" cy="69.4951" r="3.5104"/>
        <circle class="super-6" cx="46.1999" cy="72.7748" r="3.5104"/>
        <circle class="super-6" cx="11.1999" cy="90.7748" r="3.5104"/>
        <circle class="super-6" cx="47.2481" cy="105.0398" r="3.5104"/>
        <circle class="super-6" cx="50.1659" cy="91.2013" r="3.5104"/>
        <circle class="super-6" cx="28.1659" cy="78.2013" r="3.5104"/>
        <circle class="super-6" cx="29.1659" cy="113.2013" r="3.5104"/>
        <circle class="super-6" cx="43.4627" cy="121.4809" r="3.5104"/>
        <circle class="super-6" cx="14.4627" cy="119.4809" r="3.5104"/>
        <circle class="super-6" cx="78.5109" cy="70.746" r="3.5104"/>
      </g>
      <text class="super-1" transform="translate(11.6934 29.7646)">Input</text>
      <text class="super-1" transform="translate(25.6934 173.7646)">Input</text>
      <g>
        <circle class="super-4" cx="64.5104" cy="205.0095" r="3.5104"/>
        <circle class="super-4" cx="42.5104" cy="192.0095" r="3.5104"/>
        <circle class="super-4" cx="38.5104" cy="212.0095" r="3.5104"/>
        <circle class="super-4" cx="56.8072" cy="221.2892" r="3.5104"/>
        <circle class="super-4" cx="28.8072" cy="233.2892" r="3.5104"/>
        <circle class="super-4" cx="74.8554" cy="248.5542" r="3.5104"/>
        <circle class="super-4" cx="67.7732" cy="233.7157" r="3.5104"/>
        <circle class="super-4" cx="45.7732" cy="220.7157" r="3.5104"/>
        <circle class="super-4" cx="41.7732" cy="240.7157" r="3.5104"/>
        <circle class="super-4" cx="60.07" cy="249.9953" r="3.5104"/>
        <circle class="super-4" cx="32.07" cy="261.9953" r="3.5104"/>
        <circle class="super-4" cx="72.1182" cy="221.2604" r="3.5104"/>
        <circle class="super-5" cx="50.9031" cy="201.4951" r="3.5104"/>
        <circle class="super-5" cx="28.9031" cy="188.4951" r="3.5104"/>
        <circle class="super-5" cx="24.9031" cy="208.4951" r="3.5104"/>
        <circle class="super-5" cx="50.1999" cy="211.7748" r="3.5104"/>
        <circle class="super-5" cx="15.1999" cy="229.7748" r="3.5104"/>
        <circle class="super-5" cx="51.2481" cy="244.0398" r="3.5104"/>
        <circle class="super-5" cx="54.1659" cy="230.2013" r="3.5104"/>
        <circle class="super-5" cx="32.1659" cy="217.2013" r="3.5104"/>
        <circle class="super-5" cx="33.1659" cy="252.2013" r="3.5104"/>
        <circle class="super-5" cx="47.4627" cy="260.4809" r="3.5104"/>
        <circle class="super-5" cx="18.4627" cy="258.4809" r="3.5104"/>
        <circle class="super-5" cx="82.5109" cy="209.746" r="3.5104"/>
        <circle class="super-4" cx="131.5104" cy="208.0095" r="3.5104"/>
        <circle class="super-4" cx="109.5104" cy="195.0095" r="3.5104"/>
        <circle class="super-4" cx="105.5104" cy="215.0095" r="3.5104"/>
        <circle class="super-4" cx="123.8072" cy="224.2892" r="3.5104"/>
        <circle class="super-4" cx="95.8072" cy="236.2892" r="3.5104"/>
        <circle class="super-4" cx="141.8554" cy="251.5542" r="3.5104"/>
        <circle class="super-4" cx="134.7732" cy="236.7157" r="3.5104"/>
        <circle class="super-4" cx="112.7732" cy="223.7157" r="3.5104"/>
        <circle class="super-4" cx="108.7732" cy="243.7157" r="3.5104"/>
        <circle class="super-4" cx="127.07" cy="252.9953" r="3.5104"/>
        <circle class="super-4" cx="99.07" cy="264.9953" r="3.5104"/>
        <circle class="super-4" cx="139.1182" cy="224.2604" r="3.5104"/>
        <circle class="super-5" cx="117.9031" cy="204.4951" r="3.5104"/>
        <circle class="super-5" cx="96.9031" cy="195.4951" r="3.5104"/>
        <circle class="super-5" cx="91.9031" cy="211.4951" r="3.5104"/>
        <circle class="super-5" cx="117.1999" cy="214.7748" r="3.5104"/>
        <circle class="super-5" cx="82.1999" cy="232.7748" r="3.5104"/>
        <circle class="super-5" cx="69.1999" cy="263.7748" r="3.5104"/>
        <circle class="super-5" cx="118.2481" cy="247.0398" r="3.5104"/>
        <circle class="super-5" cx="121.1659" cy="233.2013" r="3.5104"/>
        <circle class="super-5" cx="99.1659" cy="220.2013" r="3.5104"/>
        <circle class="super-5" cx="100.1659" cy="255.2013" r="3.5104"/>
        <circle class="super-5" cx="114.4627" cy="263.4809" r="3.5104"/>
        <circle class="super-4" cx="94.8554" cy="185.5542" r="3.5104"/>
        <circle class="super-4" cx="87.7732" cy="170.7157" r="3.5104"/>
        <circle class="super-4" cx="61.7732" cy="177.7157" r="3.5104"/>
        <circle class="super-4" cx="80.07" cy="186.9953" r="3.5104"/>
        <circle class="super-5" cx="71.2481" cy="181.0398" r="3.5104"/>
        <circle class="super-5" cx="74.1659" cy="167.2013" r="3.5104"/>
        <circle class="super-5" cx="67.4627" cy="197.4809" r="3.5104"/>
        <circle class="super-5" cx="85.4627" cy="261.4809" r="3.5104"/>
        <circle class="super-4" cx="90.8554" cy="274.5542" r="3.5104"/>
        <circle class="super-4" cx="115.07" cy="290.9953" r="3.5104"/>
        <circle class="super-5" cx="134.2481" cy="273.0398" r="3.5104"/>
        <circle class="super-5" cx="116.1659" cy="281.2013" r="3.5104"/>
        <circle class="super-5" cx="130.4627" cy="289.4809" r="3.5104"/>
        <circle class="super-5" cx="101.4627" cy="287.4809" r="3.5104"/>
        <circle class="super-5" cx="149.5109" cy="212.746" r="3.5104"/>
        <circle class="super-4" cx="165.5104" cy="227.0095" r="3.5104"/>
        <circle class="super-4" cx="157.8072" cy="243.2892" r="3.5104"/>
        <circle class="super-4" cx="175.8554" cy="270.5542" r="3.5104"/>
        <circle class="super-4" cx="168.7732" cy="255.7157" r="3.5104"/>
        <circle class="super-4" cx="161.07" cy="271.9953" r="3.5104"/>
        <circle class="super-4" cx="173.1182" cy="243.2604" r="3.5104"/>
        <circle class="super-5" cx="151.1999" cy="233.7748" r="3.5104"/>
        <circle class="super-5" cx="152.2481" cy="266.0398" r="3.5104"/>
        <circle class="super-5" cx="155.1659" cy="252.2013" r="3.5104"/>
        <circle class="super-5" cx="148.4627" cy="282.4809" r="3.5104"/>
        <circle class="super-5" cx="183.5109" cy="231.746" r="3.5104"/>
      </g>
    </g>
    <g id="super-layer-4" class="super-layer" visibility="hidden" data-name="4">
      <g>
        <text class="super-7" transform="translate(194.0264 77.1504)">X</text>
        <text class="super-7" transform="translate(194.0264 89.7871)">Y</text>
        <circle class="super-8" cx="164.0104" cy="74.574" r="3.5104"/>
        <circle class="super-4" cx="164.0104" cy="86.5095" r="3.5104"/>
        <g class="super-9">
          <line class="super-10" x1="180.2023" y1="77.0313" x2="182.9667" y2="74.5301"/>
          <line class="super-10" x1="182.9667" y1="74.5301" x2="180.2023" y2="72.029"/>
          <line class="super-10" x1="174.1907" y1="74.5301" x2="182.9667" y2="74.5301"/>
        </g>
        <g class="super-9">
          <line class="super-10" x1="180.2023" y1="88.9668" x2="182.9667" y2="86.4656"/>
          <line class="super-10" x1="182.9667" y1="86.4656" x2="180.2023" y2="83.9644"/>
          <line class="super-10" x1="174.1907" y1="86.4656" x2="182.9667" y2="86.4656"/>
        </g>
        <text class="super-1" transform="translate(158.6934 58.7646)">Output</text>
        <text class="super-1" transform="translate(240.6934 223.7646)">Output</text>
        <text class="super-1" transform="translate(240.6934 235.7646)">?</text>
        <text class="super-7" transform="translate(194.0264 77.1504)">X</text>
        <text class="super-7" transform="translate(194.0264 89.7871)">Y</text>
        <circle class="super-8" cx="164.0104" cy="74.574" r="3.5104"/>
        <circle class="super-4" cx="164.0104" cy="86.5095" r="3.5104"/>
        <g class="super-9">
          <line class="super-10" x1="180.2023" y1="77.0313" x2="182.9667" y2="74.5301"/>
          <line class="super-10" x1="182.9667" y1="74.5301" x2="180.2023" y2="72.029"/>
          <line class="super-10" x1="174.1907" y1="74.5301" x2="182.9667" y2="74.5301"/>
        </g>
        <g class="super-9">
          <line class="super-10" x1="180.2023" y1="88.9668" x2="182.9667" y2="86.4656"/>
          <line class="super-10" x1="182.9667" y1="86.4656" x2="180.2023" y2="83.9644"/>
          <line class="super-10" x1="174.1907" y1="86.4656" x2="182.9667" y2="86.4656"/>
        </g>
        <text class="super-1" transform="translate(158.6934 58.7646)">Output</text>
        <text class="super-1" transform="translate(240.6934 223.7646)">Output</text>
        <text class="super-1" transform="translate(240.6934 235.7646)">?</text>
        <text class="super-7" transform="translate(194.0264 77.1504)">X</text>
        <text class="super-7" transform="translate(194.0264 89.7871)">Y</text>
        <circle class="super-8" cx="164.0104" cy="74.574" r="3.5104"/>
        <circle class="super-4" cx="164.0104" cy="86.5095" r="3.5104"/>
        <g class="super-9">
          <line class="super-10" x1="180.2023" y1="77.0313" x2="182.9667" y2="74.5301"/>
          <line class="super-10" x1="182.9667" y1="74.5301" x2="180.2023" y2="72.029"/>
          <line class="super-10" x1="174.1907" y1="74.5301" x2="182.9667" y2="74.5301"/>
        </g>
        <g class="super-9">
          <line class="super-10" x1="180.2023" y1="88.9668" x2="182.9667" y2="86.4656"/>
          <line class="super-10" x1="182.9667" y1="86.4656" x2="180.2023" y2="83.9644"/>
          <line class="super-10" x1="174.1907" y1="86.4656" x2="182.9667" y2="86.4656"/>
        </g>
        <text class="super-1" transform="translate(158.6934 58.7646)">Output</text>
        <text class="super-1" transform="translate(240.6934 223.7646)">Output</text>
        <text class="super-1" transform="translate(240.6934 235.7646)">?</text>
        <g>
          <circle class="super-4" cx="60.5104" cy="66.0095" r="3.5104"/>
          <circle class="super-4" cx="38.5104" cy="53.0095" r="3.5104"/>
          <circle class="super-4" cx="34.5104" cy="73.0095" r="3.5104"/>
          <circle class="super-4" cx="52.8072" cy="82.2892" r="3.5104"/>
          <circle class="super-4" cx="24.8072" cy="94.2892" r="3.5104"/>
          <circle class="super-4" cx="70.8554" cy="109.5542" r="3.5104"/>
          <circle class="super-4" cx="63.7732" cy="94.7157" r="3.5104"/>
          <circle class="super-4" cx="41.7732" cy="81.7157" r="3.5104"/>
          <circle class="super-4" cx="37.7732" cy="101.7157" r="3.5104"/>
          <circle class="super-4" cx="56.07" cy="110.9953" r="3.5104"/>
          <circle class="super-4" cx="28.07" cy="122.9953" r="3.5104"/>
          <circle class="super-4" cx="68.1182" cy="82.2604" r="3.5104"/>
          <circle class="super-6" cx="46.9031" cy="62.4951" r="3.5104"/>
          <circle class="super-6" cx="24.9031" cy="49.4951" r="3.5104"/>
          <circle class="super-6" cx="20.9031" cy="69.4951" r="3.5104"/>
          <circle class="super-6" cx="46.1999" cy="72.7748" r="3.5104"/>
          <circle class="super-6" cx="11.1999" cy="90.7748" r="3.5104"/>
          <circle class="super-6" cx="47.2481" cy="105.0398" r="3.5104"/>
          <circle class="super-6" cx="50.1659" cy="91.2013" r="3.5104"/>
          <circle class="super-6" cx="28.1659" cy="78.2013" r="3.5104"/>
          <circle class="super-6" cx="29.1659" cy="113.2013" r="3.5104"/>
          <circle class="super-6" cx="43.4627" cy="121.4809" r="3.5104"/>
          <circle class="super-6" cx="14.4627" cy="119.4809" r="3.5104"/>
          <circle class="super-6" cx="78.5109" cy="70.746" r="3.5104"/>
        </g>
        <text class="super-1" transform="translate(11.6934 29.7646)">Input</text>
        <text class="super-1" transform="translate(25.6934 173.7646)">Input</text>
        <g>
          <circle class="super-4" cx="64.5104" cy="205.0095" r="3.5104"/>
          <circle class="super-4" cx="42.5104" cy="192.0095" r="3.5104"/>
          <circle class="super-4" cx="38.5104" cy="212.0095" r="3.5104"/>
          <circle class="super-4" cx="56.8072" cy="221.2892" r="3.5104"/>
          <circle class="super-4" cx="28.8072" cy="233.2892" r="3.5104"/>
          <circle class="super-4" cx="74.8554" cy="248.5542" r="3.5104"/>
          <circle class="super-4" cx="67.7732" cy="233.7157" r="3.5104"/>
          <circle class="super-4" cx="45.7732" cy="220.7157" r="3.5104"/>
          <circle class="super-4" cx="41.7732" cy="240.7157" r="3.5104"/>
          <circle class="super-4" cx="60.07" cy="249.9953" r="3.5104"/>
          <circle class="super-4" cx="32.07" cy="261.9953" r="3.5104"/>
          <circle class="super-4" cx="72.1182" cy="221.2604" r="3.5104"/>
          <circle class="super-5" cx="50.9031" cy="201.4951" r="3.5104"/>
          <circle class="super-5" cx="28.9031" cy="188.4951" r="3.5104"/>
          <circle class="super-5" cx="24.9031" cy="208.4951" r="3.5104"/>
          <circle class="super-5" cx="50.1999" cy="211.7748" r="3.5104"/>
          <circle class="super-5" cx="15.1999" cy="229.7748" r="3.5104"/>
          <circle class="super-5" cx="51.2481" cy="244.0398" r="3.5104"/>
          <circle class="super-5" cx="54.1659" cy="230.2013" r="3.5104"/>
          <circle class="super-5" cx="32.1659" cy="217.2013" r="3.5104"/>
          <circle class="super-5" cx="33.1659" cy="252.2013" r="3.5104"/>
          <circle class="super-5" cx="47.4627" cy="260.4809" r="3.5104"/>
          <circle class="super-5" cx="18.4627" cy="258.4809" r="3.5104"/>
          <circle class="super-5" cx="82.5109" cy="209.746" r="3.5104"/>
          <circle class="super-4" cx="131.5104" cy="208.0095" r="3.5104"/>
          <circle class="super-4" cx="109.5104" cy="195.0095" r="3.5104"/>
          <circle class="super-4" cx="105.5104" cy="215.0095" r="3.5104"/>
          <circle class="super-4" cx="123.8072" cy="224.2892" r="3.5104"/>
          <circle class="super-4" cx="95.8072" cy="236.2892" r="3.5104"/>
          <circle class="super-4" cx="141.8554" cy="251.5542" r="3.5104"/>
          <circle class="super-4" cx="134.7732" cy="236.7157" r="3.5104"/>
          <circle class="super-4" cx="112.7732" cy="223.7157" r="3.5104"/>
          <circle class="super-4" cx="108.7732" cy="243.7157" r="3.5104"/>
          <circle class="super-4" cx="127.07" cy="252.9953" r="3.5104"/>
          <circle class="super-4" cx="99.07" cy="264.9953" r="3.5104"/>
          <circle class="super-4" cx="139.1182" cy="224.2604" r="3.5104"/>
          <circle class="super-5" cx="117.9031" cy="204.4951" r="3.5104"/>
          <circle class="super-5" cx="96.9031" cy="195.4951" r="3.5104"/>
          <circle class="super-5" cx="91.9031" cy="211.4951" r="3.5104"/>
          <circle class="super-5" cx="117.1999" cy="214.7748" r="3.5104"/>
          <circle class="super-5" cx="82.1999" cy="232.7748" r="3.5104"/>
          <circle class="super-5" cx="69.1999" cy="263.7748" r="3.5104"/>
          <circle class="super-5" cx="118.2481" cy="247.0398" r="3.5104"/>
          <circle class="super-5" cx="121.1659" cy="233.2013" r="3.5104"/>
          <circle class="super-5" cx="99.1659" cy="220.2013" r="3.5104"/>
          <circle class="super-5" cx="100.1659" cy="255.2013" r="3.5104"/>
          <circle class="super-5" cx="114.4627" cy="263.4809" r="3.5104"/>
          <circle class="super-4" cx="94.8554" cy="185.5542" r="3.5104"/>
          <circle class="super-4" cx="87.7732" cy="170.7157" r="3.5104"/>
          <circle class="super-4" cx="61.7732" cy="177.7157" r="3.5104"/>
          <circle class="super-4" cx="80.07" cy="186.9953" r="3.5104"/>
          <circle class="super-5" cx="71.2481" cy="181.0398" r="3.5104"/>
          <circle class="super-5" cx="74.1659" cy="167.2013" r="3.5104"/>
          <circle class="super-5" cx="67.4627" cy="197.4809" r="3.5104"/>
          <circle class="super-5" cx="85.4627" cy="261.4809" r="3.5104"/>
          <circle class="super-4" cx="90.8554" cy="274.5542" r="3.5104"/>
          <circle class="super-4" cx="115.07" cy="290.9953" r="3.5104"/>
          <circle class="super-5" cx="134.2481" cy="273.0398" r="3.5104"/>
          <circle class="super-5" cx="116.1659" cy="281.2013" r="3.5104"/>
          <circle class="super-5" cx="130.4627" cy="289.4809" r="3.5104"/>
          <circle class="super-5" cx="101.4627" cy="287.4809" r="3.5104"/>
          <circle class="super-5" cx="149.5109" cy="212.746" r="3.5104"/>
          <circle class="super-4" cx="165.5104" cy="227.0095" r="3.5104"/>
          <circle class="super-4" cx="157.8072" cy="243.2892" r="3.5104"/>
          <circle class="super-4" cx="175.8554" cy="270.5542" r="3.5104"/>
          <circle class="super-4" cx="168.7732" cy="255.7157" r="3.5104"/>
          <circle class="super-4" cx="161.07" cy="271.9953" r="3.5104"/>
          <circle class="super-4" cx="173.1182" cy="243.2604" r="3.5104"/>
          <circle class="super-5" cx="151.1999" cy="233.7748" r="3.5104"/>
          <circle class="super-5" cx="152.2481" cy="266.0398" r="3.5104"/>
          <circle class="super-5" cx="155.1659" cy="252.2013" r="3.5104"/>
          <circle class="super-5" cx="148.4627" cy="282.4809" r="3.5104"/>
          <circle class="super-5" cx="183.5109" cy="231.746" r="3.5104"/>
        </g>
        <text id="Modell_wird_trainiert_und_dann_eingesetzt" data-name="Modell wird trainiert  und dann eingesetzt" class="super-1" transform="translate(213.6934 25.7646)">Modell wird trainiert <tspan x="0" y="7.7646">und dann eingesetzt</tspan></text>
        <text class="super-1" transform="translate(213.6934 177.7646)"><tspan xml:space="preserve"> Modell kann in Echt-</tspan><tspan x="0" y="7.7646">zeit trainiert werden</tspan></text>
      </g>
    </g>
    <g id="super-layer-5" class="super-layer" visibility="hidden" data-name="5">
      <g>
        <rect class="super-11" x="13" y="21" width="56" height="10"/>
        <circle class="super-4" cx="19.1194" cy="48.8628" r="3.5104"/>
        <text class="super-12" transform="translate(43.6945 48.3671)">Modell</text>
        <text class="super-12" transform="translate(15.6945 28.3671)">Klassifikation</text>
        <g>
          <path class="super-4" d="M99.5879,45.2354l.9053,1.5888.9121-1.5888h.5576l-1.17,1.9013,1.3134,2.23h-.6l-1.0254-1.8652-1.0439,1.8652H98.88l1.2959-2.2012-1.1875-1.9306Z"/>
          <path class="super-4" d="M100.7568,56.5674H100.23V54.9785l-1.3975-2.543h.5762l1.0967,2.0752,1.1094-2.0752h.54l-1.3975,2.5372Z"/>
        </g>
        <g class="super-9">
          <line class="super-10" x1="32.8055" y1="51.5012" x2="35.57" y2="49"/>
          <line class="super-10" x1="35.57" y1="49" x2="32.8055" y2="46.4988"/>
          <line class="super-10" x1="26.7939" y1="49" x2="35.57" y2="49"/>
        </g>
        <g class="super-9">
          <line class="super-10" x1="87.8055" y1="51.5012" x2="90.57" y2="49"/>
          <line class="super-10" x1="90.57" y1="49" x2="87.8055" y2="46.4988"/>
          <line class="super-10" x1="81.7939" y1="49" x2="90.57" y2="49"/>
        </g>
        <rect class="super-13" x="41.5012" y="36" width="33.4988" height="23.5"/>
      </g>
      <g>
        <rect class="super-11" x="168" y="48" width="78" height="10"/>
        <text class="super-12" transform="translate(170.6945 55.3671)">Regression, Prognose</text>
        <circle class="super-4" cx="175.1194" cy="74.8628" r="3.5104"/>
        <text class="super-12" transform="translate(199.6945 74.3671)">Modell</text>
        <text class="super-12" transform="translate(252.6945 77.3671)">[ 0 - 10 ]</text>
        <g class="super-9">
          <line class="super-10" x1="188.8055" y1="77.5012" x2="191.57" y2="75"/>
          <line class="super-10" x1="191.57" y1="75" x2="188.8055" y2="72.4988"/>
          <line class="super-10" x1="182.7939" y1="75" x2="191.57" y2="75"/>
        </g>
        <g class="super-9">
          <line class="super-10" x1="243.8055" y1="77.5012" x2="246.57" y2="75"/>
          <line class="super-10" x1="246.57" y1="75" x2="243.8055" y2="72.4988"/>
          <line class="super-10" x1="237.7939" y1="75" x2="246.57" y2="75"/>
        </g>
        <rect class="super-13" x="197.5012" y="62" width="33.4988" height="23.5"/>
      </g>
      <g>
        <rect class="super-11" x="7" y="152" width="56" height="10"/>
        <text class="super-12" transform="translate(9.6945 159.3671)">Clusteranalyse</text>
        <g>
          <ellipse class="super-14" cx="7.2185" cy="198.6413" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-4" cx="5.8085" cy="185.0767" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-15" cx="11.1622" cy="179.3542" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-4" cx="36.4039" cy="178.4912" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-4" cx="23.0102" cy="181.9701" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-4" cx="32.4357" cy="186.582" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-4" cx="18.0117" cy="192.5458" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="41.733" cy="200.1323" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="38.0847" cy="192.7578" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-4" cx="26.7516" cy="186.297" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-14" cx="24.691" cy="196.2366" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-14" cx="34.1165" cy="200.8485" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-14" cx="19.6925" cy="206.8123" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="40.323" cy="186.5677" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-15" cx="29.3942" cy="176.7446" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-15" cx="16.0005" cy="180.2235" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-15" cx="29.032" cy="181.8535" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-15" cx="11.002" cy="190.7992" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-17" cx="29.5719" cy="197.8887" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-15" cx="31.075" cy="191.0112" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-15" cx="19.7419" cy="184.5504" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-17" cx="20.257" cy="201.9448" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-17" cx="27.6219" cy="206.0597" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-17" cx="12.6828" cy="205.0657" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-14" cx="15.4608" cy="211.5629" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-14" cx="27.9347" cy="219.7339" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-17" cx="37.8142" cy="210.8103" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-17" cx="28.4993" cy="214.8664" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-17" cx="35.8642" cy="218.9813" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-17" cx="20.9251" cy="217.9873" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-18" cx="45.6767" cy="180.8452" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="53.9187" cy="187.9339" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="49.9505" cy="196.0247" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="59.2479" cy="209.575" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="55.5995" cy="202.2005" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="51.6313" cy="210.2912" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="57.8378" cy="196.0104" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-18" cx="46.5468" cy="191.2962" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-18" cx="47.0868" cy="207.3314" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-18" cx="48.5898" cy="200.4539" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-18" cx="45.1367" cy="215.5024" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-18" cx="63.1915" cy="190.2879" rx="1.8084" ry="1.7446"/>
        </g>
      </g>
      <g>
        <rect class="super-11" x="207" y="196" width="73" height="10"/>
        <text class="super-12" transform="translate(209.6945 203.3671)">Anomalie-Erkennung</text>
        <g>
          <ellipse class="super-4" cx="219.6909" cy="239.7657" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="218.512" cy="228.4248" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="222.988" cy="223.6404" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="244.0918" cy="222.9189" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="232.8938" cy="225.8275" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="240.7741" cy="229.6833" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="228.7147" cy="234.6694" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="248.5473" cy="241.0122" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="245.497" cy="234.8466" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="236.0218" cy="229.445" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="234.299" cy="237.7552" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="242.1793" cy="241.611" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="230.1199" cy="246.5972" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="247.3684" cy="229.6713" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="238.2312" cy="221.4586" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="227.0332" cy="224.3672" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="237.9284" cy="225.7299" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="222.8541" cy="233.2092" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="238.3798" cy="239.1365" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="287.3798" cy="248.1365" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="227.3798" cy="264.1365" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="239.6365" cy="233.3864" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="230.1612" cy="227.9847" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="230.5919" cy="242.5276" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="236.7495" cy="245.9679" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="224.2594" cy="245.1369" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="226.582" cy="250.569" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="237.011" cy="257.4005" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="245.2709" cy="249.9398" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="237.483" cy="253.3309" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="243.6405" cy="256.7712" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="231.1505" cy="255.9402" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="251.8445" cy="224.887" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="272.8445" cy="218.887" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="258.7353" cy="230.8136" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="255.4176" cy="237.578" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="263.1909" cy="248.907" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="260.1406" cy="242.7414" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="203.1406" cy="212.7414" rx="1.4586" ry="1.5119" transform="matrix(0.9885, -0.1515, 0.1515, 0.9885, -29.8868, 33.2331)"/>
          <ellipse class="super-4" cx="256.8229" cy="249.5058" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="262.012" cy="237.5661" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="252.5719" cy="233.6247" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="253.0234" cy="247.0312" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="254.28" cy="241.2811" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="251.393" cy="253.8627" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="266.488" cy="232.7817" rx="1.5119" ry="1.4586"/>
        </g>
        <g class="super-9">
          <line class="super-20" x1="197.8985" y1="214.0915" x2="199.2314" y2="212.8856"/>
          <line class="super-20" x1="199.2314" y1="212.8856" x2="197.8985" y2="211.6796"/>
          <line class="super-20" x1="195" y1="212.8856" x2="199.2314" y2="212.8856"/>
        </g>
        <g class="super-9">
          <line class="super-20" x1="281.8431" y1="249.7963" x2="283.1759" y2="248.5904"/>
          <line class="super-20" x1="283.1759" y1="248.5904" x2="281.8431" y2="247.3844"/>
          <line class="super-20" x1="278.9445" y1="248.5904" x2="283.1759" y2="248.5904"/>
        </g>
        <g class="super-9">
          <line class="super-20" x1="266.8431" y1="219.7963" x2="268.1759" y2="218.5904"/>
          <line class="super-20" x1="268.1759" y1="218.5904" x2="266.8431" y2="217.3844"/>
          <line class="super-20" x1="263.9445" y1="218.5904" x2="268.1759" y2="218.5904"/>
        </g>
      </g>
      <g>
        <rect class="super-11" x="94" y="224" width="73" height="10"/>
        <text class="super-12" transform="translate(96.6945 231.3671)">Assoziationsanalyse</text>
        <circle class="super-4" cx="139.4915" cy="257.8058" r="3.2781"/>
        <circle class="super-4" cx="123.363" cy="254.9821" r="1.791"/>
        <circle class="super-4" cx="100.5917" cy="242.0947" r="1.0945"/>
        <circle class="super-4" cx="94.4198" cy="251.3524" r="1.0945"/>
        <circle class="super-4" cx="159.9739" cy="267.6381" r="1.0945"/>
        <circle class="super-4" cx="150.1815" cy="265.607" r="1.0945"/>
        <circle class="super-4" cx="150.9484" cy="259.4874" r="1.236"/>
        <circle class="super-4" cx="154.9971" cy="253.0512" r="1.1814"/>
        <line class="super-21" x1="139.5708" y1="257.6895" x2="123.2468" y2="254.9028"/>
        <line class="super-21" x1="100.5365" y1="241.9049" x2="123.2468" y2="254.9028"/>
        <line class="super-21" x1="139.6077" y1="257.885" x2="154.5267" y2="253.2414"/>
        <line class="super-21" x1="154.8808" y1="252.9719" x2="159.9489" y2="267.6754"/>
        <line class="super-21" x1="150.8321" y1="259.4082" x2="154.8808" y2="252.9719"/>
        <line class="super-21" x1="159.9489" y1="267.6754" x2="150.8321" y2="259.4082"/>
        <line class="super-21" x1="150.1815" y1="265.607" x2="151.0647" y2="259.5667"/>
        <line class="super-21" x1="159.9272" y1="267.7545" x2="150.1815" y2="265.607"/>
        <line class="super-21" x1="123.3723" y1="254.8657" x2="94" y2="251"/>
        <line class="super-21" x1="139.5441" y1="257.9315" x2="150.9881" y2="259.4055"/>
        <line class="super-21" x1="150.1066" y1="265.5242" x2="139.5441" y2="257.9315"/>
        <line class="super-21" x1="134.4816" y1="273.3812" x2="140.0362" y2="257.9516"/>
        <circle class="super-4" cx="134.6043" cy="273.6526" r="1.0945"/>
      </g>
    </g>
    <g id="super-layer-6" class="super-layer" visibility="hidden" data-name="6">
      <text class="super-12" transform="translate(15.6945 73.3671)">Ist es Typ A oder Typ B?</text>
      <text class="super-12" transform="translate(1.6945 230.3671)">Welche Kundensegmente <tspan x="0" y="7.2002">gibt es?</tspan></text>
      <text class="super-12" transform="translate(90.6945 286.3671)">Was wird häufig zusammen <tspan x="0" y="7.2002">mit Produkt A gekauft?</tspan></text>
      <text class="super-12" transform="translate(202.6945 275.3671)">Ist dieser Wert atypisch? </text>
      <text class="super-12" transform="translate(167.6945 98.3671)">Wie warm wird es morgen sein?</text>
      <g>
        <rect class="super-11" x="13" y="21" width="56" height="10"/>
        <circle class="super-4" cx="19.1194" cy="48.8628" r="3.5104"/>
        <text class="super-12" transform="translate(43.6945 48.3671)">Modell</text>
        <text class="super-12" transform="translate(15.6945 28.3671)">Klassifikation</text>
        <g>
          <path class="super-4" d="M99.5879,45.2354l.9053,1.5888.9121-1.5888h.5576l-1.17,1.9013,1.3134,2.23h-.6l-1.0254-1.8652-1.0439,1.8652H98.88l1.2959-2.2012-1.1875-1.9306Z"/>
          <path class="super-4" d="M100.7568,56.5674H100.23V54.9785l-1.3975-2.543h.5762l1.0967,2.0752,1.1094-2.0752h.54l-1.3975,2.5372Z"/>
        </g>
        <g class="super-9">
          <line class="super-10" x1="32.8055" y1="51.5012" x2="35.57" y2="49"/>
          <line class="super-10" x1="35.57" y1="49" x2="32.8055" y2="46.4988"/>
          <line class="super-10" x1="26.7939" y1="49" x2="35.57" y2="49"/>
        </g>
        <g class="super-9">
          <line class="super-10" x1="87.8055" y1="51.5012" x2="90.57" y2="49"/>
          <line class="super-10" x1="90.57" y1="49" x2="87.8055" y2="46.4988"/>
          <line class="super-10" x1="81.7939" y1="49" x2="90.57" y2="49"/>
        </g>
        <rect class="super-13" x="41.5012" y="36" width="33.4988" height="23.5"/>
      </g>
      <g>
        <rect class="super-11" x="168" y="48" width="78" height="10"/>
        <text class="super-12" transform="translate(170.6945 55.3671)">Regression, Prognose</text>
        <circle class="super-4" cx="175.1194" cy="74.8628" r="3.5104"/>
        <text class="super-12" transform="translate(199.6945 74.3671)">Modell</text>
        <text class="super-12" transform="translate(252.6945 77.3671)">[ 0 - 10 ]</text>
        <g class="super-9">
          <line class="super-10" x1="188.8055" y1="77.5012" x2="191.57" y2="75"/>
          <line class="super-10" x1="191.57" y1="75" x2="188.8055" y2="72.4988"/>
          <line class="super-10" x1="182.7939" y1="75" x2="191.57" y2="75"/>
        </g>
        <g class="super-9">
          <line class="super-10" x1="243.8055" y1="77.5012" x2="246.57" y2="75"/>
          <line class="super-10" x1="246.57" y1="75" x2="243.8055" y2="72.4988"/>
          <line class="super-10" x1="237.7939" y1="75" x2="246.57" y2="75"/>
        </g>
        <rect class="super-13" x="197.5012" y="62" width="33.4988" height="23.5"/>
      </g>
      <g>
        <rect class="super-11" x="7" y="152" width="56" height="10"/>
        <text class="super-12" transform="translate(9.6945 159.3671)">Clusteranalyse</text>
        <g>
          <ellipse class="super-14" cx="7.2185" cy="198.6413" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-4" cx="5.8085" cy="185.0767" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-15" cx="11.1622" cy="179.3542" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-4" cx="36.4039" cy="178.4912" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-4" cx="23.0102" cy="181.9701" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-4" cx="32.4357" cy="186.582" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-4" cx="18.0117" cy="192.5458" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="41.733" cy="200.1323" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="38.0847" cy="192.7578" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-4" cx="26.7516" cy="186.297" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-14" cx="24.691" cy="196.2366" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-14" cx="34.1165" cy="200.8485" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-14" cx="19.6925" cy="206.8123" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="40.323" cy="186.5677" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-15" cx="29.3942" cy="176.7446" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-15" cx="16.0005" cy="180.2235" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-15" cx="29.032" cy="181.8535" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-15" cx="11.002" cy="190.7992" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-17" cx="29.5719" cy="197.8887" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-15" cx="31.075" cy="191.0112" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-15" cx="19.7419" cy="184.5504" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-17" cx="20.257" cy="201.9448" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-17" cx="27.6219" cy="206.0597" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-17" cx="12.6828" cy="205.0657" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-14" cx="15.4608" cy="211.5629" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-14" cx="27.9347" cy="219.7339" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-17" cx="37.8142" cy="210.8103" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-17" cx="28.4993" cy="214.8664" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-17" cx="35.8642" cy="218.9813" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-17" cx="20.9251" cy="217.9873" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-18" cx="45.6767" cy="180.8452" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="53.9187" cy="187.9339" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="49.9505" cy="196.0247" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="59.2479" cy="209.575" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="55.5995" cy="202.2005" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="51.6313" cy="210.2912" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-16" cx="57.8378" cy="196.0104" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-18" cx="46.5468" cy="191.2962" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-18" cx="47.0868" cy="207.3314" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-18" cx="48.5898" cy="200.4539" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-18" cx="45.1367" cy="215.5024" rx="1.8084" ry="1.7446"/>
          <ellipse class="super-18" cx="63.1915" cy="190.2879" rx="1.8084" ry="1.7446"/>
        </g>
      </g>
      <g>
        <rect class="super-11" x="207" y="196" width="73" height="10"/>
        <text class="super-12" transform="translate(209.6945 203.3671)">Anomalie-Erkennung</text>
        <g>
          <ellipse class="super-4" cx="219.6909" cy="239.7657" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="218.512" cy="228.4248" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="222.988" cy="223.6404" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="244.0918" cy="222.9189" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="232.8938" cy="225.8275" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="240.7741" cy="229.6833" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="228.7147" cy="234.6694" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="248.5473" cy="241.0122" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="245.497" cy="234.8466" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="236.0218" cy="229.445" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="234.299" cy="237.7552" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="242.1793" cy="241.611" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="230.1199" cy="246.5972" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="247.3684" cy="229.6713" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="238.2312" cy="221.4586" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="227.0332" cy="224.3672" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="237.9284" cy="225.7299" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="222.8541" cy="233.2092" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="238.3798" cy="239.1365" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="287.3798" cy="248.1365" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="227.3798" cy="264.1365" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="239.6365" cy="233.3864" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="230.1612" cy="227.9847" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="230.5919" cy="242.5276" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="236.7495" cy="245.9679" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="224.2594" cy="245.1369" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="226.582" cy="250.569" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="237.011" cy="257.4005" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="245.2709" cy="249.9398" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="237.483" cy="253.3309" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="243.6405" cy="256.7712" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="231.1505" cy="255.9402" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="251.8445" cy="224.887" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="272.8445" cy="218.887" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="258.7353" cy="230.8136" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="255.4176" cy="237.578" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="263.1909" cy="248.907" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="260.1406" cy="242.7414" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="203.1406" cy="212.7414" rx="1.4586" ry="1.5119" transform="matrix(0.9885, -0.1515, 0.1515, 0.9885, -29.8868, 33.2331)"/>
          <ellipse class="super-4" cx="256.8229" cy="249.5058" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-4" cx="262.012" cy="237.5661" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="252.5719" cy="233.6247" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="253.0234" cy="247.0312" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="254.28" cy="241.2811" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="251.393" cy="253.8627" rx="1.5119" ry="1.4586"/>
          <ellipse class="super-19" cx="266.488" cy="232.7817" rx="1.5119" ry="1.4586"/>
        </g>
        <g class="super-9">
          <line class="super-20" x1="197.8985" y1="214.0915" x2="199.2314" y2="212.8856"/>
          <line class="super-20" x1="199.2314" y1="212.8856" x2="197.8985" y2="211.6796"/>
          <line class="super-20" x1="195" y1="212.8856" x2="199.2314" y2="212.8856"/>
        </g>
        <g class="super-9">
          <line class="super-20" x1="281.8431" y1="249.7963" x2="283.1759" y2="248.5904"/>
          <line class="super-20" x1="283.1759" y1="248.5904" x2="281.8431" y2="247.3844"/>
          <line class="super-20" x1="278.9445" y1="248.5904" x2="283.1759" y2="248.5904"/>
        </g>
        <g class="super-9">
          <line class="super-20" x1="266.8431" y1="219.7963" x2="268.1759" y2="218.5904"/>
          <line class="super-20" x1="268.1759" y1="218.5904" x2="266.8431" y2="217.3844"/>
          <line class="super-20" x1="263.9445" y1="218.5904" x2="268.1759" y2="218.5904"/>
        </g>
      </g>
      <g>
        <rect class="super-11" x="94" y="224" width="73" height="10"/>
        <text class="super-12" transform="translate(96.6945 231.3671)">Assoziationsanalyse</text>
        <circle class="super-4" cx="139.4915" cy="257.8058" r="3.2781"/>
        <circle class="super-4" cx="123.363" cy="254.9821" r="1.791"/>
        <circle class="super-4" cx="100.5917" cy="242.0947" r="1.0945"/>
        <circle class="super-4" cx="94.4198" cy="251.3524" r="1.0945"/>
        <circle class="super-4" cx="159.9739" cy="267.6381" r="1.0945"/>
        <circle class="super-4" cx="150.1815" cy="265.607" r="1.0945"/>
        <circle class="super-4" cx="150.9484" cy="259.4874" r="1.236"/>
        <circle class="super-4" cx="154.9971" cy="253.0512" r="1.1814"/>
        <line class="super-21" x1="139.5708" y1="257.6895" x2="123.2468" y2="254.9028"/>
        <line class="super-21" x1="100.5365" y1="241.9049" x2="123.2468" y2="254.9028"/>
        <line class="super-21" x1="139.6077" y1="257.885" x2="154.5267" y2="253.2414"/>
        <line class="super-21" x1="154.8808" y1="252.9719" x2="159.9489" y2="267.6754"/>
        <line class="super-21" x1="150.8321" y1="259.4082" x2="154.8808" y2="252.9719"/>
        <line class="super-21" x1="159.9489" y1="267.6754" x2="150.8321" y2="259.4082"/>
        <line class="super-21" x1="150.1815" y1="265.607" x2="151.0647" y2="259.5667"/>
        <line class="super-21" x1="159.9272" y1="267.7545" x2="150.1815" y2="265.607"/>
        <line class="super-21" x1="123.3723" y1="254.8657" x2="94" y2="251"/>
        <line class="super-21" x1="139.5441" y1="257.9315" x2="150.9881" y2="259.4055"/>
        <line class="super-21" x1="150.1066" y1="265.5242" x2="139.5441" y2="257.9315"/>
        <line class="super-21" x1="134.4816" y1="273.3812" x2="140.0362" y2="257.9516"/>
        <circle class="super-4" cx="134.6043" cy="273.6526" r="1.0945"/>
      </g>
    </g>
  </g>
</svg>
    `
  },
  {
    name: "songs",
    content:   `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
  <defs>
    <style>
      .visible{
         visibility: visible !important;
      } 
      #song .cls-1 {
        fill: #26243100;
      }

      #song .cls-2 {
        font-size: 24px;
      }

      #song .cls-11, .cls-13, .cls-14, .cls-19, .cls-2, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9 {
        fill: #3bba7d;
      }

      #song .cls-11, .cls-14, .cls-19, .cls-2, .cls-5, .cls-7, .cls-9 {
        font-family: droid-sans-mono, monospace;
      }

      #song .cls-10, .cls-15, .cls-16, .cls-17, .cls-18, .cls-20, .cls-3, .cls-4 {
        fill: none;
        stroke: #3bba7d;
        stroke-miterlimit: 10;
      }

      #song .cls-3, .cls-4 {
        stroke-linecap: round;
      }

      #song .cls-3 {
        stroke-width: 3.7388px;
      }

      #song .cls-5 {
        font-size: 28px;
      }

      #song .cls-19, .cls-7 {
        font-size: 18px;
      }

      #song .cls-8 {
        opacity: 0.3;
      }

      #song .cls-14, .cls-9 {
        font-size: 16px;
      }

      #song .cls-11 {
        font-size: 20px;
      }

      #song .cls-12, .cls-13, .cls-14, .cls-15 {
        opacity: 0.16;
      }

      #song .cls-16, .cls-20 {
        stroke-width: 3px;
      }

      #song .cls-17 {
        stroke-width: 2px;
      }

      #song .cls-18 {
        stroke-width: 1.3px;
      }

      #song .cls-19, .cls-20 {
        opacity: 0.6;
      }
    </style>
  </defs>
  <g id="song">
    <g id="background">
      <rect class="cls-1" x="-0.2831" y="-0.2712" width="600" height="600"/>
    </g>
    <g id="Base">
      <g id="base-2" data-name="base">
        <text class="cls-2" transform="translate(498.4463 588.7705) scale(0.9662 1)">Tempo</text>
        <text class="cls-2" transform="translate(8.2832 25.9756) scale(0.9662 1)">Lautstärke</text>
        <line class="cls-3" x1="36.687" y1="551.143" x2="587.9479" y2="551.143"/>
        <line class="cls-3" x1="36.687" y1="45.8129" x2="36.687" y2="551.143"/>
        <g>
          <line class="cls-3" x1="36.687" y1="45.8129" x2="25.1367" y2="57.767"/>
          <line class="cls-3" x1="36.687" y1="45.8129" x2="48.2372" y2="57.767"/>
        </g>
        <g>
          <line class="cls-3" x1="588.0807" y1="551.3525" x2="576.5305" y2="539.3985"/>
          <line class="cls-3" x1="588.0807" y1="551.3525" x2="576.5305" y2="563.3066"/>
        </g>
      </g>
    </g>
    <g id="songs-layer-1" class="songs-layer" visibility="hidden" data-name="1">
      <line class="cls-4" x1="171" y1="278" x2="36.5" y2="277.5"/>
      <line class="cls-4" x1="171.5" y1="278.5" x2="171.5" y2="551.5"/>
      <text class="cls-5" transform="translate(9.2871 285.2002)">6</text>
      <text class="cls-5" transform="translate(163.2871 582.2002)">2</text>
      <circle class="cls-6" cx="170.7169" cy="277.7288" r="10"/>
      <text class="cls-7" transform="translate(199.6602 285.6143)">Song 1</text>
    </g>
    <g id="songs-layer-2" class="songs-layer" visibility="hidden" data-name="2">
      <g id="songs">
        <circle class="cls-6" cx="117.7169" cy="452.7288" r="10"/>
        <circle class="cls-6" cx="141.7169" cy="384.7288" r="10"/>
        <circle class="cls-6" cx="141.7169" cy="330.7288" r="10"/>
        <circle class="cls-6" cx="200.7169" cy="427.7288" r="10"/>
        <circle class="cls-6" cx="289.7169" cy="472.7288" r="10"/>
        <circle class="cls-6" cx="97.7169" cy="335.7288" r="10"/>
        <circle class="cls-8" cx="364.7169" cy="355.7288" r="10"/>
        <circle class="cls-8" cx="344.7169" cy="288.7288" r="10"/>
        <circle class="cls-8" cx="513.7169" cy="149.7288" r="10"/>
        <circle class="cls-8" cx="462.7169" cy="224.7288" r="10"/>
        <circle class="cls-8" cx="472.7169" cy="292.7288" r="10"/>
        <circle class="cls-8" cx="381.7169" cy="188.7288" r="10"/>
        <circle class="cls-8" cx="299.7169" cy="85.7288" r="10"/>
        <circle class="cls-8" cx="463" cy="52" r="10"/>
      </g>
      <circle class="cls-6" cx="171" cy="278" r="10"/>
      <circle class="cls-6" cx="463" cy="23" r="10"/>
      <text class="cls-9" transform="translate(485.3975 28.1172)">like</text>
      <text class="cls-9" transform="translate(485.3975 58.1172)">dislike</text>
      <rect class="cls-10" x="441" y="8" width="147" height="62"/>
    </g>
    <g id="songs-layer-3" class="songs-layer" visibility="hidden" data-name="3">
      <text class="cls-11" transform="translate(161.3975 306.1123)">Modell wird trainiert... </text>
      <g id="songs-2" data-name="songs" class="cls-12">
        <circle class="cls-6" cx="117.7169" cy="452.7288" r="10"/>
        <circle class="cls-6" cx="141.7169" cy="384.7288" r="10"/>
        <circle class="cls-6" cx="141.7169" cy="330.7288" r="10"/>
        <circle class="cls-6" cx="200.7169" cy="427.7288" r="10"/>
        <circle class="cls-6" cx="289.7169" cy="472.7288" r="10"/>
        <circle class="cls-6" cx="97.7169" cy="335.7288" r="10"/>
        <circle class="cls-8" cx="364.7169" cy="355.7288" r="10"/>
        <circle class="cls-8" cx="344.7169" cy="288.7288" r="10"/>
        <circle class="cls-8" cx="513.7169" cy="149.7288" r="10"/>
        <circle class="cls-8" cx="462.7169" cy="224.7288" r="10"/>
        <circle class="cls-8" cx="472.7169" cy="292.7288" r="10"/>
        <circle class="cls-8" cx="381.7169" cy="188.7288" r="10"/>
        <circle class="cls-8" cx="299.7169" cy="85.7288" r="10"/>
        <circle class="cls-8" cx="463" cy="52" r="10"/>
      </g>
      <circle class="cls-13" cx="171" cy="278" r="10"/>
      <circle class="cls-13" cx="463" cy="23" r="10"/>
      <text class="cls-14" transform="translate(485.3975 28.1172)">like</text>
      <text class="cls-14" transform="translate(485.3975 58.1172)">dislike</text>
      <rect class="cls-15" x="441" y="8" width="147" height="62"/>
    </g>
    <g id="songs-layer-4" class="songs-layer" visibility="hidden" data-name="4">
      <g id="like">
        <circle class="cls-16" cx="273.5" cy="388.5" r="10"/>
      </g>
      <text class="cls-7" transform="translate(300.3018 392.1201)">neuer, unkebannter Song</text>
      <g id="songs-3" data-name="songs">
        <circle class="cls-6" cx="117.7169" cy="452.7288" r="10"/>
        <circle class="cls-6" cx="141.7169" cy="384.7288" r="10"/>
        <circle class="cls-6" cx="141.7169" cy="330.7288" r="10"/>
        <circle class="cls-6" cx="200.7169" cy="427.7288" r="10"/>
        <circle class="cls-6" cx="289.7169" cy="472.7288" r="10"/>
        <circle class="cls-6" cx="97.7169" cy="335.7288" r="10"/>
        <circle class="cls-8" cx="364.7169" cy="355.7288" r="10"/>
        <circle class="cls-8" cx="344.7169" cy="288.7288" r="10"/>
#song         <circle class="cls-8" cx="472.7169" cy="292.7288" r="10"/>
        <circle class="cls-8" cx="381.7169" cy="188.7288" r="10"/>
        <circle class="cls-8" cx="299.7169" cy="85.7288" r="10"/>
        <circle class="cls-17" cx="425" cy="61" r="10"/>
      </g>
      <circle class="cls-6" cx="171" cy="278" r="10"/>
      <circle class="cls-6" cx="425" cy="25" r="10"/>
      <text class="cls-9" transform="translate(444.5 30.6172)">Trainingsdaten</text>
      <text class="cls-9" transform="translate(444.5 56.6172)">unbekannte <tspan x="0" y="19.1992">Daten</tspan></text>
      <rect class="cls-18" x="401.5" y="8" width="186.5" height="77.5"/>
    </g>
    <g id="songs-layer-5" class="songs-layer" visibility="hidden" data-name="5">
      <g id="like-2" data-name="like">
        <circle class="cls-16" cx="273.5" cy="388.5" r="10"/>
      </g>
      <text class="cls-7" transform="translate(289.7002 394.1201)">-&gt; like</text>
      <g id="songs-4" data-name="songs">
        <circle class="cls-6" cx="117.7169" cy="452.7288" r="10"/>
        <circle class="cls-6" cx="141.7169" cy="384.7288" r="10"/>
        <circle class="cls-6" cx="141.7169" cy="330.7288" r="10"/>
        <circle class="cls-6" cx="200.7169" cy="427.7288" r="10"/>
        <circle class="cls-6" cx="289.7169" cy="472.7288" r="10"/>
        <circle class="cls-6" cx="97.7169" cy="335.7288" r="10"/>
        <circle class="cls-8" cx="364.7169" cy="355.7288" r="10"/>
        <circle class="cls-8" cx="344.7169" cy="288.7288" r="10"/>
        <circle class="cls-8" cx="513.7169" cy="149.7288" r="10"/>
        <circle class="cls-8" cx="462.7169" cy="224.7288" r="10"/>
        <circle class="cls-8" cx="472.7169" cy="292.7288" r="10"/>
        <circle class="cls-8" cx="381.7169" cy="188.7288" r="10"/>
        <circle class="cls-8" cx="299.7169" cy="85.7288" r="10"/>
      </g>
      <circle class="cls-6" cx="171" cy="278" r="10"/>
      <circle class="cls-6" cx="425" cy="25" r="10"/>
      <text class="cls-9" transform="translate(444.5 30.6172)">Trainingsdaten</text>
      <text class="cls-9" transform="translate(444.5 56.6172)">unbekannte <tspan x="0" y="19.1992">Daten</tspan></text>
      <rect class="cls-18" x="401.5" y="8" width="186.5" height="77.5"/>
      <circle class="cls-17" cx="425" cy="61" r="10"/>
    </g>
    <g id="songs-layer-6" class="songs-layer" visibility="hidden" data-name="6">
      <g id="dislike">
        <text class="cls-19" transform="translate(152.6279 173.1201)">dislike</text>
        <text class="cls-19" transform="translate(222.6279 222.1201)">dislike</text>
        <text class="cls-19" transform="translate(424.6279 466.1201)">dislike</text>
        <circle class="cls-20" cx="190.5" cy="140.5" r="10"/>
        <circle class="cls-20" cx="260.5" cy="189.5" r="10"/>
        <circle class="cls-20" cx="462.5" cy="434.5" r="10"/>
      </g>
      <g id="like-3" data-name="like">
        <text class="cls-7" transform="translate(252.3281 421.1201)">like</text>
        <text class="cls-7" transform="translate(323.3281 533.1201)">like</text>
        <circle class="cls-16" cx="344.5" cy="500.5" r="10"/>
        <circle class="cls-16" cx="273.5" cy="388.5" r="10"/>
      </g>
      <circle class="cls-6" cx="425" cy="25" r="10"/>
      <text class="cls-9" transform="translate(444.5 30.6172)">Trainingsdaten</text>
      <text class="cls-9" transform="translate(444.5 56.6172)">unbekannte <tspan x="0" y="19.1992">Daten</tspan></text>
      <rect class="cls-18" x="401.5" y="8" width="186.5" height="77.5"/>
      <circle class="cls-17" cx="425" cy="61" r="10"/>
    </g>
    <g id="songs-layer-7" class="songs-layer" visibility="hidden" data-name="7">
      <g id="like-4" data-name="like">
        <text class="cls-7" transform="translate(252.3281 421.1201)">like</text>
        <text class="cls-7" transform="translate(323.3281 533.1201)">like</text>
        <circle class="cls-16" cx="344.5" cy="500.5" r="10"/>
        <circle class="cls-16" cx="273.5" cy="388.5" r="10"/>
      </g>
      <circle class="cls-6" cx="425" cy="25" r="10"/>
      <text class="cls-9" transform="translate(444.5 30.6172)">Trainingsdaten</text>
      <text class="cls-9" transform="translate(444.5 56.6172)">unbekannte <tspan x="0" y="19.1992">Daten</tspan></text>
      <rect class="cls-18" x="401.5" y="8" width="186.5" height="77.5"/>
      <circle class="cls-17" cx="425" cy="61" r="10"/>
      <g id="songs-5" data-name="songs">
        <circle class="cls-6" cx="117.7169" cy="452.7288" r="10"/>
        <circle class="cls-6" cx="141.7169" cy="384.7288" r="10"/>
        <circle class="cls-6" cx="141.7169" cy="330.7288" r="10"/>
        <circle class="cls-6" cx="200.7169" cy="427.7288" r="10"/>
        <circle class="cls-6" cx="289.7169" cy="472.7288" r="10"/>
        <circle class="cls-6" cx="97.7169" cy="335.7288" r="10"/>
        <circle class="cls-8" cx="364.7169" cy="355.7288" r="10"/>
        <circle class="cls-8" cx="344.7169" cy="288.7288" r="10"/>
        <circle class="cls-8" cx="513.7169" cy="149.7288" r="10"/>
        <circle class="cls-8" cx="462.7169" cy="224.7288" r="10"/>
        <circle class="cls-8" cx="472.7169" cy="292.7288" r="10"/>
        <circle class="cls-8" cx="381.7169" cy="188.7288" r="10"/>
        <circle class="cls-8" cx="299.7169" cy="85.7288" r="10"/>
      </g>
      <circle class="cls-6" cx="171" cy="278" r="10"/>
      <g id="dislike-2" data-name="dislike">
        <text class="cls-19" transform="translate(152.6279 173.1201)">dislike</text>
        <text class="cls-19" transform="translate(222.6279 222.1201)">dislike</text>
        <text class="cls-19" transform="translate(424.6279 466.1201)">dislike</text>
        <circle class="cls-20" cx="190.5" cy="140.5" r="10"/>
        <circle class="cls-20" cx="260.5" cy="189.5" r="10"/>
        <circle class="cls-20" cx="462.5" cy="434.5" r="10"/>
      </g>
    </g>
  </g>
</svg>
`
  },
  {
    name: 'svg-input-output',
    content: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.8072 185.8072">
  <defs>
    <style>
      .io-1, .io-3 {
        fill: none;
        stroke: #3bba7d;
        stroke-miterlimit: 10;
      }

      .io-2, .io-4 {
        fill: #3bba7d;
      }

      .io-2 {
        opacity: 0.57;
      }

      .io-3 {
        stroke-width: 0.8188px;
      }

      .io-4 {
        font-size: 12px;
        font-family: droid-sans-mono, monospace;
      }
    </style>
  </defs>
  <g id="Input-Output">
    <circle class="io-1" cx="253" cy="96" r="7.5"/>
    <line class="io-1" x1="194" y1="95.5" x2="227" y2="95.5"/>
    <line class="io-1" x1="76.5" y1="95" x2="109.5" y2="95"/>
    <g id="g3">
      <circle class="io-2" cx="48.8084" cy="72.1317" r="2.479"/>
      <circle class="io-2" cx="14.9281" cy="87.4192" r="2.479"/>
      <circle class="io-2" cx="57.485" cy="70.479" r="2.479"/>
      <circle class="io-2" cx="57.8982" cy="77.9162" r="2.479"/>
      <circle class="io-2" cx="62.8563" cy="82.8743" r="2.479"/>
      <circle class="io-2" cx="6.2515" cy="103.1198" r="2.479"/>
      <circle class="io-2" cx="21.9521" cy="103.5329" r="2.479"/>
      <circle class="io-2" cx="34.3473" cy="80.8084" r="2.479"/>
      <circle class="io-2" cx="36.8263" cy="95.2695" r="2.479"/>
      <circle class="io-2" cx="22.7784" cy="85.7665" r="2.479"/>
      <circle class="io-2" cx="29.8024" cy="87.8323" r="2.479"/>
      <circle class="io-2" cx="41.3713" cy="83.2874" r="2.479"/>
      <circle class="io-2" cx="48.8084" cy="97.3353" r="2.479"/>
      <circle class="io-2" cx="28.1497" cy="80.8084" r="2.479"/>
      <circle class="io-2" cx="47.982" cy="89.8982" r="2.479"/>
      <circle class="io-2" cx="19.4731" cy="123.3653" r="2.479"/>
      <circle class="io-2" cx="30.2156" cy="125.8443" r="2.479"/>
      <circle class="io-2" cx="7.491" cy="94.8563" r="2.479"/>
      <circle class="io-2" cx="14.515" cy="106.012" r="2.479"/>
      <circle class="io-2" cx="26.9102" cy="95.6826" r="2.479"/>
      <circle class="io-2" cx="28.5629" cy="107.6647" r="2.479"/>
      <circle class="io-2" cx="34.3473" cy="115.1018" r="2.479"/>
      <circle class="io-2" cx="10.3832" cy="82.8743" r="2.479"/>
      <circle class="io-2" cx="12.0359" cy="72.5449" r="2.479"/>
      <circle class="io-2" cx="15.3413" cy="92.3772" r="2.479"/>
      <circle class="io-2" cx="42.6108" cy="94.8563" r="2.479"/>
      <circle class="io-2" cx="18.6467" cy="110.9701" r="2.479"/>
      <circle class="io-2" cx="25.6707" cy="117.994" r="2.479"/>
      <circle class="io-2" cx="28.1497" cy="132.4551" r="2.479"/>
      <circle class="io-2" cx="35.1737" cy="102.2934" r="2.479"/>
      <circle class="io-2" cx="42.1976" cy="113.4491" r="2.479"/>
      <circle class="io-2" cx="54.5928" cy="103.1198" r="2.479"/>
      <circle class="io-2" cx="59.5509" cy="108.0778" r="2.479"/>
      <circle class="io-2" cx="47.982" cy="78.7425" r="2.479"/>
      <circle class="io-2" cx="56.2455" cy="127.9102" r="2.479"/>
      <circle class="io-2" cx="19.4731" cy="79.5689" r="2.479"/>
      <circle class="io-2" cx="57.0719" cy="92.3772" r="2.479"/>
      <circle class="io-2" cx="38.0659" cy="90.3114" r="2.479"/>
      <circle class="io-2" cx="60.7904" cy="99.4012" r="2.479"/>
      <circle class="io-2" cx="45.503" cy="109.7305" r="2.479"/>
      <circle class="io-2" cx="55.8323" cy="83.2874" r="2.479"/>
      <circle class="io-2" cx="65.7485" cy="74.6108" r="2.479"/>
      <circle class="io-2" cx="36.8263" cy="134.521" r="2.479"/>
    </g>
    <rect class="io-3" x="94.5" y="3.5" width="118" height="177"/>
    <text class="io-4" transform="translate(234.7035 63.2344)">Output</text>
    <text class="io-4" transform="translate(1.7035 50.2344)">Input</text>
    <text class="io-4" transform="translate(128.7035 97.2344)">Modell</text>
  </g>
</svg>    
    `
  },
  {
    name: '',
    content: ``
  }
]
