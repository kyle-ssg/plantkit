import { getStorybookUI } from "@storybook/react-native";

try {
  require('./storybook.requires')
} catch (e){}
const StorybookUIRoot = getStorybookUI({
  // initialSelection: { kind: 'Radio control', name: 'Basic' },
  shouldPersistSelection: true,
  host:"http://192.168.1.100",
  port:7007
})

export default StorybookUIRoot
