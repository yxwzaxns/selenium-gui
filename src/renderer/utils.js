// const { Notification } = require('electron')
export const SendNotice = (m) => {
  const createNotice = () => {
    const notice = new Notification(m?.title || 'AOI 通知', m)
    if (m?.showTime) {
      require('uni-utils').sleep(m.showTime).then(e => {
        notice.close()
      })
    }
  }
  if (!('Notification' in window)) {
    alert(m)
  } else if (Notification.permission === 'granted') {
    // If it's okay let's create a notification
    createNotice()
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === 'granted') {
        createNotice()
      }
    })
  }
}
