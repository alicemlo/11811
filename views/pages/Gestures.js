const Gestures = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `
      <section class="gestures">
        
        <article>
          <div>
          <h1>Beachte folgendes, damit die Erkennung deiner Geste gut funktioniert: </h1>
          <p>- <strong>Lasse die Webcam an.</strong> Die Kamera braucht es, um die Position deiner Hand zu erkennen und zu verfolgen. Das Videomaterial wird nicht gespeichert und kann niemanden weitergegeben werden.</p>
          <p>- <strong>Sorge für gute Lichtverhältnisse.</strong> Deine Hand muss sich gut vom Hintergrund abheben können, damit sie gut erkannt wird. Es darf nicht zu hell oder zu dunkel sein, damit der Kontrast optimal bleibt.</p>
          <p>- <strong>Die Hand darf nicht zu nah an der Webcam sein.</strong> Eine Distanz von ca. 30cm zwischen Hand und Webcam ist ausreichend.</p>
            <p>Video->Licht überprüfen</p>
              <p>- <strong>Verwende nur eine Hand auf einmal.</strong> Wenn zwei Hände in Bild sind, funktioniert die Gestenerkennnung nicht. Es spielt dabei keine Rolle, ob du die rechte oder die linke Hand benutzt.</p>
           <p>- <strong>Es braucht ein bisschen Zeit, bis du dich and die Gestensteuerung gewöhnt hast.</strong> Ausserdem funktioniert die Gestenerkennung und -interpretation nicht immer perfekt. Sei offen für Fehler.</p>
          </div>
          
        </article>
        
        <article>
          <p>Du merkst schnell, wenn die Handerkennung nicht funktioniert: Die rosa Punkte stocken oder sind nicht sichtbar, wenn keine Hand erkannt wird. Versuche dann die Hand besser zu positionieren, die Lichtverhältnisse anzupassen und überprüfe den Abstand der Hand zur Kamera.</p>
        </article>
        
        
        <article>
          <h1>Gestenerkennung</h1>
          <p>die Gestensteuerung auf dieser Webseite basiert auf 2 Posen: Hand offen und Hand zu. </p>
<!--          <div>-->
<!--            <img class="hand-icon" src="../../assets/images/hand-closeds.png" alt="Hand geschlossen"/>-->
<!--            <img class="hand-icon" src="../../assets/images/hand-open.png" alt="Hand offen"/>-->
<!--          </div>-->
        </article>
        
        <article>
          <h1>Interaktionen</h1>
          <p><strong>Klicken</strong></p>
<!--          <div>-->
<!--            <img class="hand-icon" src="../../assets/images/hand-closeds.png" alt="Hand geschlossen"/>-->
<!--            <img class="hand-icon" src="../../assets/images/hand-open.png" alt="Hand offen"/>-->
<!--          </div>-->
          <p><strong>Scrollen</strong></p>

          <p><strong>Swipen</strong></p>

        </article>
        
        
                
        <article class="hand-poses">
          <img class="hand-icon" src="../../assets/images/hand-closeds.png" alt="Hand zu"/>
          <p>Mit geöffneter Hand kannst du von links nach rechts bzw. von rechts nach links swipen. </p>
        </article>
        
        <article class="hand-poses">
          <img class="hand-icon" src="../../assets/images/hand-open.png" alt="Hand zu"/>
          <p>Wenn du mit geschlossener Hand lange auf einem Button bleibst, löst das ein Klick aus. </p>
        </article>
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
  after_render: async () => {
    mobileLinkEnabled = false
    gesturalInteractionEnabled = false
    gestureLabelingEnabled = true
  }
};
export default Gestures;
