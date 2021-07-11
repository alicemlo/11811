const Error404 = {
  render: async () => {
    return /*html*/ `
      <section>
        <h1 class="text-center">a glitch... </h1>
      </section>
    `;
  },
  after_render: async () => {
    mobileLinkEnabled = false
    gesturalInteractionEnabled = true
    gestureLabelingEnabled = false
  }
};
export default Error404;
