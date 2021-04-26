
const Items = {
  /**
   * Render the page content.
   */
  render: async () => {

    return /*html*/ `
      <section class="container-md">
        <h1 class="text-center">List of characters:</h1>
        <div class="row m-4">
        </div>
      </section>  
    `;
  },

  after_render: async () => {}
};

export default Items;
