const Buzzwords = {
  slug: "/buzzwords",
  name: 'Buzzwords',

  async render(){
    lastStory = this.slug

    return `
      <section>
        <h1 class="text-center">Buzzwords</h1>
      </section>
    `;
  },

  after_render: async () => {}
};
export default Buzzwords;
