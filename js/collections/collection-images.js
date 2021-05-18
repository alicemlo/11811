class CollectionImage{
  constructor(parent, data) {
    this.parent = parent;
    this.data = data;
    this.content = data.content;
    this.sourceName = data.content.source
    this.indications = data.content.indications
    this.source = SVGS.find(item => item.name===this.sourceName).content
    this.text = data.content.text

    this.svgContainer =document.createElement('DIV')
    this.nextButton = document.createElement('BUTTON')

    this.index = 0
    this.layers = null
    this.length = null
  }

  init(){
    this.nextButton.classList.add('btn-svg')
    this.nextButton.innerText=this.indications[this.index]
    this.svgContainer.innerHTML = this.source
    this.parent.appendChild(this.nextButton)
    this.parent.appendChild(this.svgContainer)
    this.layers = document.querySelectorAll(`.${this.sourceName}-layer`)
    this.length = this.layers.length-1
  }

  create(){
    this.nextButton.onclick = () => this.update(this.index++);
  }

  resetIndex(){
    this.index=0
  }

  update(){
    if(this.index>this.length) this.resetIndex()
    this.layers.forEach(layer => layer.classList.remove('visible'))
    this.setContent();
  }

  setContent(){
    const i = this.index
    const activeLayer = this.layers[i]
    if(activeLayer) activeLayer.classList.add('visible')
    this.nextButton.innerText = this.indications[i]

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
      "indications": ['>','alle Daten darstellen', 'Daten trainieren', 'KI Vorhersage', 'zurücksetzen'],
      'source': 'songs',
      'text': [
        "text 1",
        "text 2",
        "text 3",
        "text 4",
        "text 5",
      ]
    }
  },
  {
    name: '',
    content: {

    }
  },
]





