const Header = {
  render: async () => {
    let isStory = routes__story.includes(window.location.hash.substring(1))
    if(!isStory) return ''
    const navLinks = headerLinks
      .map(
        (link, index) => `<li class="${link.class}"><a class="nav-link" href="/#${link.ref}">${link.id}</a></li>`
      )
      .join('\n');
    return /*html*/ `
      <nav class="nav-header">
        <ul class="navbar-nav">
          <span><a href="/#/machine-learning"> > </a></span>
          <span><a href="/#/machine-learning"> < </a></span>
          ${navLinks}
        </ul>
      </nav>
      <nav class="mobile-nav">Machine Learning</nav>
    `;
  },

  after_render: async () => {
  }
};

export default Header;
