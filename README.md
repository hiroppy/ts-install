# ts-install

ts-install helps with installing a library and types(@types) for typescript application.

## Install

```sh
$ npm i ts-install -g
```

## Usage

```sh
$ ts-install install express
$ ti i express

$ cat package.json
{
  "dependencies": {
    "express": "^4.16.3",
    "react": "^16.4.1"
  },
  "devDependencies": {
    "@types/express": "^4.16.0",
    "@types/react": "^16.3.17"
  },
  ...
}
```