const SVGS = [
  {
    name: "songs",
    content:   `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 626 614.211">
  <defs>
    <style>
      .cls-1 {
        fill: #262431;
      }

      .cls-2 {
        font-size: 20px;
      }

      .cls-10, .cls-2, .cls-5, .cls-6, .cls-7 {
        fill: #3bba7d;
      }

      .cls-10, .cls-2, .cls-6 {
        font-family: FiraMono-Regular, Fira Mono, sans-serif;
      }

      .cls-11, .cls-12, .cls-3, .cls-4, .cls-8, .cls-9 {
        fill: none;
        stroke-miterlimit: 10;
      }

      .cls-11, .cls-12, .cls-3, .cls-4 {
        stroke: #3bba7d;
      }

      .cls-3, .cls-4 {
        stroke-linecap: round;
      }

      .cls-3 {
        stroke-width: 3.5px;
      }

      .cls-10, .cls-6 {
        font-size: 18px;
      }

      .cls-7 {
        opacity: 0.3;
      }

      .cls-8, .cls-9 {
        stroke: #527d6f;
      }

      .cls-8 {
        stroke-width: 1.8075px;
      }

      .cls-9 {
        stroke-width: 1.7054px;
      }

      .cls-10, .cls-11 {
        opacity: 0.6;
      }

      .cls-11, .cls-12 {
        stroke-width: 3px;
      }
      .visible{
         visibility: visible !important;
      }
    </style>
  </defs>
  <g id="svg-songs" data-name="songs">
      <g id="svg-songs-base">
        <g id="base-2" data-name="base">
          <text class="cls-2" transform="translate(480.5004 581.3134)">Tempo</text>
          <text class="cls-2" transform="translate(44.0014 61.3134)">Lautstärke</text>
          <line class="cls-3" x1="86" y1="546" x2="611" y2="546"/>
          <line class="cls-3" x1="86" y1="81" x2="86" y2="546"/>
          <g>
            <line class="cls-3" x1="86" y1="81" x2="75" y2="92"/>
            <line class="cls-3" x1="86" y1="81" x2="97" y2="92"/>
          </g>
          <g>
            <line class="cls-3" x1="611.1265" y1="546.1928" x2="600.1265" y2="535.1928"/>
            <line class="cls-3" x1="611.1265" y1="546.1928" x2="600.1265" y2="557.1928"/>
          </g>
        </g>
      </g>
      <g id="songs-layer-1" class="songs-layer" data-name="1" visibility="hidden"">
        <line class="cls-4" x1="207.2831" y1="283.2712" x2="72.7831" y2="282.7712"/>
        <line class="cls-4" x1="207.7831" y1="283.7712" x2="207.7831" y2="556.7712"/>
        <text class="cls-2" transform="translate(44.9706 291.9694)">6</text>
        <text class="cls-2" transform="translate(198.9706 588.9694)">2</text>
        <circle class="cls-5" cx="207" cy="283" r="10"/>
        <text class="cls-6" transform="translate(235.9433 290.8855)">Song 1</text>
      </g>
      <g id="songs-layer-2" class="songs-layer" data-name="2" visibility="hidden">
        <g id="songs">
          <circle class="cls-5" cx="144" cy="453" r="10"/>
          <circle class="cls-5" cx="168" cy="385" r="10"/>
          <circle class="cls-5" cx="168" cy="331" r="10"/>
          <circle class="cls-5" cx="227" cy="428" r="10"/>
          <circle class="cls-5" cx="316" cy="473" r="10"/>
          <circle class="cls-5" cx="124" cy="336" r="10"/>
          <circle class="cls-7" cx="391" cy="356" r="10"/>
          <circle class="cls-7" cx="371" cy="289" r="10"/>
          <circle class="cls-7" cx="540" cy="150" r="10"/>
          <circle class="cls-7" cx="489" cy="225" r="10"/>
          <circle class="cls-7" cx="499" cy="293" r="10"/>
          <circle class="cls-7" cx="408" cy="189" r="10"/>
          <circle class="cls-7" cx="326" cy="86" r="10"/>
        </g>
        <circle class="cls-5" cx="207" cy="283" r="10"/>
        <text class="cls-6" transform="translate(213.7431 365.8855)">like</text>
        <text class="cls-6" transform="translate(378.5439 133.8855)">dislike</text>
      </g>
      <g id="songs-layer-3" class="songs-layer" data-name="3" visibility="hidden">
        <g id="songs-2" data-name="songs">
          <circle class="cls-5" cx="144" cy="453" r="10"/>
          <circle class="cls-5" cx="168" cy="385" r="10"/>
          <circle class="cls-5" cx="168" cy="331" r="10"/>
          <circle class="cls-5" cx="227" cy="428" r="10"/>
          <circle class="cls-5" cx="316" cy="473" r="10"/>
          <circle class="cls-5" cx="124" cy="336" r="10"/>
          <circle class="cls-7" cx="391" cy="356" r="10"/>
          <circle class="cls-7" cx="371" cy="289" r="10"/>
          <circle class="cls-7" cx="540" cy="150" r="10"/>
          <circle class="cls-7" cx="489" cy="225" r="10"/>
          <circle class="cls-7" cx="499" cy="293" r="10"/>
          <circle class="cls-7" cx="408" cy="189" r="10"/>
          <circle class="cls-7" cx="326" cy="86" r="10"/>
        </g>
        <circle class="cls-5" cx="207" cy="283" r="10"/>
        <ellipse id="circle1" class="cls-8" cx="204.9623" cy="388.8649" rx="109.4446" ry="199.1458" transform="translate(-155.498 137.2823) rotate(-27.2942)"/>
        <ellipse id="circle2" class="cls-9" cx="431.7594" cy="222.2774" rx="147.1753" ry="200.2422" transform="translate(-53.7146 234.0428) rotate(-28.6285)"/>
        <text class="cls-6" transform="translate(213.7431 365.8855)">like</text>
        <text class="cls-6" transform="translate(378.5439 133.8855)">dislike</text>
      </g>
      <g id="songs-layer-4" class="songs-layer" data-name="4" visibility="hidden">
        <g id="dislike">
          <text class="cls-10" transform="translate(178.9111 173.3913)">dislike</text>
          <text class="cls-10" transform="translate(248.9111 222.3913)">dislike</text>
          <text class="cls-10" transform="translate(450.9111 466.3913)">dislike</text>
          <circle class="cls-11" cx="216.7831" cy="140.7712" r="10"/>
          <circle class="cls-11" cx="286.7831" cy="189.7712" r="10"/>
          <circle class="cls-11" cx="488.7831" cy="434.7712" r="10"/>
        </g>
        <g id="like">
          <text class="cls-6" transform="translate(278.6113 421.3913)">like</text>
          <text class="cls-6" transform="translate(349.6113 533.3913)">like</text>
          <circle class="cls-12" cx="370.7831" cy="500.7712" r="10"/>
          <circle class="cls-12" cx="299.7831" cy="388.7712" r="10"/>
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
