const links = [
  {
    'id': 'Home',
    'ref': '',
    'class': 'nav-item'
  },
  {
    'id': 'Projekt',
    'ref': 'project',
    'class': 'nav-item'
  },
  {
    'id': 'Gesten',
    'ref': 'gestures',
    'class': 'nav-item on-gi'
  }
]

const Footer = {
  /**
   * Render the component content.
   */
  render: async () => {
    const navLinks = links
      .map(
        link => `<li class="${link.class}"><a class="nav-link" href="/#/${link.ref}">${link.id}</a></li>`
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
