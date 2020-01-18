# Getting Started

Billie to Mars Project.

This project include a front-end application and a very simple backend.

## Environment

At least Node v10 is required. We recommend using a version manager like [nodenv](https://github.com/nodenv/nodenv) or [NVM](https://github.com/creationix/nvm).

If you are using NVM and [ZSH](https://ohmyz.sh/) as a CLI, you can enable automatic switch of the nvm version based on the .nvmrc file in the folder. To do it edit the zshrc file:

```shell
nano ~/.zshrc
```

and adding at the end of the file:

```
autoload -U add-zsh-hook
load-nvmrc() {
  if [[ -f .nvmrc && -r .nvmrc ]]; then
    nvm use
  elif [[ $(nvm version) != $(nvm version default)  ]]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

## Install and run

### Front-end

```shell
npm i && npm start
```

### Back-end

```shell
cd server && npm i && npm start
```

## Run Tests

```shell
# Run tests once
$ npm run test:once

# Watch tests
$npm run test:watch

# Run tests once with coverage
$npm run test:once:coverage
```

## Production build

```shell
$ npm run build:prod
```

## Stage build

```shell
$ npm run build:stage
```

## Development Workflow

- Commit forrmat should follow these [rules](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)
