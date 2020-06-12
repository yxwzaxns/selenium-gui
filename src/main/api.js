import { ipcMain } from 'electron'
const TVT = require('tvt')
const si = require('systeminformation')

ipcMain.on('getSysInfo', async (event, someArgument) => {
  const sys = {}
  sys.cpu = await si.cpu()
  sys.mem = await si.mem()
  sys.storage = await si.fsSize()
  event.reply('getSysInfoReply', sys)
})

ipcMain.handle('getTaskList', async (event, args) => {
  let res = null
  try {
    res = await TVT.listTask()
  } catch (error) {
    console.log('2333', error)
  }
  console.log(res)
  return res
})

ipcMain.handle('getBaseSettings', async () => {
  let res = null
  console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(TVT)))

  res = await TVT.getConfig()
  return res
})
