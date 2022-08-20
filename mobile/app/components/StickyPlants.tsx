import { FC } from 'react'
import { useTab } from 'common/hooks/useTab'
import Fade from 'components/base/animation/Fade'
import PlantData from 'components/PlantData' // we need this to make JSX compile

type StickyPlantsType = {}

const StickyPlants: FC<StickyPlantsType> = ({}) => {
  const { tab } = useTab()
  const show = tab !== 1
  return (
    <Fade style={styles.container} value={show ? 1 : 0}>
      <PlantData size='mini' />
    </Fade>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
})
export default StickyPlants
