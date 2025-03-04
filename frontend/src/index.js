import { parseRequestUrl } from './utils.js'
import Error404Page from './pages/Error404Page.js'
import HomePage from './pages/HomePage.js'
import ProductPage from './pages/ProductPage.js'
const routes = {
  '/': HomePage,
  '/error': Error404Page,
  '/products/:id': ProductPage,
}
const router = () => {
  const Main = document.querySelector('.main')
  const parseUrl = parseRequestUrl()
  const url =
    (parseUrl.resource ? `/${parseUrl.resource}` : '/') +
    (parseUrl.id ? '/:id' : '') +
    (parseUrl.action ? `/${parseUrl.action}` : '')
  console.log(url)
  const page = routes[url] ? routes[url] : Error404Page
  Main.innerHTML = page.render()
  //console.log(url)
}
window.addEventListener('load', router)
window.addEventListener('hashchange', router)
