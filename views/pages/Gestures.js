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
           <p>- <strong>Es braucht ein bisschen Zeit, bis du dich and die Gestensteuerung gewöhnt hast.</strong> Ausserdem funktioniert die Gestenerkennung und -interpretation nicht immer perfekt.</p>
          </div>
          
        </article>
        
        <article>
          <p>Du merkst schnell, wenn die Handerkennung nicht funktioniert: Die rosa Punkte stocken oder sind nicht sichtbar, wenn keine Hand erkannt wird. Versuche dann die Hand besser zu positionieren, die Lichtverhältnisse anzupassen und überprüfe den Abstand zwischen Hand und Kamera.</p>
        </article>
        
        

        
        <article class="gestures-grid">
          <h1 class="title">Interaktionen</h1>
          <div class="title">
            <p><strong>Swipen</strong></p>
            <p>Mit dieser Gesten kannst du zwischen den Seiten hin und her wechseln</p>
            <p>Halte die Hand geöffnet und bewege sie von rechts nach links bzw. von links nach rechts.</p>
          </div>
          <div>
             <p>Swipe nach links</p>
             <img src="../../assets/images/gesture-swipe-left.png" alt="Swipe links"/>
          </div>
          <div>
             <p>Swipe nach rechts</p>
             <img src="../../assets/images/gesture-swipe-right.png" alt="Swipe rechts"/>
          </div>
          <div>
             <p>Swipe auflösen</p>
             <p>Wenn du die Hand schliesst, löst du die Geste auf</p>
          </div>
        </article>
        
        <article class="gestures-grid">
          <div class="title">
            <p><strong>Scrollen</strong></p>
            <p>Halte die Hand geschlossen oder zu einer Faust geballt und halte sie tief unten oder weit oben, um auf der Seite zu scrollen.</p>
          </div>
          <div>
             <p>nach unten scrollen</p>
             <img src="../../assets/images/gesture-scroll-down.png" alt="Swipe links"/>
          </div>
          <div>
             <p>nach oben scrollen</p>
             <img src="../../assets/images/gesture-scroll-up.png" alt="Swipe rechts"/>
          </div>
          <div>
             <p>Scroll auflösen</p>
             <p>Sobald du deine Hand geöffnet hältst, hörst du auf zu scrollen.</p>
          </div>
        </article>
        
        <article class="gestures-grid">
          <div class="title">
            <p><strong>Klicken</strong></p>
            <p>Du kannst auf ein Element (Link oder Button) klicken, wenn du deinen Zeigefinger ca. 1 Sekunde drauf hältst.</p>
          </div>
          <div>
             <img src="../../assets/images/gesture-click.png" alt="Swipe links"/>
          </div>
          <div>
             <p>Klick auflösen</p>
             <p>Entferne deinen Zeigefinger vom Element oder schliesse deine Hand</p>
          </div>
        </article>
                
      </section>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {
    mobileLinkEnabled = false
    disableGestureInteraction()
  }
};
export default Gestures;
