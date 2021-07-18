const Home = {
  render: async () => {
    return /*html*/ `

      <section class="home">
        <h5 class="pe-none">11811</h5>
        <h1 class="title">[ lets talk machine learning&nbsp]</h1>
        <h3 class="sub-title">ein experimentelles Projekt möglich durch KI und Machine Learning 
            <span class="web-browser-info invisible">
              Diese Webseite wurde primär auf Chromium-basierten Browsern getestet. 
              Wechsle zu Chrome, Brave oder Edge für die beste User Experience.
            </span>
        </h3>
        <a href="#/machine-learning" class="toggle-gi mb-dashed">Gestensteuerung aktivieren</>  
        <a href="#/machine-learning" class="a-title-mobile"><h1 class="title-mobile">[ lets talk machine learning&nbsp]</h1></a>
      
        <a href="#/machine-learning">ohne Gestensteuerung fortfahren</a>
       

      </section>
    `;
  },
  after_render: async () => {
    mobileLinkEnabled = false
    disableGestureInteraction()
    removeBeforeMain()

    const webBrowserInfo = document.querySelector('.web-browser-info')

    const isChromium = !!window.chrome;
    if(!isChromium) webBrowserInfo.classList.remove('invisible')

    const toggleGI = document.querySelector('.toggle-gi');
    toggleGI.onclick = () => toggleGi(true)
  }
};
export default Home;
