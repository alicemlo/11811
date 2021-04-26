const scripts = [
  {
    'src': 'js/create-model.js',
    'id': 'create'
  },
  {
    'src': 'js/gi.js',
    'id': 'gi',
  }
]

const Home = {
  render: async () => {
    return /*html*/ `
      <section>
        <h1 class="text-center"><a href="/#/items">Check out</a></h1>
        <button class="enable-gi">enable gesture interface</button>
        <button class="disable-gi">disable gesture interface</button>
      </section>
    `;
  },
  after_render: async () => {
    let btnEnable = document.querySelector('.enable-gi');
    let btnDisable = document.querySelector('.disable-gi');
    btnEnable.onclick = async function () {
      scripts.forEach(item => {
        const script = document.createElement('script');
        script.id = item.id;
        script.src = item.src;
        document.body.append(script);
      })
    }
    btnDisable.onclick = () => {
      const canvas = document.querySelector('CANVAS')
      const video = document.querySelector('VIDEO')
      if (canvas) document.body.removeChild(canvas)
      if(video) document.body.removeChild(canvas)
      scripts.forEach(item => {
        let i = document.getElementById(item.id)
        console.log(i)
        console.log(i.parentNode)
        i.parentNode.removeChild(i);
      })
    }
  }
};
export default Home;
