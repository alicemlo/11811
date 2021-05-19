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
    name: 'cluster',
    content: ` 
<svg id="cluster" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330.8072 330.8072">
  <defs>
    <style>
      .clu-1, .clu-3, .clu-5, .clu-7 {
        fill: none;
        stroke: #3bba7d;
        stroke-miterlimit: 10;
      }

      .clu-1, .clu-3 {
        stroke-linecap: round;
      }

      .clu-1 {
        stroke-width: 0.7702px;
      }

      .clu-2 {
        font-size: 9px;
      }

      .clu-10, .clu-12, .clu-2, .clu-4, .clu-6, .clu-9 {
        fill: #3bba7d;
      }

      .clu-2, .clu-4 {
        font-family: FiraMono-Regular, Fira Mono;
      }

      .clu-3 {
        stroke-width: 1.1645px;
      }

      .clu-4 {
        font-size: 14px;
      }

      .clu-5 {
        stroke-width: 0.7644px;
      }

      .clu-7 {
        stroke-width: 0.7168px;
      }

      .clu-8 {
        opacity: 0.6;
      }

      .clu-9 {
        opacity: 0.57;
      }

      .clu-10 {
        opacity: 0.76;
      }

      .clu-11 {
        opacity: 0.5;
      }

      .clu-12 {
        opacity: 0.34;
      }
    </style>
  </defs>
  <g id="Base">
    <g>
      <line class="clu-1" x1="16.25" y1="23.9539" x2="19.75" y2="23.9539"/>
      <line class="clu-1" x1="16.25" y1="65.2396" x2="19.75" y2="65.2396"/>
      <line class="clu-1" x1="16.25" y1="106.5254" x2="19.75" y2="106.5254"/>
      <line class="clu-1" x1="16.25" y1="147.8111" x2="19.75" y2="147.8111"/>
      <line class="clu-1" x1="16.25" y1="189.0968" x2="19.75" y2="189.0968"/>
      <line class="clu-1" x1="16.25" y1="230.3825" x2="19.75" y2="230.3825"/>
      <line class="clu-1" x1="16.25" y1="271.6682" x2="19.75" y2="271.6682"/>
      <text class="clu-2" transform="translate(4.7035 273.2344)">1</text>
      <text class="clu-2" transform="translate(4.7015 25.2343)">7</text>
      <text class="clu-2" transform="translate(4.7035 66.5683)">6</text>
      <text class="clu-2" transform="translate(4.7035 107.9023)">5</text>
      <text class="clu-2" transform="translate(4.7035 149.2343)">4</text>
      <text class="clu-2" transform="translate(4.7035 190.5683)">3</text>
      <text class="clu-2" transform="translate(4.7035 231.9023)">2</text>
      <line class="clu-3" x1="20.0383" y1="311.9617" x2="20.0383" y2="11.4543"/>
    </g>
    <g>
      <line class="clu-1" x1="308.5004" y1="312.5008" x2="308.5004" y2="316.0008"/>
      <line class="clu-1" x1="267.2147" y1="312.5008" x2="267.2147" y2="316.0008"/>
      <line class="clu-1" x1="225.929" y1="312.5008" x2="225.929" y2="316.0008"/>
      <line class="clu-1" x1="184.6432" y1="312.5008" x2="184.6432" y2="316.0008"/>
      <line class="clu-1" x1="143.3575" y1="312.5008" x2="143.3575" y2="316.0008"/>
      <line class="clu-1" x1="102.0718" y1="312.5008" x2="102.0718" y2="316.0008"/>
      <line class="clu-1" x1="60.7861" y1="312.5008" x2="60.7861" y2="316.0008"/>
      <text class="clu-2" transform="translate(58.0691 324.916)">1</text>
      <text class="clu-2" transform="translate(306.0691 324.916)">7</text>
      <text class="clu-2" transform="translate(264.7358 324.916)">6</text>
      <text class="clu-2" transform="translate(223.4024 324.916)">5</text>
      <text class="clu-2" transform="translate(182.0691 324.916)">4</text>
      <text class="clu-2" transform="translate(140.7357 324.916)">3</text>
      <text class="clu-2" transform="translate(99.4024 324.916)">2</text>
      <line class="clu-3" x1="20.4926" y1="312" x2="321" y2="312"/>
    </g>
  </g>
  <g id="cluster-layer-1" class="cluster-layer" visibility="hidden">
    <g id="Label">
      <text class="clu-4" transform="translate(40.0691 26.916)">unclustered</text>
      <rect class="clu-5" x="35.991" y="12.5" width="99.509" height="20"/>
    </g>
    <g id="g3">
      <circle class="clu-6" cx="277" cy="17" r="6"/>
      <circle class="clu-6" cx="195" cy="54" r="6"/>
      <circle class="clu-6" cx="298" cy="13" r="6"/>
      <circle class="clu-6" cx="299" cy="31" r="6"/>
      <circle class="clu-6" cx="311" cy="43" r="6"/>
      <circle class="clu-6" cx="174" cy="92" r="6"/>
      <circle class="clu-6" cx="212" cy="93" r="6"/>
      <circle class="clu-6" cx="242" cy="38" r="6"/>
      <circle class="clu-6" cx="248" cy="73" r="6"/>
      <circle class="clu-6" cx="214" cy="50" r="6"/>
      <circle class="clu-6" cx="231" cy="55" r="6"/>
      <circle class="clu-6" cx="259" cy="44" r="6"/>
      <circle class="clu-6" cx="277" cy="78" r="6"/>
      <circle class="clu-6" cx="227" cy="38" r="6"/>
      <circle class="clu-6" cx="275" cy="60" r="6"/>
      <circle class="clu-6" cx="206" cy="141" r="6"/>
      <circle class="clu-6" cx="232" cy="147" r="6"/>
      <circle class="clu-6" cx="177" cy="72" r="6"/>
      <circle class="clu-6" cx="194" cy="99" r="6"/>
      <circle class="clu-6" cx="224" cy="74" r="6"/>
      <circle class="clu-6" cx="228" cy="103" r="6"/>
      <circle class="clu-6" cx="242" cy="121" r="6"/>
      <circle class="clu-6" cx="184" cy="43" r="6"/>
      <circle class="clu-6" cx="188" cy="18" r="6"/>
      <circle class="clu-6" cx="196" cy="66" r="6"/>
      <circle class="clu-6" cx="262" cy="72" r="6"/>
      <circle class="clu-6" cx="204" cy="111" r="6"/>
      <circle class="clu-6" cx="221" cy="128" r="6"/>
      <circle class="clu-6" cx="227" cy="163" r="6"/>
      <circle class="clu-6" cx="244" cy="90" r="6"/>
      <circle class="clu-6" cx="261" cy="117" r="6"/>
      <circle class="clu-6" cx="291" cy="92" r="6"/>
      <circle class="clu-6" cx="303" cy="104" r="6"/>
      <circle class="clu-6" cx="275" cy="33" r="6"/>
      <circle class="clu-6" cx="295" cy="152" r="6"/>
      <circle class="clu-6" cx="206" cy="35" r="6"/>
      <circle class="clu-6" cx="297" cy="66" r="6"/>
      <circle class="clu-6" cx="251" cy="61" r="6"/>
      <circle class="clu-6" cx="306" cy="83" r="6"/>
      <circle class="clu-6" cx="269" cy="108" r="6"/>
      <circle class="clu-6" cx="294" cy="44" r="6"/>
      <circle class="clu-6" cx="318" cy="23" r="6"/>
      <circle class="clu-6" cx="248" cy="168" r="6"/>
    </g>
    <g id="g2">
      <circle class="clu-6" cx="221" cy="281" r="6"/>
      <circle class="clu-6" cx="176" cy="279" r="6"/>
      <circle class="clu-6" cx="183" cy="250" r="6"/>
      <circle class="clu-6" cx="193" cy="224" r="6"/>
      <circle class="clu-6" cx="247" cy="291" r="6"/>
      <circle class="clu-6" cx="166" cy="247" r="6"/>
      <circle class="clu-6" cx="178" cy="266" r="6"/>
      <circle class="clu-6" cx="231" cy="230" r="6"/>
      <circle class="clu-6" cx="295" cy="228" r="6"/>
      <circle class="clu-6" cx="307" cy="240" r="6"/>
      <circle class="clu-6" cx="313" cy="275" r="6"/>
      <circle class="clu-6" cx="273" cy="244" r="6"/>
      <circle class="clu-6" cx="321" cy="267" r="6"/>
      <circle class="clu-6" cx="318" cy="253" r="6"/>
      <circle class="clu-6" cx="319" cy="254" r="6"/>
      <circle class="clu-6" cx="315" cy="224" r="6"/>
      <circle class="clu-6" cx="289" cy="248" r="6"/>
      <circle class="clu-6" cx="284" cy="209" r="6"/>
      <circle class="clu-6" cx="242" cy="195" r="6"/>
      <circle class="clu-6" cx="254" cy="207" r="6"/>
      <circle class="clu-6" cx="260" cy="242" r="6"/>
      <circle class="clu-6" cx="206" cy="268" r="6"/>
      <circle class="clu-6" cx="220" cy="211" r="6"/>
      <circle class="clu-6" cx="206" cy="287" r="6"/>
      <circle class="clu-6" cx="285" cy="177" r="6"/>
      <circle class="clu-6" cx="268" cy="234" r="6"/>
      <circle class="clu-6" cx="265" cy="220" r="6"/>
      <circle class="clu-6" cx="160" cy="227" r="6"/>
      <circle class="clu-6" cx="236" cy="266" r="6"/>
      <circle class="clu-6" cx="208" cy="249" r="6"/>
      <circle class="clu-6" cx="225" cy="176" r="6"/>
      <circle class="clu-6" cx="236" cy="251" r="6"/>
      <circle class="clu-6" cx="202" cy="172" r="6"/>
      <circle class="clu-6" cx="306" cy="203" r="6"/>
      <circle class="clu-6" cx="266" cy="221" r="6"/>
      <circle class="clu-6" cx="210" cy="209" r="6"/>
      <circle class="clu-6" cx="265" cy="186" r="6"/>
      <circle class="clu-6" cx="229" cy="197" r="6"/>
      <circle class="clu-6" cx="207" cy="195" r="6"/>
      <circle class="clu-6" cx="202" cy="238" r="6"/>
      <circle class="clu-6" cx="236" cy="215" r="6"/>
      <circle class="clu-6" cx="247" cy="239" r="6"/>
      <circle class="clu-6" cx="178" cy="226" r="6"/>
      <circle class="clu-6" cx="208" cy="196" r="6"/>
      <circle class="clu-6" cx="214" cy="231" r="6"/>
    </g>
    <g id="g1">
      <circle class="clu-6" cx="170" cy="188" r="6"/>
      <circle class="clu-6" cx="189" cy="184" r="6"/>
      <circle class="clu-6" cx="42" cy="183" r="6"/>
      <circle class="clu-6" cx="43" cy="109" r="6"/>
      <circle class="clu-6" cx="54" cy="149" r="6"/>
      <circle class="clu-6" cx="37" cy="172" r="6"/>
      <circle class="clu-6" cx="79" cy="159" r="6"/>
      <circle class="clu-6" cx="71" cy="187" r="6"/>
      <circle class="clu-6" cx="62" cy="175" r="6"/>
      <circle class="clu-6" cx="107" cy="213" r="6"/>
      <circle class="clu-6" cx="107" cy="143" r="6"/>
      <circle class="clu-6" cx="95" cy="172" r="6"/>
      <circle class="clu-6" cx="66" cy="215" r="6"/>
      <circle class="clu-6" cx="96" cy="190" r="6"/>
      <circle class="clu-6" cx="110" cy="187" r="6"/>
      <circle class="clu-6" cx="131" cy="164" r="6"/>
      <circle class="clu-6" cx="108" cy="160" r="6"/>
      <circle class="clu-6" cx="79" cy="217" r="6"/>
      <circle class="clu-6" cx="152" cy="206" r="6"/>
      <circle class="clu-6" cx="190" cy="202" r="6"/>
      <circle class="clu-6" cx="185" cy="145" r="6"/>
      <circle class="clu-6" cx="169" cy="208" r="6"/>
      <circle class="clu-6" cx="160" cy="145" r="6"/>
      <circle class="clu-6" cx="150" cy="128" r="6"/>
      <circle class="clu-6" cx="147" cy="111" r="6"/>
      <circle class="clu-6" cx="127" cy="139" r="6"/>
      <circle class="clu-6" cx="80" cy="177" r="6"/>
      <circle class="clu-6" cx="102" cy="202" r="6"/>
      <circle class="clu-6" cx="132" cy="177" r="6"/>
      <circle class="clu-6" cx="144" cy="189" r="6"/>
      <circle class="clu-6" cx="136" cy="217" r="6"/>
      <circle class="clu-6" cx="96" cy="250" r="6"/>
      <circle class="clu-6" cx="161" cy="163" r="6"/>
      <circle class="clu-6" cx="127" cy="120" r="6"/>
      <circle class="clu-6" cx="144" cy="147" r="6"/>
      <circle class="clu-6" cx="174" cy="122" r="6"/>
      <circle class="clu-6" cx="127" cy="205" r="6"/>
    </g>
  </g>
  <g id="cluster-layer-2" class="cluster-layer" visibility="hidden">
    <g id="Label-2" data-name="Label">
      <text class="clu-4" transform="translate(40.0691 26.916)">clustered</text>
      <rect class="clu-7" x="35.991" y="12.5" width="87.509" height="20"/>
    </g>
    <g id="g3-2" data-name="g3" class="clu-8">
      <circle class="clu-9" cx="277" cy="17" r="6"/>
      <circle class="clu-9" cx="195" cy="54" r="6"/>
      <circle class="clu-9" cx="298" cy="13" r="6"/>
      <circle class="clu-9" cx="299" cy="31" r="6"/>
      <circle class="clu-9" cx="311" cy="43" r="6"/>
      <circle class="clu-9" cx="174" cy="92" r="6"/>
      <circle class="clu-9" cx="212" cy="93" r="6"/>
      <circle class="clu-9" cx="242" cy="38" r="6"/>
      <circle class="clu-9" cx="248" cy="73" r="6"/>
      <circle class="clu-9" cx="214" cy="50" r="6"/>
      <circle class="clu-9" cx="231" cy="55" r="6"/>
      <circle class="clu-9" cx="259" cy="44" r="6"/>
      <circle class="clu-9" cx="277" cy="78" r="6"/>
      <circle class="clu-9" cx="227" cy="38" r="6"/>
      <circle class="clu-9" cx="275" cy="60" r="6"/>
      <circle class="clu-9" cx="206" cy="141" r="6"/>
      <circle class="clu-9" cx="232" cy="147" r="6"/>
      <circle class="clu-9" cx="177" cy="72" r="6"/>
      <circle class="clu-9" cx="194" cy="99" r="6"/>
      <circle class="clu-9" cx="224" cy="74" r="6"/>
      <circle class="clu-9" cx="228" cy="103" r="6"/>
      <circle class="clu-9" cx="242" cy="121" r="6"/>
      <circle class="clu-9" cx="184" cy="43" r="6"/>
      <circle class="clu-9" cx="188" cy="18" r="6"/>
      <circle class="clu-9" cx="196" cy="66" r="6"/>
      <circle class="clu-9" cx="262" cy="72" r="6"/>
      <circle class="clu-9" cx="204" cy="111" r="6"/>
      <circle class="clu-9" cx="221" cy="128" r="6"/>
      <circle class="clu-9" cx="227" cy="163" r="6"/>
      <circle class="clu-9" cx="244" cy="90" r="6"/>
      <circle class="clu-9" cx="261" cy="117" r="6"/>
      <circle class="clu-9" cx="291" cy="92" r="6"/>
      <circle class="clu-9" cx="303" cy="104" r="6"/>
      <circle class="clu-9" cx="275" cy="33" r="6"/>
      <circle class="clu-9" cx="295" cy="152" r="6"/>
      <circle class="clu-9" cx="206" cy="35" r="6"/>
      <circle class="clu-9" cx="297" cy="66" r="6"/>
      <circle class="clu-9" cx="251" cy="61" r="6"/>
      <circle class="clu-9" cx="306" cy="83" r="6"/>
      <circle class="clu-9" cx="269" cy="108" r="6"/>
      <circle class="clu-9" cx="294" cy="44" r="6"/>
      <circle class="clu-9" cx="318" cy="23" r="6"/>
      <circle class="clu-9" cx="248" cy="168" r="6"/>
    </g>
    <g id="g2-2" data-name="g2">
      <circle class="clu-6" cx="221" cy="281" r="6"/>
      <circle class="clu-6" cx="176" cy="279" r="6"/>
      <circle class="clu-6" cx="183" cy="250" r="6"/>
      <circle class="clu-6" cx="193" cy="224" r="6"/>
      <circle class="clu-6" cx="247" cy="291" r="6"/>
      <circle class="clu-6" cx="166" cy="247" r="6"/>
      <circle class="clu-6" cx="178" cy="266" r="6"/>
      <circle class="clu-6" cx="231" cy="230" r="6"/>
      <circle class="clu-6" cx="295" cy="228" r="6"/>
      <circle class="clu-6" cx="307" cy="240" r="6"/>
      <circle class="clu-6" cx="313" cy="275" r="6"/>
      <circle class="clu-6" cx="273" cy="244" r="6"/>
      <circle class="clu-6" cx="321" cy="267" r="6"/>
      <circle class="clu-6" cx="318" cy="253" r="6"/>
      <circle class="clu-6" cx="319" cy="254" r="6"/>
      <circle class="clu-6" cx="315" cy="224" r="6"/>
      <circle class="clu-6" cx="289" cy="248" r="6"/>
      <circle class="clu-6" cx="284" cy="209" r="6"/>
      <circle class="clu-6" cx="242" cy="195" r="6"/>
      <circle class="clu-6" cx="254" cy="207" r="6"/>
      <circle class="clu-6" cx="260" cy="242" r="6"/>
      <circle class="clu-6" cx="206" cy="268" r="6"/>
      <circle class="clu-6" cx="220" cy="211" r="6"/>
      <circle class="clu-6" cx="206" cy="287" r="6"/>
      <circle class="clu-6" cx="285" cy="177" r="6"/>
      <circle class="clu-6" cx="268" cy="234" r="6"/>
      <circle class="clu-6" cx="265" cy="220" r="6"/>
      <circle class="clu-6" cx="160" cy="227" r="6"/>
      <circle class="clu-6" cx="236" cy="266" r="6"/>
      <circle class="clu-6" cx="208" cy="249" r="6"/>
      <circle class="clu-6" cx="225" cy="176" r="6"/>
      <circle class="clu-6" cx="236" cy="251" r="6"/>
      <circle class="clu-10" cx="202" cy="172" r="6"/>
      <circle class="clu-6" cx="306" cy="203" r="6"/>
      <circle class="clu-6" cx="266" cy="221" r="6"/>
      <circle class="clu-6" cx="210" cy="209" r="6"/>
      <circle class="clu-6" cx="265" cy="186" r="6"/>
      <circle class="clu-6" cx="229" cy="197" r="6"/>
      <circle class="clu-6" cx="207" cy="195" r="6"/>
      <circle class="clu-6" cx="202" cy="238" r="6"/>
      <circle class="clu-6" cx="236" cy="215" r="6"/>
      <circle class="clu-6" cx="247" cy="239" r="6"/>
      <circle class="clu-6" cx="178" cy="226" r="6"/>
      <circle class="clu-6" cx="208" cy="196" r="6"/>
      <circle class="clu-6" cx="214" cy="231" r="6"/>
    </g>
    <g id="g1-2" data-name="g1" class="clu-11">
      <circle class="clu-12" cx="170" cy="188" r="6"/>
      <circle class="clu-12" cx="189" cy="184" r="6"/>
      <circle class="clu-12" cx="42" cy="183" r="6"/>
      <circle class="clu-12" cx="43" cy="109" r="6"/>
      <circle class="clu-12" cx="54" cy="149" r="6"/>
      <circle class="clu-12" cx="37" cy="172" r="6"/>
      <circle class="clu-12" cx="79" cy="159" r="6"/>
      <circle class="clu-12" cx="71" cy="187" r="6"/>
      <circle class="clu-12" cx="62" cy="175" r="6"/>
      <circle class="clu-12" cx="107" cy="213" r="6"/>
      <circle class="clu-12" cx="107" cy="143" r="6"/>
      <circle class="clu-12" cx="95" cy="172" r="6"/>
      <circle class="clu-12" cx="66" cy="215" r="6"/>
      <circle class="clu-12" cx="96" cy="190" r="6"/>
      <circle class="clu-12" cx="110" cy="187" r="6"/>
      <circle class="clu-12" cx="131" cy="164" r="6"/>
      <circle class="clu-12" cx="108" cy="160" r="6"/>
      <circle class="clu-12" cx="79" cy="217" r="6"/>
      <circle class="clu-12" cx="152" cy="206" r="6"/>
      <circle class="clu-12" cx="190" cy="202" r="6"/>
      <circle class="clu-12" cx="185" cy="145" r="6"/>
      <circle class="clu-12" cx="169" cy="208" r="6"/>
      <circle class="clu-12" cx="160" cy="145" r="6"/>
      <circle class="clu-12" cx="150" cy="128" r="6"/>
      <circle class="clu-12" cx="147" cy="111" r="6"/>
      <circle class="clu-12" cx="127" cy="139" r="6"/>
      <circle class="clu-12" cx="80" cy="177" r="6"/>
      <circle class="clu-12" cx="102" cy="202" r="6"/>
      <circle class="clu-12" cx="132" cy="177" r="6"/>
      <circle class="clu-12" cx="144" cy="189" r="6"/>
      <circle class="clu-12" cx="136" cy="217" r="6"/>
      <circle class="clu-12" cx="96" cy="250" r="6"/>
      <circle class="clu-12" cx="161" cy="163" r="6"/>
      <circle class="clu-12" cx="127" cy="120" r="6"/>
      <circle class="clu-12" cx="144" cy="147" r="6"/>
      <circle class="clu-12" cx="174" cy="122" r="6"/>
      <circle class="clu-12" cx="127" cy="205" r="6"/>
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
    name: '',
    content: ``
  }
]
