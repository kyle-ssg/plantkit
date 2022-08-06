import { by, device, element, waitFor } from 'detox'

const waitById = (id) =>
  waitFor(element(by.id(id)))
    .toBeVisible()
    .withTimeout(30000)
const waitByType = (theType) =>
  waitFor(element(by.type(theType)))
    .toBeVisible()
    .withTimeout(30000)
const platformSelect = (obj) => {
  return device.getPlatform() === 'ios' ? obj.ios : obj.android
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isIOS = device.getPlatform() === 'ios'
const pressById = async (id) => {
  await waitById(id)
  await element(by.id(id)).tap()
}
const pressByType = async (theType) => {
  await waitByType(theType)
  await element(by.type(theType)).tap()
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const goBack = async () => {
  return platformSelect({
    android: await device.pressBack(),
    ios: await pressByType('_UIButtonBarButton'),
  })
}

// describe('It Lives', () => {
//   beforeAll(async () => {
//     await device.terminateApp();
//     await device.launchApp();
//   });
//   it('should have welcome screen', async () => {
//     await waitById('welcome');
//   });
// });

describe('It Navigates', () => {
  beforeAll(async () => {
    await device.terminateApp()
    await device.launchApp()
  })
  it('should navigate to the test screen', async () => {
    await pressById('goTest')
    await waitById('testScreen')
  })
  it('should navigate back', async () => {
    await platformSelect({
      ios: () => pressByType('_UIButtonBarButton'), //iOS class name
      android: () => device.pressBack(),
    })()
    await waitById('welcome')
  })
})
