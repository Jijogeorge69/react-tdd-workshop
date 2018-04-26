# React TDD Workshop

[![Build Status](https://travis-ci.org/yanivefraim/react-tdd-workshop.svg?branch=master)](https://travis-ci.org/yanivefraim/react-tdd-workshop)


WIP - This is the repo for my [React TDD Workshop](https://www.meetup.com/Kyiv-ReactJS-Meetup/events/247392848/?_cookie-check=5Otr21FDGjz27aUV)

Welcome to my React TDD workshop!


## Getting started

```bash
npm i
npm test
```

Watch mode:

Terminal 1:

```bash
npm start
```

Terminal 2:

```bash
npm run test:watch
```

## What is this workshop about?

We will be building the [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game, using React + Jest + Puppeteer, all TDD, (almost) without openning the browser!

The end result will be something like this:

<img width="241" src ="public/tic-tac-toe.png" />

## Workshop

### What we had so far (or: the parts that I'm showing during the workshop)

- [X] Browser test for starting a new game.
- [X] Browser test for displaying 'X' after first user click.
- [X] Browser test for 'X' user winning the game.
- [X] Component test for displaying 'O' after second user click.
- [X] Component test for 'O' user winning the game.
- [X] Refactor winning logic to a separate method + add unit test for it.

### Workshop tasks

- [X] Complete game winning logic: write **_unit tests_** for the different game winning scenarios (all rows, columns/diagonals/tie).
- [X] Write a **_component test_** verifying a user cannot press a non empty cell.
- [X] Write a **_component test_** for a tie (show a "It's a tie!" message).
- [X] Write a **_browser/component_** test for marking next user in a special color (show 'X' and 'O' users and mark next user in special color).
- [ ] Write a **_browser/component_** test for hiding registration form after game starts.
- [ ] Write a **_browser/component_** test for hiding game board before game starts.
- [ ] Bonus: Write a **_browser test_** for user saving / loading existing game state (use local storage for that)
- [ ] Bonus: Write a **_browser test_** for displaying the number of wins next to each user: Win a game. Press a "new game" button, and win the game again. (Use local storage for that as well)

### Interesting resources

- [jest-puppeteer](https://github.com/smooth-code/jest-puppeteer) - (almost) zero configuration preset to run your tests with Jest and [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- [enzyme](https://github.com/airbnb/enzyme)
- [jsdom](https://github.com/jsdom/jsdom)
- [jest](https://github.com/facebook/jest)
- Jest Projects (setup multi environments on the same project. See [here](https://github.com/yanivefraim/react-tdd-workshop/blob/master/package.json#L68) for example
- [Applitools eyes](https://applitools.com/).
- [eyes.it](https://github.com/wix/eyes.it) - eyes for protractor
