const MachineLearning = {
  slug: "/machine-learning",
  name: 'Machine Learning',

  async render() {
    lastStory = this.slug
    return `

<section class="machine-learning">
  <article class="ct-ml story-1">
  
  <div class="ct-fixed">    
    <div class="chapter"><p><span class="expand-info" >Kapitel 1:Künstliche Intelligenz</span></p></div>
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
        <p>
          TODO </br>
          Klassisches Programmiern: Wir programmieren ein Modell, das und einen Output gibt</br>
          ML: Wir generieren ein Modell, dass sich selbst bauen kann augrund definierter Input und Output Daten. 
        </p>
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
    <div class="chapter"><p><span class="expand-info">Kapitel 2: Machine Learning</span></p></div>
  </div>
  
  <div class="ct-content">
    <div class="content">
      <div class="col-1">
        <h1>Wie wird ein System intelligent?</h1>
        <p>
          Hier kommt Machine Learning ins Spiel. Denn durch maschinelle Lernverfahren werden Modelle generiert, die Daten (Inputs) verarbeiten 
          können und einen Ouput (Ergebnis) ausgeben. 
        </p>
        <p>
          Der Input ist der Datensatz, auf dessen Basis ein Modell eine Vorhersage (Output) treffen kann. 
          Im Grund kann der Input ein Bild sein, bei dem der Farbwert jedes Pixels als Zahlenwert dargestellt ist.
        </p>
        <p>
          Wenn ein Modell einen Input verarbeitet hat, wird es einen Output ausgeben. Als Beispiel nehmen wir ein Modell, dass auf einem Bild
          entweder einen Hund oder eine Katze erkennt. Der Output des Modells ist also HUND oder KATZE.
        </p>
        <p>
          Damit so ein generiertes Modell entstehen kann, muss es zuerst mit Beispieldaten trainiert werden. Wie so ein Modell trainiert wird, zeigt
          das nächste Beispiel, dass ein Modell abbildet, dass vorhersagt, ob dir ein Song gefällt oder nicht. 
        </p>
      </div>
      <div>
        <div class="item-svg" data-name="svg-input-output"></div>
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Ein Modell trainieren</h1>
        <p>
          Ziel: Du möchtest ein System generieren, dass dir vorhersagt, ob du einen Song magst oder nicht. 
        </p>
        <p>
          Erforderliche Schritte: </br>
          - Trainingsdaten sammeln </br>
          - Modell mit den gesammelten Daten trainieren</br>
          - Model testen</br>
        </p>
      </div>
      <div class="col-2">   
        <div class="collection--image" data-name="svg-songs"></div>   
      </div>
    </div>
  
  
    <div class="content">
      <div class="col-1">
        <h1>Zusammenfassung Ablauf / Klärung der Begriffe</h1>
        <p>
          Input: Bezeichnung der Daten, die das Modell verarbeitet, um eine Prognose treffen zu können
        </p>
        <p>
          Output: Prognose bzw. Vorhersage des Modells
        </p>
        <p>
          Modell: Auch Datenmodell oder statistisches Modell. Wird von einem Algorithmus generiert und kann Daten verarbeiten. 
        </p>
      </div>
    </div>
    
    
    <div class="content">
      <div class="col-1">
        <h1>Lernmethoden</h1>
        <p>
          Die Lernmethode bezeichnet die Art und Weise, wie ein intelligentes Modell generiert wird. Die Wahl der Methode ist abhängig vom Einsatzzweck 
          der Applikation, aber auch von der Strukturierung der Input Daten. 
        </p>
        <p>
          Es gibt verschiedene maschinelle Lernmethoden, die intelligente Modelle generieren. Hier wird das überwachte sowie das unüberwachte Lernen vorgestellt. 
          Diese Methoden unterscheidet insbesondere die Form der Daten, mit denen die Modelle trainiert werden, aber auch der Anwendungszweck ist bei der Wahl der Methode entscheidend. 
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
          Bei dieser Methode werden Modelle trainiert, wo eine sogenannte GROUND TRUTH (Grundwahrheit) besteht.
          Die Trainingsdaten bestehen also aus bekannten Input-Daten, denen jeweils einem bekannten Output zugewiesen ist. 
          Sprich wir können den Trainingsprozess überwachen, da wir die Trainingsdaten vor dem Training selbst strukturieren. 
        </p>
        <p>
          Sobald das Modell mit denen von uns strukturierten Daten trainiert wurde, wird es unbekannte Inputs von alleine
          verarbeiten und einen Output ausgeben.
          Die Überwachung bezieht sich nur auf das Trainingdaten, mit denen das Modell trainiert wird. 
        </p>
        <p>
          Im Vergleich zu anderen Lernmethoden ist diese Methode schon sehr weit entwickelt und kann relativ schnell durchgeführt werden. 
        </p>
      </div>
      <div class="col-2">

      </div>
    </div>
    
        <div class="content">
      <div class="col-1">
        <h1>Überwachtes Lernen: Klassifikation vs. Regression</h1>
        <p>
          Der Output eines solchen Modells kann entweder eine Klassifizierung sein oder eine fortlaufender Wert (Regression).
        </p>
        <p>
          Bei der Klassifikation ist der Output ein fixer Wert bzw. eine Klasse. Zum Beispiel HUND oder KATZE. 
        </p>
        <p>
          Bei der Regression wird das Modell einen stetigen Wert ausgeben (numerische Vorhersage). Das wird zum Beispiel eingesetzt, um die Prognose eines Immobilienwertes zu prognostizieren. 
        </p>
      </div>
      <div class="col-2">
         <div class="panel" data-name="supervised-lerning"></div>
      </div>
    </div>
    
    <div class="content">
      <div class="col-1">
        <h1>Unüberwachtes Lernen</h1>
        <p>
          Bei dieser Methode werden Modelle mit unbearbeiteten / unkategorisierten Daten trainiert. Dies ist gerade für die Verarbeitung grosser Datenmengen sehr von Vorteil. 
        </p>
        <p>
          Diese Methode wird eingesetzt, wenn es darum geht, in komplexen und unorganisierten Datensätzen neue Muster aufzudecken. Wir könnten diese Methode zum Beispiel dafür einsetzten, aus ganz vielen Wetterdaten neue Zusammenhänge zu erkennen. 
        </p>
        <p>Weitere Typen von unüberwachtem Lernen: Neuronale Netze, Assoziation, Entdeckung neuer Zusammenhänge und Beziehungen in den Daten</p>
      </div>
      <div class="col-2">
      </div>
    </div>
    
    <div class="content">
      <div class="col-1">
        <h1>Unüberwachtes Lernen: Clusteranalyse vs. Assoziationsanalyse vs. Anomalieerkennung</h1>
        <p>
          Clusteranalyse: Erkennen von Mustern in grossen Datensätzen
        </p>
        <p>
          Assoziationsanalyse: Sucht nach Regeln und Beziehungen in den Daten. Die Regel beschreiben Zusammenhänge zwischen den Daten.
        </p>
        <p>
          Anomalie-Erkennung: Ungewöhnliche Datenpunkte identifizieren
        </p>
        <p>Weitere Typen von unüberwachtem Lernen: Neuronale Netze, Assoziation, Entdeckung neuer Zusammenhänge und Beziehungen in den Daten</p>
      </div>
      <div class="col-2">
          <div class="panel" data-name="unsupervised-learning"></div>   
      </div>
    </div>
    
    <div class="content">
      <div class="col-1">
        <h1>Der Netflix Algorithmus</h1>
        <p>
          Netflix setzt Machine Learning ein, um dir personanlisierte Empfehlungen anzuzeigen. Dafür wird laufend ein Datenmodell unter anderem mithilfe von 
          Clustering trainiert (unüberwachtes Lernen), dass anhand deiner Sehgewohnheiten neue Film- und Serienvorschläge generiert. 
        </p>
        <p>
          Dabei sammelt Netflix ständig die Daten deine Sehgewohnheiten und trainiert anhand dieser Daten Modelle, welche deine Vorschläge berechnen. 
          Aufgrund deines Sehverhaltens kann das Modell auch testen, wie gut die Vorschläge bei dir ankamen und kann immer präzisere Prognosen erstellen. 
          Es lernt also ständig weiter und bleibt dynamisch.
        </p>
        <p>
          
        </p>
        <p>
          Würde Netflix kein Machine Learning dafür einsetzten, müssten sie von Hand Parameter und Regeln definieren, nach denen deine Vorschläge berechnet werden.
          Das würde nicht nur viel länger dauern, sondern auch ständig veraltet sein und niemals so genau sein, wie ein künstlich generiertes Modell.
        </p>
      </div>
      <div class="col-2">
      </div>
    </div>
    
    <div class="content">
      <div class="col-1">
        <h1>Überwachtes vs. unüberwachtes Lernen</h1>
        <p>
          Auch Mischformen möglich
        </p>
        <p>
          Vorteile: 
        </p>
        <p>
          Nachteile: 
        </p>
        <p>
          Anwendnugsbeispiele: 
        </p>
      </div>
      <div class="col-2">
        <div class="collection--image" data-name="supervised-unsupervised"></div>
      </div>
    </div>
    
  
  </div>
  
  </article>
  
  <article class="ct-ml story-3">
  
  <div class="ct-fixed">
    <div class="chapter"><p><span class="expand-info">Kapitel 3: Datenproblematik</span></p></div>
  </div>
  
  <div class="ct-content">
    <div class="content">
      <div class="col-1">
        <h1>Ohne Daten geht gar nichts</h1>
        <p>
          Machine Learning funktioniert nur mit Daten. Und je mehr Daten vorhanden sind, desto bessere Modelle können trainiert werden. 
          Das zieht Probleme mit sich, denn die Sammlung und die Verwaltung dieser Datenmengen ist nicht immer ganz transparent und steht 
          oft im Zielkonflikt mit Datenschutz und mit Privatsphäre.
        </p>
        <p>
          Ausserdem stellt auch die Qualität der Daten eine grosse Herausforderung dar. Wenn Modelle mit unvollständigen oder schlechten Daten trainiert werden,
          kann das zu verzerrten Prognosen führen. 
        </p>
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Big Data und Datenschutz</h1>
        <p>
          Zielkonflikt
        </p>
      </div>
      <div class="col-2">
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Data bias und Ethik</h1>
        <p>
          Bsp. Hautfarbe, Gender.
          "Die KI ist nur so gut wie ihre Trainingsdaten."
          Das Trainieren dieser Daten liegt allein in der Hand der Algorithmen, die diese Modelle generieren. Wir können nur die Traningsadten beeinflussen. 
        </p>
        <p>
          Man kann es ein bisschen damit vergleiche, wie man ein Kind aufwachsen und lernen lässt.
        </p>
        <p>
          Ein sehr populäres Beispiel für ein schlecht trainiertes Modell ist die Gesichtserkennung. Da diese Modelle 
          vor allem mit Gesichtern von weissen Männern trainiert wurden, sind diese Modelle auch auf weisse Männer ausgerichtet. 
          Diese Datenmodelle erzeugen weniger akkurate Vorhersagen bei Frauen oder bei Menschen anderer Hautfarbe. 
        </p>
        <p>
          Diese Verzerrungen sind zum Beispiel auch bei der Spracherkennung aufgetreten: die meiste Spracherkennungssoftware erkennt
          Männerstimmen besser als Frauenstimmen. 
        </p>
        <p>
          Verzerrungen treten zum Beispiel bei unvollständigen, inkonsistenten, einseitigen Datensätzen und falsche Gewichtung von Daten.
        </p>
        <p>
           Rassismus, Reinfocement, Fairness
        </p>
        <p>
          Was man dagegen tun kann: Ständige Überprüfung der Modelle (Unterhalt dieser Modelle), 
        </p>
      </div>
      <div class="col-2">
        Reale Beispiele (Panel)
        - COMPAS (Polizei)
        - Rassismus Beispiel
        - Soziales Beispiel
      </div>
    </div>
  
  </div>
  </article>
  
  <article class="ct-ml story-4">
  
  <div class="ct-fixed">
    <div class="chapter"><p><span class="expand-info">Kapitel 4: Zukunft</span></p></div>
  </div>
  
  <div class="ct-content">
    <div class="content">
      <div class="col-1">
        <h1>Wieso brauchen wir ML</h1>
        <p>
          -> Unterstützt den Menschen
          -> Häufigste Anwendungsfelder
        </p>
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Potenzial, Prognose</h1>
        <p>
          -> Zahlen und Fakten zu ML
        </p>
      </div>
    </div>
    
    <div class="content">
      <div class="col-1">
        <h1>Angst vor der Superintelligenz</h1>
        <p>
          Ein künstlich trainiertes System wird nur in dem gut sein, was seine Aufgabe ist. Ein künstliches Modell zur Wetterprognose wird sehr gut Wettervorhersagen machen können. 
          Es wird jedoch in keinem anderen Bereich jemals gut sein. 
        </p>
        <p>
          Zum aktuellen Zeitpunkt ist sehr gut erforscht, wie gute intelligente Modelle generiert werden können, die auf Zahlen und Logik beruhen. 
          Es ist jedoch immernoch unglaublich schwierig eine KI zu erzeugen, welche logische Prognosen mit Weltwissen verknüpfen kann. Zum Beispiel ist es
          viel einfacher einen Schachcomputer zu bauen, als eine Sprachverarbeitungssoftware. 
        </p>
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Werden wir in Zukunft alle arbeitslos sein?</h1>
        <p>
          Die kurze Antwort: Nein, werden wir nicht. Auf jeden Fall nicht so bald.  
        </p>
        <p>
          
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
    const collection_terms = document.querySelectorAll('.term-collection')
    collection_terms.forEach(collection=>{
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

    const item_svg = document.querySelectorAll('.item-svg');
    item_svg.forEach(item =>{
      const name = item.getAttribute('data-name');
      const data = SVGS.find(item => item.name === name)
      item.innerHTML = data.content;
    })


  }
};



export default MachineLearning;
