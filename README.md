# @reiwa/dark

[![npm version](https://badge.fury.io/js/%40reiwa%2Fdark.svg)](https://badge.fury.io/js/%40reiwa%2Fdark)

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

## Publish

```
$ npm version patch
$ npm publish
```
