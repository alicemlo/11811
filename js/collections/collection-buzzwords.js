const COLLECTION_BUZZWORDS = [
  {
    title: 'Lernmethoden',
    keyword: 'Methoden zum Trainieren von Datenmodellen',
    content:
      `
        <p>Es gibt verschiedene maschinelle Lernmethoden, anhand derer künstlich intelligente Systeme generiert werdne können.</p>
        <p>Grob unterscheidet man zwischen überwachten Lernmethoden, unüberwachten Lernmethoden und Reinforcement Learning.</p>
      `
  },
  {
    title: 'Big Data',
    keyword: 'Massendaten, riesige Datenmengen',
    content:
      `
        <p>Big Data ist eine riesige, komplexe und unstrukturierte Menge an Daten, welche aufgrund ihrer Komplexität nicht einfach auszuwerten ist.</p>
        <p>"big" bezieht sich dabei uf die Datenmenge, die Geschwindigkeit mit der die Daten gesammelt werden, die Bandbreite an Datentypen und die Echtheit der Daten.</p>
        <p>Big Data wird zum Beispiel durch Überwachungssystemen oder Nutzeranalysen generiert</p>
      `
  },
  {
    title: 'Algorithmus',
    keyword: 'Eine Folge von Anweisungen, Prozedur, Konzept zur Lösung eines Problem',
    content:
      `
        <p>Ein Algorithmus besteht aus einer Folge von Anweisungen, welche man ausführt, um ein bestimmtes Problem zu lösen. Ein Rezept ist beispielsweise ein Algorithmus, wobei die einzelnen Schritte des Rezepts als Anweisungen anzusehen sind um ein Gericht zu erhalten.</p>
        <p>Algorithmen spielen in der Informatik eine grosse Rolle, weil sie die Grundlage der Programmierung bilden.</p>
      `
  },
  {
    title: 'Data Science',
    keyword: 'Forschungsbereich, Datenwissenschaften',
    content:
      `
        <p>Dieser Wissenschaftsbereich beschäftigt sich damit, wie Wissen aus Daten extrahiert werden kann.
        Data Scientists forschen an Methoden, Prozessen und Algorithmen, um aus Daten Muster und Erkenntnisse zu gewinnen.</p>
      `
  },
  {
    title: 'Turing Test',
    keyword: 'Test, Idee, Alan Turing, 1950, imitation game',
    content:
      `
        <p>Bei diesem Test führt ein Mensch Gespräche mit zwei unterschiedlichen Gesprächspartnern über ein Computer-Interface und stellt beiden Fragen. Der eine Gesprächspartner ist ein Mensch und der andere
        eine Maschine. Kann der Fragesteller am Ende des Gesprächs nicht herausfinden, welcher der beiden Gesprächspartner der Computer ist, hat der Computer (bzw. die Maschine) den Turing-Test bestanden.</p>
      `
  },
  {
    title: 'Data Modelling',
    keyword: 'Verfahren zur Abbildung von Daten',
    content:
      `
        <p>Durch Datenmodellierung werden Datenstätze zueinander in Beziehung gesetzt und visuell sinnvoll und übersichtlich präsentiert.</p>
      `
  },
  {
    title: 'Data Mining',
    keyword: 'Prozess systematischer Analyse grosser Datenmengen',
    content:
     `
        <p>Data Mining steht für den Prozess der systematischen Analyse von grossen Datenmengen (z.B. Big Data). 
        Machine Learning ist eine der Methoden, die in diesem Prozess angewendet werden.</p>
        <p>Das Ziel von Data Mining ist es, in grossen Datenbeständen Muster zu erkennen. In diesem Prozess werden jedoch keine neuen Daten generiert.</p>
      `
  },
  {
    title: 'Text Mining',
    keyword: 'Prozess zur Textanalyse, Extrahierung von Informationen aus Text',
    content:
      `  
        <p>Dieser Prozess dient spezifisch der Extrahierung von Informationen aus Texten.</p>
      `
  },
  {
    title: 'Robotik',
    keyword: 'Interdisziplinäres Forschungsfeld zwischen Informatik und Engineering',
    content:
      `
        <p>In der Robotik wird eine Verbindung zwischen Mechanik und Computern geschaffen. Ein künstlich intelligenter Roboter ist dazu in der Lage, 
        selbstständige mechanische Vorgänge durchführen. </p>
        <p>Roboter können beispielsweise als Assistenzsysteme eingesetzt werden oder können in der Landwirtschaft unterstützend eingesetzt werden. </p>
        <p>Zudem bietet sich der Einsatz von Robotern in gefährlichen Umgebungen bzw. Situationen an oder in Bereichen, die dem Menschen nicht zugänglich sind.</p>
      `
  },
  {
    title: 'Mustererkennung',
    keyword: 'Erkennnug von Regelmässigkeiten, Wiederhohlungen, Abweichugen in grossen Datenmengen',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Bildverarbeitung',
    keyword: 'Computer Vision',
    content:
      `
        <p>Erforschung der maschinellen Verarbeitung von Bildern zur Analyse und Informationsgewinnung auf Basis von Bildern.</p>
        <p>Interessant ist dieses Verfahrung zum Beispiel für autonome Fahrsysteme oder bei der optischen Verfolgung von Objekten.</p>
      `
  },
  {
    title: 'Natural Language Processing',
    keyword: 'Werkzeug, Computerlinguistik, Schnittstelle zwischen Sprachwissenschaft und Informatik',
    content:
      `  
        <p>Erforschung von computergestützter Verarbeitung von Text und Sprache</p>
        <p>Dazu gehört Spracherkennung, Textvervollständigung, Generierung von gesprochener Sprache, Chatbots, Übersetzungstools, Dialoganalyse, etc.</p>
      `
  },
  {
    title: 'Machine Learning',
    keyword: 'künstliche Generierung von Wissen, Ansatz zur automatisierten Analyse von Daten',
    content:
      `
        <p>
          Durch maschinelles Lernen können Algorithmen generiert werden, welche Muster in Datensätzen erkennen und analysieren können. 
        </p>
        <p>
          Der Begriff Machine Learning (abgekürzt ML) ist dabei als Oberbegriff zu verstehen und umfasst verschiedene Methoden und Verfahren
          zur Generierung von Systemen, die eigenständig lernen und sich verbessern können.
        </p>
        
      `
  },
  {
    title: 'Zielvariable',
    keyword: 'Output, Prognose',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Clusteranalyse',
    keyword: '',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Neuronale Netze',
    keyword: 'Algorithmen, abstrahiertes Modell',
    content:
      `
        <p>
        Angeleht an die neuronale Struktur unseres Gehirns können Neuroanle Netze sehr schnell Daten auswerten, indem sie die
        Daten des Inputs verarbeiten und einen Output ausgeben. Sie werden beim Trainieren eines künstlichen Datenmodells generiert.
        <p>
      `
  },
  {
    title: 'Deep Learning',
    keyword: 'Konzept',
    content:
      `
        <p>
          Deep Learning stellt keine eine eigene Lernmethode dar, sondern steht für ein maschinelles Lernverfahren, dass
          auf künstlichen neuronalen Netzen aufgebaut ist. Dies kann bei überwachten sowie unüberwachten Lernmethoden der Fall sein.
        </p>
      `
  },
  {
    title: 'Reinforcement Learning',
    keyword: 'Lernmethode, bestärkendes Lernen',
    content:
      `
        <p>
        Reinforcement Lerning stellt neben der überwachten und der unüberwachten Lernmethode eine eigene Lernmethode dar.
        Im Gegensatz zu den anderen beide Verfahren werden hier keine Input-Daten an sich benötigt, sondern es werden nach dem Trial-and-Error 
        Prinzip verschiedene Simulationen getestet. Das System lernt, indem "gutes" Verhalten belohnt wird.
        </p>
      `
  },
  {
    title: 'Superintelligenz',
    keyword: 'Eine dem Menschen überlegene Intelligenz, eine starke künstliche Intelligenz',
    content:
      `
        <p>Eine Superintelligenz ist dem Menschen in jeglicher Hinsicht überlegen (auch in Bezug auf Emotionalität und Kreativität). 
        Wir sind heute weit davon entfernt, ein superintelligentes System schaffen zu können.  
       </p>
      `
  }
]
