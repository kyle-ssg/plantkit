import { by, device, element, waitFor } from 'detox'
import fetch from 'node-fetch'
import { Project } from 'common/project'
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { getText } from 'detox-getprops'

export const waitForElementVisible = async (id) => {
  try {
    expect(element(by.id(id))).toBeVisible()
  } catch (e) {
    waitFor(element(by.id(id)))
      .toBeVisible()
      .withTimeout(30000)
  }
}
export const waitByType = (theType) =>
  waitFor(element(by.type(theType)))
    .toBeVisible()
    .withTimeout(30000)

const platformSelect = (obj) => {
  return device.getPlatform() === 'ios' ? obj.ios : obj.android
}
export const isIOS = device.getPlatform() === 'ios'

export const waitAndPress = async (id) => {
  await waitForElementVisible(id)
  await element(by.id(id)).tap()
}
export const scrollWaitAndPress = async (id, scrollId, direction = 'down') => {
  try {
    await waitFor(element(by.id(id)))
      .toBeVisible()
      .whileElement(by.id(scrollId))
      .scroll(200, direction)
    await element(by.id(scrollId)).scroll(50, direction)
  } catch (e) {
    console.log(e)
  }
  await element(by.id(id)).tap()
}
export const scrollWaitElementVisible = async (
  id,
  scrollId,
  direction = 'down',
) => {
  try {
    await waitFor(element(by.id(id)))
      .toBeVisible()
      .whileElement(by.id(scrollId))
      .scroll(200, 'down')
    await element(by.id(scrollId)).scroll(50, direction)
  } catch (e) {
    console.log(e)
  }
}
export const scrollWaitAndSet = async (id, scrollId, v, direction = 'down') => {
  await waitFor(element(by.id(id)))
    .toBeVisible()
    .whileElement(by.id(scrollId))
    .scroll(200, direction)
  await waitAndSet(id, v)
}

export const pause = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

export const waitAndSet = async (id, value) => {
  try {
    await element(by.id(id)).clearText()
  } catch (e) {
    await waitForElementVisible(id)
    await element(by.id(id)).clearText()
  }
  await element(by.id(id)).typeText(value)
}

export const mockResponse = async (data, url, namespace) => {
  await fetch(
    `http://localhost:5000?mock=1&url=${url}&baseUrl=${Project.api}&namespace=${
      namespace || 'default'
    }`,
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  )
}

export const mockError = async (data, url, namespace) => {
  await fetch(
    `http://localhost:5000?error=1&url=${url}&baseUrl=${
      Project.api
    }&namespace=${namespace || 'default'}`,
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  )
}

export const assertText = async (id, eq) => {
  await waitForElementVisible(id)
  let str = await getText(element(by.id(id)))
  expect(str).toEqual(eq)
}

export const assertLabel = async (id, eq) => {
  await waitForElementVisible(id)
  await expect(element(by.id(id))).toHaveLabel(eq)
}

export const logout = async () => {
  await waitAndPress('jsLogout')
  await waitForElementVisible('HomeScreen')
}

const pressByType = async (theType) => {
  await waitByType(theType)
  await element(by.type(theType)).tap()
}

export const goBack = async () => {
  return platformSelect({
    android: await device.pressBack(),
    ios: await pressByType('_UIButtonBarButton'),
  })
}
