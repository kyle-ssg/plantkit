
## Core Principles: Cross Platform Development - Repository Structure

The project is set up to run mobile applications and web applications in the same codebase.

- /mobile: A React Native app that contains no web code
- /common: Redux and common functionality that contains no web or mobile specific code
- .bin - internal folders bundled together to reduce clutter
    - docs: the docs
    - .husky - git hooks that force linting before commiting
    - .ssgrtk - the source code for the CLI
    - .webpack - any webpack configuration
- .e2e - the e2e tests
- .github - the github actions
- .storybook - storybook config
- .env - on npm preinstall, the relevant project_<$ENV> gets coppied to common/project.js - this allows us to setup environments for web and mobile
- stories - the storybook stories
- other root folders: folders that are for the website

## Core Principles: Cross Platform Development  - Platform based API.ts

The mobile and website have a file called API.ts, this allows web and mobile to implement common functionality with different native libraries that can be called by common.
e.g.

This hook in common can redirect the user to the logged out screen on mobile and web. The loginRedirect in web uses a NextJS router approach, in mobile react-native-navigation.

```shell
import { useUser } from './useUser'
import { useEffect } from 'react'
import { getApi } from '../api'

export default function () {
  const { user } = useUser()
  useEffect(() => {
    if (user) {
      getApi().loginRedirect()
    }
  }, [user])
}
```
