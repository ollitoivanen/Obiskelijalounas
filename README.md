### Opiskelijalounas Åbo

## What this is

This is a website built with gatsby/react, displaying the menus of student restaurants in Turku, Finland. It was built to make it easier to quickly check the menus of three main lunch providers in the city: Unica, Kårkafeerna and Sodexo.

## How it works

This repository uses the gh-pages -branch to host the website and publish it on [https://ollitoivanen.github.io/Obiskelijalounas/](https://ollitoivanen.github.io/Obiskelijalounas/). The source code can be found on the main-branch.

This repository works together with another repository, [OpiskelijalounasWebFetchAction](https://github.com/ollitoivanen/OpiskelijalounasWebFetchAction). The mentioned repository contains a github action that runs every hour fetching menu data from the lunch providers' websites. It then manipulates it to the correct format and pushes it to the [all_restaurants_menu.json](https://github.com/ollitoivanen/OpiskelijalounasWebFetchAction/blob/main/all_restaurants_menu.json) -file.

When a user visits the website, a fetch request is made to this JSON file, and the website is populated with up-to-date menus.
