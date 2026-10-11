# My Portfolio

A React site that showcases the projects I built while learning software development in Level 2.

## Components

| Component                            | What it shows                                                              | Where its values come from          | What it remembers                                                    |
| ------------------------------------ | -------------------------------------------------------------------------- | ----------------------------------- | -------------------------------------------------------------------- |
| `Header`                             | My name and a line about me                                                | Typed into the JSX                  | —                                                                    |
| `Hero`                               | My three hero photos and photo controls                                    | `heroPhoto`, which calls `imageUrl` | Which photo is showing, whether it is in color, and the blur setting |
| `Fortune`                            | A random fortune                                                           | A list and `randomNumber`           | Which fortune is showing                                             |
| `Footer`                             | Copyright and the current year                                             | The year the page is opened         | —                                                                    |
| `SignupPagePortfolioCard`            | My Signup Page project with its name, description, and links               | Variables inside the component      | Its likes, saved in local storage                                    |
| `GreetingCardGeneratorPortfolioCard` | My Greeting Card Generator project with its name, description, and links   | Variables inside the component      | Its likes, saved in local storage                                    |
| `ClickLabPortfolioCard`              | My Click Lab project, description, and links, with Show More and Show Less | Variables inside the component      | Its likes, saved in local storage, and whether it shows more details |

## What I've built

* Buttons to switch hero photos and move between them.
* Color, black-and-white, blur, and reset-blur controls.
* A button to show a new random fortune.
* Like and Unlike buttons for project cards.
* Saved like counts that persist after reloading.
* A Show More and Show Less button on the Click Lab card.

## Built with

React, Vite, Bun, and Pico CSS.
