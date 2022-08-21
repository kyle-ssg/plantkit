import { FC } from 'react' // we need this to make JSX compile
import * as React from 'react'
import Svg, { Path, G } from 'react-native-svg'
import { useTab } from 'common/hooks/useTab'

type LogoType = {}

const Logo: FC<LogoType> = (props) => {
  const { tab } = useTab()
  console.log(tab)
  return (
    <View
      style={{
        width: 34,
        height: 34,
        backgroundColor: 'rgba(255,255,255,.25)',
        borderRadius: 17,
      }}
    >
      {!tab ? (
        <Svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 487.379 487.379'
          style={{
            enableBackground: 'new 0 0 487.379 487.379',
          }}
          xmlSpace='preserve'
          {...props}
          width={34}
          height={34}
        >
          <Path
            fill={palette.primaryCooking}
            d='M393.722 438.868 371.37 271.219h.622c6.564 0 11.885-5.321 11.885-11.885V17.668c0-4.176-2.183-8.03-5.751-10.18a11.873 11.873 0 0 0-11.679-.335c-46.345 24.454-75.357 72.536-75.357 124.952v101.898c0 20.551 16.665 37.215 37.218 37.215h2.818l-22.352 167.649a42.91 42.91 0 0 0 10.228 33.886 42.897 42.897 0 0 0 32.246 14.625 42.898 42.898 0 0 0 32.246-14.625 42.906 42.906 0 0 0 10.228-33.885zM207.482 0c-9.017 0-16.314 7.297-16.314 16.313v91.128h-16.314V16.313C174.854 7.297 167.557 0 158.54 0s-16.313 7.297-16.313 16.313v91.128h-16.314V16.313C125.912 7.297 118.615 0 109.599 0c-9.018 0-16.314 7.297-16.314 16.313v147.24c0 24.2 19.611 43.811 43.811 43.811h3.616L115 438.74a43.865 43.865 0 0 0 10.896 34.047 43.82 43.82 0 0 0 32.645 14.592 43.822 43.822 0 0 0 32.645-14.592 43.858 43.858 0 0 0 10.896-34.047l-25.713-231.375h3.617c24.199 0 43.811-19.611 43.811-43.811V16.313C223.796 7.297 216.499 0 207.482 0z'
          />
        </Svg>
      ) : (
        <Svg
          pointerEvents='none'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 64 64'
          {...props}
          width={34}
          height={34}
        >
          <G fill={palette.primary}>
            <Path d='M48.5 38.4c-8 0-10.1-6.6-10.1-6.6s2.1-8.3 10.1-8.3C54 23.5 63 31 63 31s-9 7.4-14.5 7.4zM18 6.7c6.3 6.4 2.6 13.6 2.6 13.6s-7.7 4.4-14-2C2.3 13.9 1 1 1 1s12.7 1.3 17 5.7z' />
          </G>
          <G fill={palette.primary}>
            <Path d='M63 31c-5-1-10.1-1.6-15.1-1-4.9.5-9.9 2.3-13.2 5.7-1.7 1.7-2.9 3.7-3.5 5.9-.1.5-.2 1.1-.3 1.6-.1.6 0 1 0 1.7l.2 3.8.7 15.3h-5l.8-15.3.2-3.8c0-.6.1-1.4.2-2.1.1-.7.3-1.4.5-2.1.9-2.7 2.6-5 4.7-6.7 2.1-1.8 4.5-3 7-3.9 2.5-.8 5.1-1.2 7.7-1.3 5.1-.2 10.2.8 15.1 2.2' />
            <Path d='M1 1c5.2 3.2 10 7.2 14.2 11.7 4.2 4.5 8 9.4 11.1 14.8 1.5 2.7 3 5.5 3.9 8.7.2.8.4 1.6.5 2.5l.1 2.4.2 4.6.8 18.3h-5l.8-18.4.2-4.6.1-1.1v-1.1c0-.6-.1-1.3-.3-2-.6-2.8-1.8-5.6-3.2-8.3-2.7-5.4-6.2-10.4-10.1-15.1C10.5 8.7 6.1 4.5 1 1' />
          </G>
        </Svg>
      )}
    </View>
  )
}

export default Logo
