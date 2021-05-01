const Gestures = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `
      <section class="gestures fixed">
      <article>
        <h1 class="">Gesten</h1>
      </article>
        
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
