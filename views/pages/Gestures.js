const Gestures = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `
      <section class="gestures fixed">
<!--       <article>-->
<!--          <h1>Gestensteuerung</h1>-->
<!--          <h3>Was du wissen mussst:</h3>-->
<!--          <p>- <strong>Lasse die Webcam an.</strong> Die Kamera braucht es, um die Position deiner Hand zu erkennen und zu verfolgen. Das Videomaterial wird nicht Umständen gespeichert und wird niemanden weitergegeben.</p>-->
<!--          <p>- <strong>Sorge für gute Lichtverhältnisse.</strong> Deine Hand muss sich gut vom Hintergrund abheben können, damit sie gut erkannt wird. Es darf nicht zu hell oder zu dunkel sein, damit der Kontrast optimal bleibt.</p>-->
<!--          <p>Video->Licht überprüfen</p>-->
<!--          <p>- <strong>Verwende nur eine Hand auf einmal.</strong> Wenn zwei Hände in Bild sind, funktioniert die Gestenerkennnung nicht. Es spielt dabei keine Rolle, ob du die rechte oder die linke Hand benutzt.</p>-->
<!--          <p>- <strong>Es braucht ein bisschen Zeit, bis du dich and die Gestensteuerung gewöhnt hast.</strong> Ausserdem funktioniert die Gestenerkennung und -interpretation nicht immer perfekt. Sei offen für Fehler.</p>-->
<!--        </article>-->
<!--        <article>-->
<!--          <h1>Gesten</h1>-->
<!--         -->
<!--          <h3><a href="/#/gestures/swipe">- Swipe</a></h3>-->
<!--          <h3><a href="/#/gestures/click">- Klick</a></h3>-->
<!--   -->
<!--        </article>-->
      </section>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {}
};
export default Gestures;
