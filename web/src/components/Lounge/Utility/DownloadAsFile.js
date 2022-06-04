// const exportToJson = e => {
//   e.preventDefault()
//   downloadFile({
//     data: JSON.stringify(usersData.users),
//     fileName: 'users.json',
//     fileType: 'text/json',
//   })
// }

const downloadAsFile = ({ data, fileName, fileType }) => {
  const blob = new Blob([data], { type: fileType })
  const a = document.createElement('a')
  a.download = fileName
  a.href = window.URL.createObjectURL(blob)
  const clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  })
  a.dispatchEvent(clickEvt)
  a.remove()
}

export default downloadAsFile
