import { Component } from 'react'
import { StyleSheet } from 'react-native'
import ScreenContainer from 'components/ScreenContainer'
import Button from 'components/base/forms/Button'

interface State {
  hasError: boolean
}

const Fallback = ({ onPress }) => {
  return (
    <ScreenContainer withoutSafeAreaView style={styles.container}>
      <Button onPress={onPress}>Retry</Button>
    </ScreenContainer>
  )
}

class ScreenErrorBoundary extends Component<{}, State> {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidCatch(error, errorInfo) {
    if (!__DEV__) {
      // Sentry.captureMessage(error, Severity.Critical)
    }
  }

  render() {
    if (this.state.hasError) {
      return <Fallback onPress={() => this.setState({ hasError: false })} />
    }

    return this.props.children
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export { ScreenErrorBoundary }
