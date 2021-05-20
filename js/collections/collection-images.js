class CollectionImage{
  constructor(parent, data) {
    this.parent = parent;
    this.data = data;
    this.content = data.content;
    this.sourceName = data.content.source
    this.indications = data.content.indications
    this.source = SVGS.find(item => item.name===this.sourceName).content
    this.text = data.content.text

    this.svgContainer = document.createElement('DIV')
    this.nextButton = document.createElement('BUTTON')
    this.ctText = document.createElement('DIV')

    this.index = -1
    this.layers = null
    this.length = null
  }

  init(){
    this.nextButton.classList.add('btn-svg')
    this.ctText.classList.add('text-svg')
    this.nextButton.innerText = '-> '+this.indications[0]
    this.svgContainer.innerHTML = this.source
    this.ctText.innerText = this.text[0] + '  '
    this.parent.appendChild(this.svgContainer)
    this.parent.appendChild(this.ctText)
    this.ctText.appendChild(this.nextButton)
    this.layers = document.querySelectorAll(`.${this.sourceName}-layer`)
    this.length = this.layers.length-1
  }

  create(){
    this.nextButton.onclick = () => this.update(this.index++);
  }

  reset(){
    this.index=-1
  }

  update(){
    if(this.index>this.length) this.reset()
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
    name: 'svg-beispiel 1',
    content: {
      indications:['clustering', 'reset'],
      source: 'cluster',
      text: [
        "text 1",
        "text 2",
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
    name: '',
    content: ` 
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
        font-family: FiraMono-Regular, Fira Mono;
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
        font-family: FiraMono-Regular, Fira Mono;
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
