const links = [
  {
    'id': 'Buzzwords',
    'ref': 'buzzwords',
    'class': 'nav-item'
  },
  {
    'id': 'Machine Learning',
    'ref': 'machine-learning',
    'class': 'nav-item'
  },
  {
    'id': 'Training',
    'ref': 'train-model',
    'class': 'nav-item on-gi'
  }
]

const Header = {
  render: async () => {
    let isStory = routes__story.includes(window.location.hash.substring(1))
    if(!isStory) return ''
    const navLinks = links
      .map(
        link => `<li class="${link.class}"><a class="nav-link" href="/#/${link.ref}">${link.id}</a></li>`
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
  after_render: async () => {

  }
};

export default Header;
