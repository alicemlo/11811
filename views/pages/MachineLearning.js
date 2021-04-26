const MachineLearning = {
  slug: "/machine-learning",
  name: 'Machine Learning',

  async render() {
    lastStory = this.slug
    return /*html*/ `
      <section>
        <h1 class="text-center">MachineLearning</h1>
      </section>
    `;
  },
  after_render: async () => {}
};
export default MachineLearning;
