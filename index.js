// Import pages, components and helper functions.
import Home from './views/pages/Home.js';
import Error404 from './views/pages/404.js';
import Project from './views/pages/Project.js';
import Gestures from './views/pages/Gestures.js';
import GesturesViews from './views/pages/GesturesID.js';
import MachineLearning from './views/pages/MachineLearning.js';
import Buzzwords from './views/pages/Buzzwords.js';
import TrainModel from './views/pages/TrainModel.js';

import Header from './views/components/Header.js';
import Footer from './views/components/Footer.js';

import { parseRequestUrl } from './services/utils.js';

// List of supported routes. Any url other than these will render 404 page.
const routes = {
  '/': Home,
  '/project': Project,
  '/machine-learning': MachineLearning,
  '/buzzwords': Buzzwords,
  '/gestures': Gestures,
  '/gestures/:id': GesturesViews,
  '/train-model': TrainModel,
};

let links= null

/**
 * The router code. Takes a URL, checks against the list of
 * supported routes and then renders the corresponding content page.
 */
const router = async () => {
  // Lazy load view element:
  const header = document.getElementById('header_root');
  const content = document.getElementById('page_root');
  const footer = document.getElementById('footer_root');

  // Render the header and footer of the page.
  header.innerHTML = await Header.render();
  await Header.after_render();
  footer.innerHTML = await Footer.render();
  await Footer.after_render();

  // Destructure the parsed URl from the addressbar.
  const { resource, id, verb } = parseRequestUrl();

  // Parse the URL and if it has an id part, change it with the string ":id".
  const parsedUrl =
    (resource ? '/' + resource : '/') +
    (id ? '/:id' : '') +
    (verb ? '/' + verb : '');

  // set links active
  const rewriteResource = resource || ''
  const activeLinks = document.querySelectorAll(`a[href='/#/${rewriteResource}']`)
  activeLinks.forEach(link => link.classList.add('exact-link'))

  // add header attribute
  const headerItemIndex = headerLinks.find((item, index)=>{
    return item.ref===parsedUrl
  })?.index ?? 'no-index'
  header.setAttribute('data-index', headerItemIndex)

  // mobile-link
  const mobileLink = document.querySelector('.mobile-link a')
  const routeIndex = routes__story_mobile.indexOf(lastStory)
  const mobileIndex = routeIndex===1 ? 0 : 1

  if(mobileLinkEnabled){
    mobileLink.href= '#'+routes__story_mobile[mobileIndex]
    mobileLink.innerHTML=`${routes__story_mobile[mobileIndex]} >`
    mobileLink.classList.remove("invisible")
  }else{
    mobileLink.classList.add("invisible")
  }

  // Render the page from map of supported routes or render 404 page.
  const page = routes[parsedUrl] || Error404;
  content.innerHTML = await page.render();
  await page.after_render();
};


// Listen on hash change.
window.addEventListener('hashchange', router);
window.addEventListener('popstate', router);

// Listen on page load.
window.addEventListener('load', router);
