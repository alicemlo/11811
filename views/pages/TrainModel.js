const TrainModel = {
  slug: "/train-model",
  name: 'Train Model',

  async render(){
    lastStory = this.slug
    return `
      <section>
        <h1 class="text-center">TrainModel</h1>
      </section>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {}
};
export default TrainModel;
