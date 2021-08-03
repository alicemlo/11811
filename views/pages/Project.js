const Project = {
  render: async () => {
    return /*html*/ `
      <section class="project">
      
        <article class="container">
          <h3 class="text-center">Projekt</h3>
          <p>Im Rahmen der Bachelorarbeit entstand diese Webseite als praktisches Lehrprojekt neben der Thesis. Das Thema berührungslos gestengesteuerte Interfaces bildet bei dieser Arbeit das verbindende Thema zwischen Lehrprojekt und Thesis. Detaillierte Informationen zu dieser Arbeit gibt es auf digezz.ch zu sehen.</p>
<!--          <p>Mit dieser Bachelorarbeit habe ich mein Studium "Multimedia Production" an der FHGR im Sommer 2021 abgeschlossen.</p>-->
        </article>
      
        <article class="container">
          <h3>Realisation</h3>
          <p>Alice Loher</p>
        </article>    
        
        <article>
          <h3>Ressourcen</h3>
          <p>Einige der Quellen oder weiterführende Ressources sind direkt beim Content verlinkt.
          Ausserdem habe ich mich für meine Recherche oft auf dem Blog von <a target="_blank" href="https://datasolut.com/blog/">datasolut</a> aufgehalten oder durch das
          <a target="_blank" href="https://medium.com/topic/machine-learning">Medium Magazine</a> durchgestöbert. Eine der wichtigsten Ressourcen, welche mir das
          Thema KI und ML nähergebracht hat, ist <a target="_blank" href="https://www.zeit.de/digital/2020-11/richard-socher-kuenstliche-intelligenz-interviewpodcast-alles-gesagt">diese Podcast Folge mit dem KI-Forscher Richard Socher</a>.  
        </article>
        
        <article class="container">
          <h3>Code</h3>
          <p>Animationen: <a href="https://p5js.org/" target="_blank">p5js</a></p>
          <p>Gestenerkennung, Machine Learning: <a href="https://ml5js.org/" target="_blank">ml5js</a></p>
        </article> 
        
        <article class="container">
          <h3>Impressum</h3>
          <p>Alice Loher</p>
          <p>Clausiusstrasse 50, 8006 Zürich</p>
          <p>aliceloher@gmx.ch</p>
        </article> 
      
      </section>
    `;
  },
  after_render: async () => {
    mobileLinkEnabled = false
    disableGestureInteraction()
    removeBeforeMain()
  }
};
export default Project;
