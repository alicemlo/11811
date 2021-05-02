const Buzzwords = {
  slug: "/buzzwords",
  name: 'Buzzwords',

  async render() {
    lastStory = this.slug

    return `
      <section class="buzzwords">
<div class="container">
  <article class="ct-buzz no-comp">
    <div class="flex">
        <div class="component no-mw">
          <h4>Algorithmus</h4>
        </div>
    </div>
  </article>
  
  <article class="ct-buzz no-comp">
    <div class="flex">
        <div class="component">
          <h4>Data Science</h4>
          <div class="component">
              <h5>Data Modelling</h5>
            </div>
          </div>
    </div>
  </article>
  
  <article class="ct-buzz no-comp">
    <div class="flex">
      <div class="component">
        <h4>Big Data</h4>
        <div class="component">
          <h5>Data Mining</h5>
        </div>
        <div class="component">
          <h5>Text Mining</h5>
        </div>
      </div>
    </div>
  </article>
  
  <article class="ct-buzz">
    <h4>Künstliche Intelligenz</h4>
    
    <div class="flex">
      
      <div class="component">
        <h4>Machine Learning</h4>
        <div class="component">
          <h5>Lernmethoden</h5>
        </div>
        <div class="component">
          <h5>Neuronale Netze</h5>
        </div> 
        <div class="component">
          <h5>Deep Learning</h5>
        </div>
        <div class="component">
          <h5>Reinforcement Lerning</h5>
        </div>        
        <div class="component">
          <h5>Zielvariable</h5>
        </div>  
        <div class="component">
          <h5>Clusteranalyse</h5>
        </div>     
      </div>
      
      <div class="component">
        <h4>Musteranalyse</h4>
        <div class="component">
          <h5>Language Processing</h5>
        </div>
        <div class="component">
          <h5>Bildverarbeitung</h5>
        </div>
      </div>   
  
      <div class="component">
        <h4>Turing Test</h4>
      </div>
      
      <div class="component">
        <h4>Robotik</h4>
      </div>
      
      <div class="component">
        <h4>Superintelligenz</h4>
      </div>
    </div>
  </article>
</div>

<aside>
  <div class="definition">
    <i class="keyword">Keywords</i>
    <div class="def-content"></div>
  </div>
</aside>

      </section>

    `;
  },

  after_render: async () => {
    const cps = document.querySelectorAll('.component')
    const ct = document.querySelector('section .container')
    const buzz = new Event('buzz');
    defContainer = document.querySelector('.def-content')
    keyword = document.querySelector('.keyword')
    cps.forEach(item => {
      let title = item.firstElementChild.innerText;
      console.log(item)
      let content = buzzwords.find(item => item.title === title)
      let cp = new BuzzComponent(item, title, content?.content);
      cp.run()
    })
    ct.onclick = (e) => {
      let el=e.target
      if(e.target.tagName==='H5' || e.target.tagName==='H4')el = e.target.parentElement
      let attr = el.getAttribute('data-id')
      e.dispatchEvent(buzz);
      console.log(attr)
    }
  }
};

let defContainer, keyword;

class BuzzComponent {
  constructor(item, title, content) {
    this.item = item;
    this.title = title;
    this.content = content || 'ist not defined';
  }
  showContent() {
    defContainer.innerHTML = this.title;
    this.item.addEventListener('buzz', function (e) {
      console.log(e)
      console.log("buzzed")
    }, false);

  }

  hideContent() {
    defContainer.innerHTML = ''
  }
  addAttribute(){
    this.item.setAttribute('data-id', this.title)
  }
  run(){
    this.addAttribute()
    this.showContent()
  }
}


