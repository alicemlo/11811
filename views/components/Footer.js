const Footer = {
  /**
   * Render the component content.
   */
  render: async () => {
    const links = ['Home', 'Project', 'Gestures'];
    const navLinks = links
      .map(
        link => `<li class="nav-item"><a class="nav-link" href="/#/${link.toLowerCase()}">${link}</a></li>`
      )
      .join('\n');

    return /*html*/ `
        <footer>
          <nav class="nav-footer">
            <ul>${navLinks}</ul>
          </nav>
        </footer>
    `;
  },
  after_render: async () => {

  }
};

export default Footer;
