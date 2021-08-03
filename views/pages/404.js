const Error404 = {
  render: async () => {
    return /*html*/ `
      <section class="page-404">
        <div>
          <a href="#/machine-learning">
            <span class="404">a glitch... </span>
            <span class="404">a glitch... </span>
            <span class="404">a glitch... </span>
          </a>    
        </div>

      </section>
    `;
  },
  after_render: async () => {
    mobileLinkEnabled = false
    enableAllGesturalInteraction()
    removeBeforeMain()
  }
};
export default Error404;
