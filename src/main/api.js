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
ipcMain.on('getTaskList', async (event, someArgument) => {
  let res = []
  try {
    res = await TVT.listTask()
  } catch (error) {
    console.log('2333', error)
    console.log('4555', error?.ss?.ss || 1)
  }
  console.log(res)

  event.reply('getTaskListReply', res)
})
