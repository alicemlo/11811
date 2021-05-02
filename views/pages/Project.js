const Project = {
  render: async () => {
    return /*html*/ `
      <section class="project fixed">
      
        <article class="container">
          <h1 class="text-center">Projekt</h1>
          <p>Mit diesem Projekt möchte ich auf eine experimentelle Art veranschaulichen, was Machine Learning ist. Denn ich finde, dass heute jeder wenigstens die Grundlagen verstehen sollte, um das Thema KI besser verstehen zu können. </p>
          <p>Dieses Webseite entstand als Lehrprojekt für meine Bachelorarbeit über Gestengesteuerte Interfaces.</p>
        </article>
      
        <article class="container">
          <h1>Über mich</h1>
          <p>podcast richard socher</p>
        </article>  
        
        <article>
          <p>Quellenangaben</p>
        </article>
      
      </section>
    `;
  },
  after_render: async () => {
  }
};
export default Project;
