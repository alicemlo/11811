const Buzzwords = {
  slug: "/buzzwords",
  name: 'Buzzwords',

  async render() {
    lastStory = this.slug

    return `
      <section class="buzzwords">
      
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

<div class="ct-hover">
  <div class="hover"></div>
</div>
      </section>
    `;
  },

  after_render: async () => {
    const cps = document.querySelectorAll('.component')
    const hoverCt = document.querySelector('.ct-hover')
    hoverItem = document.querySelector('.hover')
    document.onmousemove = (e) => {
      hoverCt.style.top = e.y + 20 + 'px';
      hoverCt.style.left = e.x + 'px';
    }
    cps.forEach(item => {
      let title = item.firstElementChild.innerText;
      let content = buzzwords.find(item => item.title === title)
      let cp = new BuzzComponent(item, title, content?.content);
      cp.run();
    })
  }
};

let hoverItem;

class BuzzComponent {
  constructor(item, title, content) {
    this.item = item;
    this.title = title;
    this.content = content || 'ist not defined';
  }

  event() {
    this.item.onmouseover = () => this.showContent()
    // this.item.onmouseleave = () => this.hideContent()

  }

  showContent() {
    hoverItem.innerHTML = this.content;
  }

  hideContent() {
    hoverItem.innerHTML = ''
  }

  run() {
    this.event()
  }

}


const buzzwords = [
  {
    title: 'Künstliche Intelligenz',
    content:
      `
        <i>Theorie, Forschungsbereich</i>
        <p></p>
      `
  },
  {
    title: 'Big Data',
    content:
      `
        <i>Massendaten, riesige Datenmengen</i>
        <p>eine riesige, komplexe und unstrukturierte Menge an Daten, welche aufgrund ihrer Komplexität nicht einfach auszuwerten sind.</p>
        <p>"big" bezieht sich dabei uf die Datenmenge, die Geschwindigkeit mit der die Daten gesammelt werden, die Bandbreite an Datentypen und die Echtheit der Daten.</p>
        <p>Dieser Begriff wird häufig im Zusammenhang mit Technologien und Digitalisierung verwendet.</p>
        <p>Die Daten stammen z.B. von Überwachungssystemen, Nutzeranalysen oder Usertracking</p>
      `
  },
  {
    title: 'Algorithmen',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Data Science',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Turing Test',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Data Modelling',
    content:
      `
        <p>Data modeling is the process of producing a descriptive diagram of relationships between various types of information that are to be stored in a database. One of the goals of data modeling is to create the most efficient method of storing information while still providing for complete access and reporting.</p>
      `
  },
  {
    title: 'Data Mining',
    content:
      `
        <i>Prozess systematischer Analyse grosser Datenmengen</i>
        <p>Methoden zur Auswertung: Machine Learning, Datenbanksysteme und Statistik</p>
        <p>Ziel: Musterkennung in grossen Datebeständen und nicht die Generierung, Speicherung oder Verarbeitung von Daten</p>
        <p>Als Data-Mining wird beispielsweise die Cluster-Analyse oder die Identifizierung von Abweichungen/Fehler in grossen Datensätzen bezeichnet</p>
        <p>Anwendungsbeispiel Medizin: </p>
      `
  },
  {
    title: 'Text Mining',
    content:
      `  
        <i>Prozess zur Textanalyse, Extrahierung von Informationen aus Text</i>
        <p></p>
      `
  },
  {
    title: 'Robotics',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Musteranalyse',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Bildverarbeitung',
    content:
      `
        <i>Bilderkennung</i>
        <p></p>
      `
  },
  {
    title: 'Language Processing',
    content:
      `  
        <i>Sprachverarbeitung, Textanalyse</i>
        <p></p>
      `
  },
  {
    title: 'Machine Learning',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Zielvariable',
    content:
      `
        <p>Trainingsdaten</p>
      `
  },
  {
    title: 'Clusteranalyse',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Neuronale Netze',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Deep Learning',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Reinforcement Learning',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Superintelligenz',
    content:
      `
        <p></p>
      `
  }
]


export default Buzzwords;
