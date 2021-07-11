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
          <p>Einige der Quellen oder weiterführende Ressources sind direkt beim Content verlinkt. Weitere Informationen gibt es bei:  </p>
          <ul>
            <li>...</li>
            <li>...</li>
            <li>...</li>
          </ul>
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
    gesturalInteractionEnabled = true
    gestureLabelingEnabled = false
  }
};
export default Project;
