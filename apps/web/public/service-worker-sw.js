// @ts-nocheck
// eslint-disable-next-line no-restricted-globals
self.addEventListener('push', function onPush(event) {
  if (!event.data) return
  const data = event.data.json()

  event.waitUntil(
    // eslint-disable-next-line no-restricted-globals
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'https://iguanadex.com/logo.png',
      image: 'https://iguanadex.com/logo.png',
    }),
  )
})
