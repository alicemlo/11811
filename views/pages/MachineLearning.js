const MachineLearning = {
  slug: "/machine-learning",
  name: 'Machine Learning',

  async render() {
    lastStory = this.slug
    return `

<section class="machine-learning">
  <article class="ct-ml story-1">
  
  <div class="ct-fixed">    
    <div class="chapter"><p><span class="expand-info" data-info=": Künstliche Intelligenz">Kapitel 1</span></p></div>
  </div>
  
  <div class="ct-content">
    <div class="content">
      <div class="col-1">
        <h1>Wieso du über Machine Learning Bescheid wissen solltest</h1>
        <p>
          Künstliche Intelligenz und Machine Learning gewinnt immer mehr an Relevanz und wird auch immer häufiger auch für Anwendungen in
          unserem Alltag angewendet - ohne dass uns das wirklich bewusst ist. Zum Beispiel der Netflix Algorithmus.
        </p>
        <p>
          Mittlerweile ist KI ein Hype, um dem gleichzeitig sehr viel Unwissenheit und Halbwahrheiten bestehen. Ziel dieser Webseite ist es,
          dir das Thema KI und insbesondere Machine Learning möglichst anschaulich näher zu bringen. Die Basics verstehst du auch, wenn du
          kein Informatik Nerd bist.
        </p>
      </div>
      <div class="col-2" style="padding: 2rem 0">
        <div class="term-collection" data-name="collection-0"></div>
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h3><a href="#/buzzwords">-> du willst die zuerst einen Überblick über die wichtigsten Begriffe verschafffen?</a></h3>
      </div>
    </div>
  
  
    <div class="content">
      <div class="col-1">
        <h1>Was ist Intelligenz?</h1>
        <p>Damit man weiss, wie man Intelligenz künstlich erschaffen kann, muss zuerst geklärt sein, wie man Intelligenz definiert.</p>
        <p>
          Jedoch ist dies nicht ganz so einfach, da sich diese Defintion immer wieder verändert. Wir selber verstehen noch nicht ganz, was Intelligenz ist.
          Grunsätzlich beschreibt Intelligenz jedoch ein lernfähiges System, dass an das menschliche Denken herankommt. Wir Menschen lernen zum Beispiel aus den Erfahrungen, 
          die wir in unserer Vergangenheit erlebt haben. Künstlich generierte Intelligenz basiert genau auf diesem Prinzip. 
        </p>
        <p>
          Um ein intelligentes System künstlich zu generieren, braucht es Machine Learning (ML). Dieses System lernt anhand von ganz viel Beispieldaten. 
          Wie das genau abläuft und welche Lernmethoden existiern, wird im nächsten Kapitel genauer dargestellt. 
        </p>
      </div>
    </div>
  
      <div class="content">
      <div class="col-1">
        <h1>Für was brauchen wir künstliche generierte Intelligenz?</h1>
        <p>Schlussendlich bringt uns KI Effizienz. Um dir das zu veranschaulichen, stelle dir folgendes Szenario vor:</p> 
        <p>Du erhälst den Auftrag, eine Wetterprognose an deinen Wohnort für die nächste Woche zu erstellen. Als Ausgangslage erhältst du ausführliche Wetterdaten der letzten 10 Jahre. Dir steht ausserdem ein Computer für die Auswertung zur Verfügung.</p>
      </div>
      <div class="col-2">
         <div class="panel" data-name="panel-0"></div>
      </div>
    </div>
    
    <div class="content">
      <div class="col-1">
        <h1>Gebiete von KI</h1>
        <p>
          Künstliche Intelligenz ist ein riesiges Feld, dass in viele kleinere Bereiche aufgeteilt werden kann. Um dir das kurz zu
          veranschaulichen, stelle ich dir drei der relevanten Teilgebiete von KI auf:
        </p>
      </div>
      <div class="col-2">
        <div class="panel" data-name="panel-1"></div>
      </div>
    </div>
  
  </div>
  </article>
  
  <article class="ct-ml story-2">
  
  <div class="ct-fixed">
    <div class="chapter"><p><span class="expand-info" data-info=": Machine Learning">Kapitel 2</span></p></div>
  </div>
  
  <div class="ct-content">
    <div class="content">
      <div class="col-1">
        <h1>Wie wird ein System intelligent?</h1>
        <p>
          Hier kommt Machine Learning ins Spiel. Denn durch maschinelles Lernen entstehen intelligete Modelle bzw. Algorithmen, die uns
          bespielsweise intelligente Bilderkennung ermöglichen. -> Grobe Funktionsweise, Übersicht über Lernmethoden.
        </p>
        <p>
          Damit eine Maschine lernen kann, braucht es als Ausgangslage Daten. Diese Daten werden auch Input genannt. Diese stellen wir dem System
          zur Verfügung. Anhand dieses Inputs, kann das System einen eigenen Algorithmus programmieren, welcher anhand des Inputs einen Ergebnis (Output) ausgeben kann.
        </p>
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Dieser Prozess in einem sehr einfachen Beispiel zusammengefasst</h1>
        <p>
          Ziel: Du möchtest ein System generieren, dass dir vorhersagen kann, ob du einen Song magst oder nicht. 
        </p>
        <p>
          Ausganslage: Du hörst dir 14 Songs an und kannst sie jeweils mit "gut" oder "schlecht" bewerten. 
        </p>
        <p>
          -> Songs bewerten
        </p>
      </div>
      <div class="col-2">   
        <div class="collection--image" data-name="svg-songs"></div>   
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Lernmethoden</h1>
        <p>
          Machine Learning ist aber noch viel breiter als wie das vorheige Beispiel veranschaulicht hat. Es gibt ganz viele Lernmethoden,
          die ein System intelligent machen können. Ich werde dir 2 Kategorien vorstellen:
        </p>
        <p>
          Am einfachsten zu verstehen ist überwachtest Lernen. Da werde ich dir zeigen, wie deine Gesten erkannt werden.
        </p>
        <p>
          Am Beispiel vom Netflix Filmempfehlungs Algorithmus werde ich die erklären, was unüberwachtes Lernen ist.
        </p>
      </div>
      <div class="col-2">
        <div class="term-collection" data-name="collection-1"></div>   
      </div>
    </div>
  
  
    <div class="content">
      <div class="col-1">
        <h1>Überwachtes Lernen</h1>
        <p> 
        ...
        </p>

      </div>
      <div class="col-2">
      </div>
    </div>
    
    <div class="content">
      <div class="col-1">
        <h1>Unüberwachtes Lernen</h1>
        <p>
        ...
        </p>

      </div>
      <div class="col-2">
      </div>
    </div>
  
  </div>
  
  </article>
  
  <article class="ct-ml story-3">
  
  <div class="ct-fixed">
    <div class="chapter"><p><span class="expand-info" data-info=": Datenproblematik">Kapitel 3</span></p></div>
  </div>
  
  <div class="ct-content">
    <div class="content">
      <div class="col-1">
        <h1>Ohne Daten geht gar nichts</h1>
        <p>
          Machine Learning basiert auf Daten. Je mehr Daten vorhanden, desto bessere können Modelle trainiert werden. Datensammlung, Big
          Data, Privatsphäre und Datenverwaltung haben wird ja heute schon nicht im Griff.
        </p>
        <p>
          Ausserdem kommt es auch nicht allein auf die Menge der Daten an. Databias Beispiele...
        </p>
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Big Data und Privatsphäre</h1>
        <p>
          Zielkonflikt
        </p>
      </div>
      <div class="col-2">
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Databias und Ethik</h1>
        <p>
          Bsp. Hautfarbe, Gender.
          "Die KI ist nur so gut wie ihre Trainingsdaten."
        </p>
      </div>
      <div class="col-2">
      </div>
    </div>
  
  </div>
  </article>
  
  <article class="ct-ml story-4">
  
  <div class="ct-fixed">
    <div class="chapter"><p><span class="expand-info" data-info=": Zukunft">Kapitel 4</span></p></div>
  </div>
  
  <div class="ct-content">
    <div class="content">
      <div class="col-1">
        <h1>Wieso brauchen wie ML</h1>
        <p>
          ...
        </p>
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Potenzial, Prognose</h1>
        <p>
          ...
        </p>
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Werden wir in Zukunft alle arbeitslos sein?</h1>
        <p>
          ...
        </p>
      </div>
    </div>
  
  </div>
  
  </article>

</section>
    `;
  },
  after_render: async () => {

    // term collection
    const termCollections = document.querySelectorAll('.term-collection')
    termCollections.forEach(collection=>{
      const name = collection.getAttribute('data-name')
      const data = COLLECTION_TERMS.find(term => term.name === name)
      const item = new CollectionTerm(collection, data);
      item.run()
    })

    // panels
    const collection_panels = document.querySelectorAll('.panel')
    collection_panels.forEach(collection => {
      const name = collection.getAttribute('data-name')
      const data = COLLECTION_PANELS.find(panel => panel.name === name)
      const item = new CollectionPanel(collection, data);
      item.run()
    })

    // songs
    const collection_image = document.querySelectorAll('.collection--image')
    collection_image.forEach(collection => {
      const name = collection.getAttribute('data-name')
      const data = COLLECTION_IMAGES.find(item => item.name === name)
      const item = new CollectionImage(collection, data);
      item.run()
    })


  }
};



export default MachineLearning;
