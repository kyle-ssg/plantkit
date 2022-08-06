import asStyle from './style-utils/asStyle'
import { styleVariables } from './style_variables'

export const paddingBase = 8 // todo: styleVariables.gutterBase should match this ?

export default asStyle({
  //
  // Grid system / Rows
  // --------------------------------------------------
  flex: {
    flex: 1,
  },
  column: {
    marginLeft: styleVariables.gutterBase,
    marginRight: styleVariables.gutterBase,
  },

  container: {
    marginLeft: styleVariables.marginBaseHorizontal,
    marginRight: styleVariables.marginBaseHorizontal,
  },

  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  noPad: {
    marginLeft: -styleVariables.paddingBase,
    marginRight: -styleVariables.paddingBase,
  },

  justifyStart: {
    justifyContent: 'flex-start',
  },

  justifyEnd: {
    justifyContent: 'flex-end',
  },

  justifyCenter: {
    justifyContent: 'center',
  },

  alignStart: {
    alignItems: 'flex-start',
  },

  alignStretch: {
    alignItems: 'stretch',
  },

  alignSelfStart: {
    alignSelf: 'flex-start',
  },

  alignSelfCenter: {
    alignSelf: 'center',
  },

  alignSelfEnd: {
    alignSelf: 'flex-end',
  },

  alignItemsEnd: {
    alignItems: 'flex-end',
  },

  alignItemsStart: {
    alignItems: 'flex-start',
  },

  alignEnd: {
    alignItems: 'flex-end',
  },

  alignCenter: {
    alignSelf: 'center',
  },

  alignItemsCenter: {
    alignItems: 'center',
  },

  stretchCol: {
    flex: 1,
  },

  stretchCol2: {
    flexDirection: 'column',
    flex: 2,
  },

  stretchCol3: {
    flexDirection: 'column',
    flex: 3,
  },

  baseline: {
    alignItems: 'flex-start',
  },

  directionColumn: {
    flexDirection: 'column',
  },

  centeredRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  row: {
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },

  mb0: { marginBottom: 0 },
  mb5: { marginBottom: paddingBase },
  mb10: { marginBottom: paddingBase * 2 },
  mb15: { marginBottom: paddingBase * 3 },
  mb20: { marginBottom: paddingBase * 4 },
  mb25: { marginBottom: paddingBase * 5 },
  mb30: { marginBottom: paddingBase * 6 },

  ml0: { marginLeft: 0 },
  ml5: { marginLeft: paddingBase },
  ml10: { marginLeft: paddingBase * 2 },
  ml15: { marginLeft: paddingBase * 3 },
  ml20: { marginLeft: paddingBase * 4 },
  ml25: { marginLeft: paddingBase * 5 },
  ml30: { marginLeft: paddingBase * 6 },

  mr0: { marginRight: 0 },
  mr5: { marginRight: paddingBase },
  mr10: { marginRight: paddingBase * 2 },
  mr15: { marginRight: paddingBase * 3 },
  mr20: { marginRight: paddingBase * 4 },
  mr25: { marginRight: paddingBase * 5 },
  mr30: { marginRight: paddingBase * 6 },

  mt0: { marginTop: 0 },
  mt5: { marginTop: paddingBase },
  mt10: { marginTop: paddingBase * 2 },
  mt15: { marginTop: paddingBase * 3 },
  mt20: { marginTop: paddingBase * 4 },
  mt25: { marginTop: paddingBase * 5 },
  mt30: { marginTop: paddingBase * 6 },

  pb0: { paddingBottom: 0 },
  pb5: { paddingBottom: paddingBase },
  pb10: { paddingBottom: paddingBase * 2 },
  pb15: { paddingBottom: paddingBase * 3 },
  pb20: { paddingBottom: paddingBase * 4 },
  pb25: { paddingBottom: paddingBase * 5 },
  pb30: { paddingBottom: paddingBase * 6 },

  pl0: { paddingLeft: 0 },
  pl5: { paddingLeft: paddingBase },
  pl10: { paddingLeft: paddingBase * 2 },
  pl15: { paddingLeft: paddingBase * 3 },
  pl20: { paddingLeft: paddingBase * 4 },
  pl25: { paddingLeft: paddingBase * 5 },
  pl30: { paddingLeft: paddingBase * 6 },

  pr0: { paddingRight: 0 },
  pr5: { paddingRight: paddingBase },
  pr10: { paddingRight: paddingBase * 2 },
  pr15: { paddingRight: paddingBase * 3 },
  pr20: { paddingRight: paddingBase * 4 },
  pr25: { paddingRight: paddingBase * 5 },
  pr30: { paddingRight: paddingBase * 6 },

  pt0: { paddingTop: 0 },
  pt5: { paddingTop: paddingBase },
  pt10: { paddingTop: paddingBase * 2 },
  pt15: { paddingTop: paddingBase * 3 },
  pt20: { paddingTop: paddingBase * 4 },
  pt25: { paddingTop: paddingBase * 5 },
  pt30: { paddingTop: paddingBase * 6 },

  m0: { margin: 0 },
  m5: { margin: paddingBase },
  m10: { margin: paddingBase * 2 },
  m15: { margin: paddingBase * 3 },
  m20: { margin: paddingBase * 4 },

  p0: { padding: 0 },
  p5: { padding: paddingBase },
  p10: { padding: paddingBase * 2 },
  p15: { padding: paddingBase * 3 },
  p20: { padding: paddingBase * 4 },

  ph0: { paddingRight: 0, paddingLeft: 0 },

  ph5: { paddingRight: paddingBase, paddingLeft: paddingBase },
  ph10: { paddingRight: paddingBase * 2, paddingLeft: paddingBase * 2 },
  ph15: { paddingRight: paddingBase * 3, paddingLeft: paddingBase * 3 },
  ph20: { paddingRight: paddingBase * 4, paddingLeft: paddingBase * 4 },
  ph25: { paddingRight: paddingBase * 5, paddingLeft: paddingBase * 5 },
  ph30: { paddingRight: paddingBase * 6, paddingLeft: paddingBase * 6 },

  pv0: { paddingTop: 0, paddingBottom: 0 },
  pv5: { paddingTop: paddingBase, paddingBottom: paddingBase },
  pv10: { paddingTop: paddingBase * 2, paddingBottom: paddingBase * 2 },
  pv15: { paddingTop: paddingBase * 3, paddingBottom: paddingBase * 3 },
  pv20: { paddingTop: paddingBase * 4, paddingBottom: paddingBase * 4 },

  mh0: { marginRight: 0, marginLeft: 0 },
  mh5: { marginRight: paddingBase, marginLeft: paddingBase },
  mh10: { marginRight: paddingBase * 2, marginLeft: paddingBase * 2 },
  mh15: { marginRight: paddingBase * 3, marginLeft: paddingBase * 3 },
  mh20: { marginRight: paddingBase * 4, marginLeft: paddingBase * 4 },

  mv0: { marginTop: 0, marginBottom: 0 },
  mv5: { marginTop: paddingBase, marginBottom: paddingBase },
  mv10: { marginTop: paddingBase * 2, marginBottom: paddingBase * 2 },
  mv15: { marginTop: paddingBase * 3, marginBottom: paddingBase * 3 },
  mv20: { marginTop: paddingBase * 4, marginBottom: paddingBase * 4 },
})
