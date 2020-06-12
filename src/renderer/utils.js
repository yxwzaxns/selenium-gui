// const { Notification } = require('electron')
export const sendNotice = (m) => {
  return new Notification('标题', {
    body: m
  })
}
