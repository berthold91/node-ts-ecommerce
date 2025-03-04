export const parseRequestUrl = () => {
  const parseUrl = document.location.hash.toLowerCase()
  const url = parseUrl.split('/')
  return {
    resource: url[1],
    id: url[2],
    action: url[3],
  }
}
