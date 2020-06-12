const { ipcRenderer } = require('electron')

export const getSysInfo = () => {
  return new Promise((resolve, reject) => {
    ipcRenderer.on('getSysInfoReply', (e, a) => {
      resolve(a)
    })
    ipcRenderer.send('getSysInfo')
  })
}
export const getBaseSettings = async () => {
  return ipcRenderer.invoke('getBaseSettings')
}

export const getTaskList = () => {
  return new Promise((resolve, reject) => {
    ipcRenderer.on('getTaskListReply', (e, a) => {
      resolve(a)
    })
    ipcRenderer.send('getTaskList')
  })
}
