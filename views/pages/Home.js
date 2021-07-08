const Home = {
  render: async () => {
    return /*html*/ `
      <section class="home">
        <h5>11811</h5>
        <h1 class="title">[ lets talk machine learning ]</h1>
        <h3 class="sub-title">ein experimentelles Projekt möglich durch KI und Machine Learning</h3>
        <a href="#/machine-learning" class="toggle-gi">Gestensteuerung aktivieren</>        
        <a href="#/machine-learning">ohne Gestensteuerung fortfahren</a>
      </section>
    `;
  },
  after_render: async () => {
    gesturalInteractionEnabled = true
    gestureLabelingEnabled = false

    const toggleGI = document.querySelector('.toggle-gi');
    toggleGI.onclick = () => toggleGi(document.body, toggleGI)
  }
};
export default Home;
