const MachineLearning = {
  slug: "/machine-learning",
  name: 'Machine Learning',

  async render() {
    lastStory = this.slug
    return `

<section class="machine-learning">
  
  </div>
  <article class="ct-ml story-1">
  
  <div class="ct-fixed">    
    <div class="chapter"><p><span class="expand-info" >Kapitel 1:Künstliche Intelligenz</span></p></div>
  </div>
  
  <div class="ct-content">
    <div class="content">
      <div class="col-1">
        <h1>Wieso du über Machine Learning Bescheid wissen solltest</h1>
        <p>
          Themen wie Künstliche Intelligenz (KI) und Machine Learning gewinnen immer mehr an Relevanz und werden immer häufiger in alltäglichen Anwendungen 
          eingesetzt, ohne dass uns das wirklich bewusst ist. Beispielweise werden uns Serien- und Filmsempfehlungen auf Netflix
          von einem künstlich trainierten System angezeigt. 
        </p>
        <p>
          Leider wissen heute noch viele nicht, wie das Prinzip KI funktioniert. Ziel dieser Webseite ist es, 
          dir ein grundlegendes Verständnis für die Prozesse hinter diesem Begriff zu vermitteln. Dabei liegt der Fokus auf den Prozess des
          maschinellen Lernens (Machine Learning). 
        </p>
      </div>
      <div class="col-2" style="padding: 2rem 0">
        <div class="term-collection" data-name="collection-0"></div>
      </div>
    </div>
    
<a href="#/buzzwords" class="banner">
  <div class="gclick" data-id="bannb-12345">  
    <p data-id="bannb-12345">
      (falls du eine kleine Auffrischung über die wichtigsten Buzzwords im Zusammenhang mit KI brauchst: Auf der Seite "Buzzwords"
      kannst du dich durch eine Grafik durchklicken, welche dir die wichtigsten Schlagwörter kurz erklärt) 
    </p>
  </div> 
</a>
  
    <div class="content">
      <div class="col-1">
        <h1>Was ist Intelligenz?</h1>
        <p>
          Anhand von Machine Learning wird "Intelligenz" künstlich geschaffen. Um dieses Prozess zu nachzuvollziehen, muss man zuerst den Begriff Intelligenz definieren.
          Dies ist allerdings nicht ganz so einfach, da sich diese Defintion immer wieder verändert. (Wir Menschen selber verstehen noch nicht ganz, was Intelligenz ist.)
        </p>
        <p>
          Ein Anhaltspunkt ist die Lernfähigkeit eines Systems. Es ist eines des Merkmale, welches ein intelligentes Wesen oder eine intelligente Maschine auszeichnet. 
          Wir Menschen lernen aus Erfahrungen und Ereignissen aus unserer Vergangenheit. Wir könnnen diese Lernfähigkeit auch bei einer Maschine erzeugen. Dann wird aus einer
          Maschine eine intelligente Maschine. Dieser Prozess wird auch "Machine Learning" genannt. 
        </p>
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Für was brauchen wir künstliche Intelligenz und Machine Learning?</h1>
        <p>
          Schlussendlich bringt und KI Effizienz bei der Verarbeitung und Auswertung von Daten. 
          Intelligente Systeme kommen im Gegensatz zu Menschen sehr gut mit grossen Datenmengen zurecht und können Vorhersagen treffen, 
          Analysen erstellen, Daten strukturieren, Prozesse optimieren oder Abweichungen in Datensätzen feststellen. 
        </p>
        <p> 
          Anhand von Beispielen, die du in der rechten Spalte findest, kannst du ein bisschen erahnen, wie sich KI auswirken kann und für 
          welche Zwecke wir uns intelligente Systeme zunutze machen können.
        </p>
      </div>
      <div class="col-2">
         <div class="panel" data-name="examples-ai"></div>
      </div>
      
      <div class="col-sources">
        <span class="title gclick" data-id="mehrd-89341">-> Mehr dazu lesen</span>
        <div class="sources hidden">   
            <a class="gclick" data-id="mehrd-12343" target="_blank" href="https://www.medica.de/de/News/Archiv/Deep_Learning_Algorithmen_entlasten_Radiologen">Algorithmen entlasten Radiologen</a> 
            <a class="gclick" data-id="mehrd-93837" target="_blank" href="https://corporate.zalando.com/de/newsroom/de/news-storys/smart-shoppen-dank-kuenstlicher-intelligenzn">Zalando: Smart Shoppen dank künstlicher Intelligenz</a>    
        </div>
      </div>
      
    </div>
    
    <div class="content">
      <div class="col-1">
        <h1>Teilgebiete von KI</h1>
        <p>
          Es ist unmöglich, nur "kurz" über KI zu reden. 
          Um dir zu veranschaulichen, wie breit das Thema KI behandelt werden kann, stelle ich dir in der rechten Spalte ein paar der relevanten Teilgebiete von KI vor.
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
          Zum Beispiel kann ein Input ein Bild sein, bei dem der Farbwert jedes Pixels als Zahlenwert dargestellt ist.
        </p>
        <p>
          Wenn ein Modell einen Input verarbeitet hat, wird es einen Output ausgeben. Als Beispiel nehmen wir ein Modell, dass auf einem Bild
          entweder einen Hund oder eine Katze erkennt. Der Output des Modells wäre dann HUND oder KATZE.
        </p>
        <p>
          Damit so ein Modell generiert werden kann, muss es zuerst mit Beispieldaten trainiert werden. Der nächste Abschnitt zeigt
          einen Trainingsprozess eines Systems, dass dir vorhersagt, ob dir ein Song gefällt oder nicht. 
        </p>
      </div>
      <div>
        <div class="item-svg flex-center" data-name="svg-input-output"></div>
      </div>

      
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Ein Modell trainieren</h1>
        <p>
          Ziel: Du möchtest ein System generieren, dass dir vorhersagt, ob du einen Song magst oder nicht. 
          Dafür müssen wir bestimmten, was der Input ist und was der Output sein sollte. 
        </p>
        <p>
          Um das System möglichst einfach zu gestalten, besteht der Input nur aus zwei Werten: LAUTSTÄRKE und TEMPO. 
          Jeder einzelner Song definiert sich alleine durch diese zwei Werte.
        </p>
        <p>
          Du kannst den Song entweder mögen oder nicht mögen. Der Output kann also auch nur zwei Werte annehmen: LIKE oder DISLIKE
        </p>
        <p>
          Erforderliche Schritte: </br>
          - Trainingsdaten sammeln </br>
          - Modell mit den gesammelten Daten trainieren</br>
          - Model testen</br>
        </p>
        <p>
          (klicke dich durch die Grafik rechts, um dir den Ablauf des Trainingsprozess veranschaulichen zu lassen)
        </p>  
      </div>
      <div class="col-2">   
        <div class="collection--image" data-name="svg-songs"></div>   
      </div>
    </div>
  
  
<!--    <div class="content">-->
<!--      <div class="col-1">-->
<!--        <h1>Zusammenfassung Ablauf / Klärung der Begriffe</h1>-->
<!--        <p>-->
<!--          Input: Bezeichnung der Daten, die das Modell verarbeitet, um eine Prognose treffen zu können-->
<!--        </p>-->
<!--        <p>-->
<!--          Output: Prognose bzw. Vorhersage des Modells-->
<!--        </p>-->
<!--        <p>-->
<!--          Modell: Auch Datenmodell oder statistisches Modell. Wird von einem Algorithmus generiert und kann Daten verarbeiten. -->
<!--        </p>-->
<!--      </div>-->
<!--    </div>-->
<!--    -->
    
    <div class="content">
      <div class="col-1">
        <h1>Lernmethoden</h1>
        <p>
          Die Lernmethode bezeichnet die Art und Weise, wie ein intelligentes Modell generiert wird. 
          Das obige Beispiel wurde anhand einer überwachten Trainingsmethode trainiert. 
          Doch es existieren verschiedene maschinelle Lernmethoden, die intelligente Modelle generieren.
          Die Wahl der Methode ist abhängig vom Einsatzzweck der Modells, aber auch von der Strukturierung der Input Daten. 
        </p>
        <p>
          Auf dieser Seite werden die überwachte und die unüberwachte Lernenmethode vorgestellt. 
          Diese Methoden unterscheidet insbesondere die Form der Daten, mit denen die Modelle trainiert werden.
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
          Bei dieser Methode werden Modelle anhand bekannter Daten (GROUND TRUTH) trainiert.
          Die GROUND TRUTH (Grundwahrheit, also die bekannten Daten) besteht aus einem Datensatz, bei dem jedem Input ein
          Output zugewiesen ist. Das könnte zum Beispiel eine Sammlung von 100 Tier-Bildern sein, wobei bei jedem Bild definiert ist,
          ob ein Hund oder eine Katze darauf zu sehen ist. 
        </p>
        <p>
          Bevor ein Modell mit dieser Methode trainiert werden kann, müssen die Trainigsdaten strukturiert werden. Der erfordert auf der 
          einen Seite Aufwand, bedeutet aber auch einen kontrollierten Trainingsablauft. 
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
        <h1>Klassifikation vs. Regression</h1>
        <p>
          Die überwachte Lernmethode kennt zwei Verfahren, die sich auf den Output auswirken. Ein Output kann entweder ein fixes Label
          sein (Klassifikation) oder einen fortlaufenden Wert annehmen (Regression).
        </p>
        <p>
          Bei der Klassifikation ist der Output ein fixer Wert bzw. eine Klasse aus einer fixen Sammlung an Klassen. Zum Beispiel HUND oder KATZE. 
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
          Bei dieser Lernmethode müssen vor dem Training keine Daten strukturiert werden. Die KI übernimmt für uns die Strukturierung der Daten. 
          Dies ist gerade für die Verarbeitung grosser Datenmengen von Vorteil, da die Struktierung grosser Datenmengen natürlich sehr schnell sehr aufwendig wird. 
        </p>
        <p>
          Diese Methode wird eingesetzt, wenn es darum geht, in komplexen und unorganisierten Datensätzen neue Muster aufzudecken. Wir könnten diese Methode zum Beispiel dafür einsetzten, aus ganz vielen Wetterdaten neue Zusammenhänge zu erkennen. 
        </p>
        <p>
          Ein weiterer Vorteil dieser Methode: Sie kann in Echtzeit angewendet werden. Beispielweise wird der Netflix-Algorithmus (der unüberwacht trainiert wird)
          laufend neu trainiert und kann sich stetig verbessern, je mehr Daten existieren. 
        </p>
<!--        <p>Weitere Typen von unüberwachtem Lernen: Neuronale Netze, Assoziation, Entdeckung neuer Zusammenhänge und Beziehungen in den Daten</p>-->
      </div>
      <div class="col-2">
      </div>
    </div>
    
    <div class="content">
      <div class="col-1">
        <h1>Clusteranalyse vs. Assoziationsanalyse vs. Anomalieerkennung</h1>
        <p>Die Clusteranalyse, die Assoziationsanalyse und die Anomalieerkennung sind Verfahren, die auf unüberwachten Lernprozessen basieren.</p>
        <p>
          Clusteranalyse: Erkennen von Mustern in grossen Datensätzen
        </p>
        <p>
          Assoziationsanalyse: Suche nach Regeln und Beziehungen in den Daten. Die Regel beschreiben Zusammenhänge zwischen den Daten.
        </p>
        <p>
          Anomalie-Erkennung: Identifikation ungewöhnlicher Datensätze
        </p>
      </div>
      <div class="col-2">
          <div class="panel" data-name="unsupervised-learning"></div>   
      </div>
      
      <div class="col-sources">
        <span class="title gclick" data-id="mehrd-29583" >-> Mehr dazu lesen</span>
        <div class="sources hidden">   
            <a class="gclick" data-id="mehrd-29482" target="_blank" href="https://datasolut.com/wiki/clusteranalyse/">Clusteranalyse einfach erklärt</a> 
            <a class="gclick" data-id="mehrd-47774" target="_blank" href="https://www.oracle.com/ch-de/data-science/machine-learning/what-is-machine-learning/#link6">Machine Learning – definiert</a> 
        </div>
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
          Dabei sammelt das Modell ständig die Daten deiner Sehgewohnheiten, lernt anhand dieser Daten und berechnet dir so neue Filmempfehlungen. 
          Das Modell kann ständig evaluieren, wie gut die Empfehlungen bei dir ankommen und kann so seine Vorhersagen verbessern.
          Es lernt also ständig weiter und bleibt so dynamisch.
        </p>
        <p>
          Würde Netflix kein Machine Learning dafür einsetzten, müssten sie von Hand Parameter und Regeln definieren, nach denen deine Vorschläge berechnet werden.
          Das würde nicht nur viel länger dauern, sondern auch ständig veraltet sein und niemals so genau sein, wie ein künstlich generiertes Modell.
        </p>
      </div>
      <div class="col-2">
      </div>
      
      <div class="col-sources">
        <span class="title gclick" data-id="mehrd-24828" >-> Mehr dazu lesen</span>
        <div class="sources hidden">   
            <a class="gclick" data-id="mehrd-09839" target="_blank" href="https://netflixtechblog.com/artwork-personalization-c589f074ad76">Artwork Personalization at Netflix</a> 
            <a class="gclick" data-id="mehrd-09990" target="_blank" href="https://becominghuman.ai/how-netflix-uses-ai-and-machine-learning-a087614630fe">How Netflix Uses AI, Data Science, and Machine Learning</a> 
        </div>
     </div>
     
    </div>
    
    <div class="content">
      <div class="col-1">
        <h1>Überwachtes vs. unüberwachtes Lernen</h1>
      </div>
     
    </div>
    
    <div class="banner svg-grid">
        <div class="collection--image" data-name="supervised-unsupervised"></div>
    </div>

  </div>
  
  <div class="col-sources">
        <span class="title gclick" data-id="mehrd-93844">-> Mehr dazu lesen</span>
        <div class="sources hidden">   
            <a data-id="mehrd-09823" class="gclick" target="_blank" href="https://towardsdatascience.com/machine-learning-for-beginners-d247a9420dab">Machine Learning For Beginners</a> 
            <a data-id="mehrd-44422" class="gclick" target="_blank" href="https://medium.com/technology-nineleaps/some-key-machine-learning-definitions-b524eb6cb48">Some Key Machine Learning Definitions</a> 
        </div>
  </div>
  
  </article>
 
<a href="#/train-model" class="banner ng-invisible">
  <div> 
    <p>Da du jetzt den groben Abaluf eines Trainingprozesses kennst, würde ich vorschlagen, du versuchst es selber aus.</p>
    <p>Hier kannst du deine eingenen zwei Gesten trainieren, die du dann auf dieser Webseite nutzen kannst.</p>
  </div> 
</a>

  <article class="ct-ml story-3">
  
  <div class="ct-fixed">
    <div class="chapter"><p><span class="expand-info">Kapitel 3: Datenproblematik</span></p></div>
  </div>
  
  <div class="ct-content">
    <div class="content">
      <div class="col-1">
        <h1>Ohne Daten geht gar nichts</h1>
        <p>
          Machine Learning funktioniert nur mit Daten. Und je mehr Daten vorhanden sind, desto bessere Modelle können trainiert werden (insbesondere bei der unüberwachten Lernmethode). 
          Das zieht Probleme mit sich, denn die Sammlung und die Verwaltung dieser Datenmengen ist nicht immer ganz transparent und steht 
          oft im Zielkonflikt mit unserer Vorstellung von Datenschutz und mit Privatsphäre.
        </p>
        <p>
          Zudem stellt auch die Sicherstellung der Qualität der Trainingsdaten eine grosse Herausforderung dar. Wenn Modelle mit unvollständigen oder schlechten Daten trainiert werden,
          kann das zu verzerrten Prognosen führen. 
        </p>
      </div>
      <div class="col-2"></div>
      <div class="col-sources">
        <span class="title gclick" data-id="mehrd-86767">-> Mehr dazu lesen</span>
        <div class="sources hidden">   
            <a data-id="mehrd-57575" class="gclick" target="_blank" href="https://ncube.com/blog/big-data-and-ai">How Big Data and AI Work Together</a> 
            <a data-id="mehrd-57234" class="gclick" target="_blank" href="https://online.maryville.edu/blog/big-data-is-too-big-without-ai/">Big Data is to big without AI</a> 
        </div>
     </div>
    </div>
  
<!--    <div class="content">-->
<!--      <div class="col-1">-->
<!--        <h1>Big Data und Datenschutz</h1>-->
<!--        <p>-->
<!--          Zielkonflikt-->
<!--        </p>-->
<!--      </div>-->
<!--      <div class="col-2">-->
<!--      </div>-->
<!--    </div>-->
  
    <div class="content">
      <div class="col-1">
        <h1>Diskriminierung durch KI</h1>
        <p>
          "Die KI ist nur so gut wie ihre Trainingsdaten." So sieht das der KI-Forscher Richard Socher. 
          Künstlich intelligente Systeme diskriminieren nicht. Doch wenn sie mit unvollständigen oder einseitigen Daten trainiert werden,
          können dennoch diskriminierten Prognosen auftreten. 
        </p>
        <p>
          Diese Verzerrungen treten auf, wenn die Trainingsdaten unvollständig, nicht konsistet oder einseitig sind oder falsch Gewichtet wurden. 
        </p>
        <p>
          Dieses Problem kann man nur dadaurch lösen, indem man die Modelle mit besseren Daten trainiert und wenn solche Verzerrungnen
          identifiziert werden. 
        </p>
      </div>
      <div class="col-2">
           <div class="panel" data-name="panel-discrimination"></div>
      </div>
      
      <div class="col-sources">
        <span class="title">-> Mehr dazu lesen</span>
        <div class="sources hidden">   
            <a target="_blank" href="https://www.telusinternational.com/articles/7-types-of-data-bias-in-machine-learning?INTCMP=ti_lbai">7 Types of Data Bias in Machine Learning</a> 
            <a target="_blank" href="https://hbr.org/2019/10/what-do-we-do-about-the-biases-in-ai">What Do We Do About the Biases in AI?</a> 
            <a target="_blank" href="https://www.plattform-lernende-systeme.de/publikationen-details/kuenstliche-intelligenz-und-diskriminierung-herausforderungen-und-loesungsansaetze.html?file=files/Downloads/Publikationen/AG3_Whitepaper_250619.pdf">Künstliche Intelligenz und Diskriminierung (PDF)</a> 
<!--       https://www.zeit.de/arbeit/2018-10/bewerbungsroboter-kuenstliche-intelligenz-amazon-frauen-diskriminierung?utm_referrer=https%3A%2F%2Fwww.google.com%2F-->
        </div>
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
        <h1>Wieso brauchen wir Machine Learning</h1>
        <p>
          Es gibt Aufgaben, bei denen computerbasierte bzw. intelligente Systeme dem Menschen deutlich überlegen sind. Zum Beispiel bei der Analyse und bei der Handhabung grosser Datenmengen, 
          sowie bei der Automatisierung repetitiver Prozesse. Beim Handling grosser Datenmengen (die auch ständig immer grösser werden) 
          helfen uns machschinelle Lernverfahren. 
          Diese können Daten sehr effizient analysieren können, ohne dass jemand dafür ein komplexes Programm schreiben muss, 
          welches letztendlich nicht skalierbar ist und mit hoher Wahrscheinlichkeit eine hohe Fehlerquote aufweist.
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
        <h1>Starke vs. Schwache Intelligenz</h1>
        <p>...</p>

<!--        <p>-->
<!--          Diese Unterscheidung sollte für dich jetzt nicht mehr so schwierig zu verstehen sein. Wenn du das verstanden hast, -->
<!--          hast du eine wichtige Unterscheidung verstanden, für das Verständig von KI sehr wichtig ist. -->
<!--        </p>-->
<!--        <p>-->
<!--          "Schwache" künstlich intelligte Systeme können genau eines: sie berechnen einen Output anhand eines Inputs, der sich von -->
<!--          seiner Art nicht verändert. Eine KI, welche trainiert wurde, verschiedene Tiere auf einem Bild zu erkennen wird immer nur-->
<!--          Tiere auf einem Bild erkennen. Aber sie wird nicht plötzlich unterschiedliche Gegenstände erkennen können, solange sie nicht dazu-->
<!--          trainiert wurde.  -->
<!--         </p>-->
<!--         <p>Eine starke KI - oder auch Superintelligenz - gibt es heute nicht wirklich. </p>-->
      </div>
    </div>
    
    
    <div class="content">
      <div class="col-1">
        <h1>Die Superintelligenz</h1>
        <p>...</p>
<!--        <p>-->
<!--          Ein künstliche trainiertes System ist dafür gemacht, Probleme zu lösen, für die es trainiert wurde. Man kann heute ohne Probleme-->
<!--          eine intelligentes System generieren, dass mit hoher Wahrscheinlichkeit einen Hund von einer Katze unterscheiden kann. ...-->
<!--        </p>-->
<!--        <p>-->
<!--          Ein künstlich trainiertes System wird nur in dem gut sein, was seine Aufgabe ist. Ein künstliches Modell zur Wetterprognose wird sehr gut Wettervorhersagen machen können. -->
<!--          Es wird jedoch in keinem anderen Bereich jemals gut sein. -->
<!--        </p>-->
<!--        <p>-->
<!--          Zum aktuellen Zeitpunkt ist sehr gut erforscht, wie gute intelligente Modelle generiert werden können, die auf Zahlen und Logik beruhen. -->
<!--          Es ist jedoch immernoch unglaublich schwierig eine KI zu erzeugen, welche logische Prognosen mit Weltwissen verknüpfen kann. Zum Beispiel ist es-->
<!--          viel einfacher einen Schachcomputer zu bauen, als eine Sprachverarbeitungssoftware. -->
<!--        </p>-->
      </div>    
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Werden wir in Zukunft alle arbeitslos sein?</h1>
        <p>

...
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
    mobileLinkEnabled = true
    gesturalInteractionEnabled = true
    gestureLabelingEnabled = false

    // term collection
    const collection_terms = document.querySelectorAll('.term-collection')
    collection_terms.forEach(collection => {
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
    item_svg.forEach(item => {
      const name = item.getAttribute('data-name');
      const data = SVGS.find(item => item.name === name)
      item.innerHTML = data.content;
    })

    // sources
    const sources = document.querySelectorAll('.col-sources')
    sources.forEach(it => {
      const title = it.firstElementChild
      const content = it.lastElementChild

      title.onclick = () => {
        content.classList.toggle('hidden')
        it.classList.toggle('border')
      }
    })

    // external links
    const externalLinks = document.querySelectorAll('.sources .gclick')
    console.log(externalLinks)
    externalLinks.forEach(link => {
      const arrow = document.createElement('DIV')
      arrow.classList.add('external-link-icon')
      arrow.innerHTML = `<img src="../../assets/icons/arrow.svg" alt="externer Link"/>`
      link.prepend(arrow)
    })

  }
};


export default MachineLearning;
