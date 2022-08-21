import { FC } from 'react'
import {
  SharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import {
  easingConfigSlideLong,
  immediateConfig,
} from 'project/animation-util/reanimations'
import Card from 'components/Card'
import { Keyboard, KeyboardAvoidingView } from 'react-native'
import { paddingBase } from '../style/style_grid'
import Button from 'components/base/forms/Button'

import * as yup from 'yup'
import { useFormik } from 'formik'
import { useDeviceTokenActions } from 'common/hooks/useDeviceToken'

type OnboardingWallType = {
  animatedValue: SharedValue<number>
}

const schema = yup.object().shape({
  apiKey: yup.string().required('API Key is Required'),
})

const OnboardingWall: FC<OnboardingWallType> = ({ animatedValue }) => {
  const { setDeviceToken } = useDeviceTokenActions()
  const { setTouched, setFieldValue, handleSubmit, touched, errors, values } =
    useFormik({
      validateOnMount: true,
      initialValues: {
        apiKey: '',
      },
      validationSchema: schema,
      onSubmit: () => {
        setDeviceToken({ id: values.apiKey })
      },
    })

  const changeHandler = (name: string, value: any) => {
    setFieldValue(name, value)
  }
  const onSubmit = () => {
    const newTouched = {}
    Keyboard.dismiss()
    Object.keys(errors).map((v) => {
      // @ts-ignore
      newTouched[v] = true
    })
    setTouched(newTouched)
    handleSubmit()
  }

  const style = useAnimatedStyle(() => {
    const delay = 0
    const delayMultiple = (delay + 3) * (animatedValue.value ? 50 : 0)
    const translateY = withDelay(
      delayMultiple,
      withTiming(
        animatedValue.value ? 0 : 10,
        animatedValue.value ? easingConfigSlideLong : immediateConfig,
      ),
    )

    const opacity = withDelay(
      delayMultiple,
      withTiming(
        animatedValue.value ? 1 : 0,
        animatedValue.value ? easingConfigSlideLong : immediateConfig,
      ),
    )

    return {
      transform: [{ translateY }],
      opacity,
    }
  }, [])
  return (
    <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
      <ScrollView
        keyboardShouldPersistTaps='handled'
        bounces={false}
        style={{ flex: 1 }}
        contentContainerStyle={[
          Styles.container,
          { flex: 1 },
          Styles.centeredContainer,
        ]}
      >
        <Card style={style}>
          <Row style={Styles.alignEnd}>
            <View style={styles.inputContainer}>
              <TextInput
                invalid={!!touched.apiKey && !!errors.apiKey}
                value={values.apiKey}
                onChangeText={(v) => changeHandler('apiKey', v.toLowerCase())}
                onBlur={() => setTouched({ apiKey: true })}
                title='Set Up Your Garden'
                autoCorrect={false}
                onSubmitEditing={onSubmit}
                placeholder='Growkit API Key'
              />
            </View>
            <Button onPress={onSubmit} style={Styles.ph20} theme='secondary'>
              Save
            </Button>
          </Row>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    marginRight: paddingBase * 2,
  },
})
export default OnboardingWall
