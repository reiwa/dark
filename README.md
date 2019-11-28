# @reiwa/dark

## Installation

```
$ yarn add @reiwa/dark
```

## Usage

```ts
import React, { FunctionComponent } from 'react'
import { useDarkMode } from '@reiwa/dark'

const App: FunctionComponent = () => {
  const darkMode = useDarkMode()

  return <p>{darkMode ? 'Dark Mode' : 'Light Mode'}</p>
}
```