const buzzwords = [
  {
    title: 'Künstliche Intelligenz',
    keyword: 'Theorie, Forschungsbereich',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Big Data',
    keyword: 'Massendaten, riesige Datenmengen',
    content:
      `
        <p>eine riesige, komplexe und unstrukturierte Menge an Daten, welche aufgrund ihrer Komplexität nicht einfach auszuwerten sind.</p>
        <p>"big" bezieht sich dabei uf die Datenmenge, die Geschwindigkeit mit der die Daten gesammelt werden, die Bandbreite an Datentypen und die Echtheit der Daten.</p>
        <p>Dieser Begriff wird häufig im Zusammenhang mit Technologien und Digitalisierung verwendet.</p>
        <p>Die Daten stammen z.B. von Überwachungssystemen, Nutzeranalysen oder Usertracking</p>
      `
  },
  {
    title: 'Algorithmen',
    keyword: 'Eine Folge von Anweisungen, Prozedur, Rezept',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Data Science',
    keyword: 'Forschungsbereich, Datenwissenschaften',
    content:
      `
        <p>Dieser Wissenschaftsbereich beschäftigt sich damit, wie Wissen aus Daten extrahiert werden kann.
        Data Scientists forschen an Methoden, Prozessen und Algorithmen, um aus Daten Muster und Erkenntnisse zu gewinnen.</p>
        <p>Machine Learning ist ein Teilbereich von Data Science...</p>
      `
  },
  {
    title: 'Turing Test',
    keyword: 'Test, Idee, Alan Turing, 1950',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Data Modelling',
    keyword: 'Informationssysteme',
    content:
      `
        <p>Data modeling is the process of producing a descriptive diagram of relationships between various types of information that are to be stored in a database. One of the goals of data modeling is to create the most efficient method of storing information while still providing for complete access and reporting.</p>
      `
  },
  {
    title: 'Data Mining',
    keyword: 'Prozess systematischer Analyse grosser Datenmengen',
    content:
      `
        <p>Methoden zur Auswertung: Machine Learning, Datenbanksysteme und Statistik</p>
        <p>Ziel: Musterkennung in grossen Datebeständen und nicht die Generierung, Speicherung oder Verarbeitung von Daten</p>
        <p>Als Data-Mining wird beispielsweise die Cluster-Analyse oder die Identifizierung von Abweichungen/Fehler in grossen Datensätzen bezeichnet</p>
        <p>Anwendungsbeispiel Medizin: </p>
      `
  },
  {
    title: 'Text Mining',
    keyword: 'Prozess zur Textanalyse, Extrahierung von Informationen aus Text',
    content:
      `  
        <p></p>
      `
  },
  {
    title: 'Robotics',
    keyword: 'Interdisziplinäres Forschungsfeld zwischen Informatik und Engineering',
    content:
      `
        <p>Forschung an Assistenzsystemen, die Menschliche Aktionen ersetzten oder ergänzen können.</p>
        <p>Einsatzgebiet: Roboter können in gefährtlichen Umgebungen / Situationen eingestzt werden.</p>
      `
  },
  {
    title: 'Mustererkennung',
    keyword: 'Erkennnug von Regelmässigkeiten, Wiederhohlungen, Abweichugen in grossen Datenmengen',
    content:
      `
        <p>Bsp. Spracherkennung, Texterkennung, Gesichtserkennung</p>
      `
  },
  {
    title: 'Bildverarbeitung',
    keyword: '',
    content:
      `
        <i>Bilderkennung</i>
        <p></p>
      `
  },
  {
    title: 'Natural Language Processing',
    keyword: 'Werkzeug',
    content:
      `  
        <i>Sprachverarbeitung, Textanalyse</i>
        <p>kompliziertes Forschungsfeld, Verbidung zwischen Liguistik und KI-Forschung, Allgemeinwissen</p>
      `
  },
  {
    title: 'Machine Learning',
    keyword: '',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Zielvariable',
    keyword: '',
    content:
      `
        <p>Trainingsdaten</p>
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
    keyword: '',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Deep Learning',
    keyword: '',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Reinforcement Learning',
    keyword: '',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Superintelligenz',
    keyword: '',
    content:
      `
        <p></p>
      `
  }
]


export default Buzzwords;
