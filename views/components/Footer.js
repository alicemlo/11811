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
          <span class="enable-gi"></span>
          <span class="mobile-link"><a href="/"></a></span>
        </footer>
    `;
  },
  after_render: async () => {
    let giEnabler = document.querySelector('.enable-gi');
    let isStory = routes__story.includes(window.location.hash.substring(1))
    if(!isStory && lastStory){
      let elUl =document.querySelector('.nav-footer ul')
      let elBack = document.createElement('LI');
      elBack.classList.add('back')
      elBack.innerText = "Zurück"
      elUl.appendChild(elBack)
      elBack.onclick = () => window.location.href = '/#'+lastStory
    }

    giEnabler.onclick = () => toggleGi(document.body, giEnabler);
    giEnabled ? giEnabler.classList.add('active')  : giEnabler.classList.remove('active')

  }
};

export default Footer;
