const Navbar = {
  /**
   * Render the component content.
   */
  render: async () => {
    const links = ['Buzzwords', 'Machine-Learning', 'Training'];
    const navLinks = links
      .map(
        link => `<li class="nav-item"><a class="nav-link" href="/#/${link.toLowerCase()}">${link}</a></li>`
      )
      .join('\n');
    return /*html*/ `
      <nav class="nav-header">
        <ul class="navbar-nav">
          ${navLinks}
        </ul>
      </nav>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {}
};

export default Navbar;
