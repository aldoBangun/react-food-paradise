const generateFileURL = (file, setter) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = () => {
    setter(reader.result)
  }
}

export default generateFileURL
