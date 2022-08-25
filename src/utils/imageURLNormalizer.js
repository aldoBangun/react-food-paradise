export default function imageURLNormalizer(url) {
  const dummyImage = 'https://picsum.photos/600/400'

  if(!url) return dummyImage

  const pathArray = url.split('/')
  const filename = pathArray[pathArray.length - 1]

  if (filename === 'undefined') return dummyImage
  return url
}