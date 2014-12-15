## The App

The purpose of this app is to organize and publicly display items of interest on the web. The initial intended use is for my personal website and have something like interests.mysite.com or mysite.com/interests. Here are some of the things I'd like to use it for...

* Media - books, films, videos, posts, tweets, audio tracks
* Products
* Companies
* Initiatives (e.g., philanthropic, educational, policy, etc.)
 
I'd like to explore using tags for organization/grouping to make them more useful to myself and others. Some obvious tags might include: tutorials, coding, fiction, education, politics, industry, etc.

For company items I'd like to layer in other data over time. For instance, when I first became interested in a company, and whether I would have invested if I was able. This would make it possible to demonstrate a track record of sorts via a fantasy investment portfolio.

## The Stack

**Front-end** - Ember.js using ember-cli in particular along with Bootstrap 3.

**Back-end** - Firebase will be the data store. Since resources and data-structure can be modeled in Ember, having to write a server-side app can be avoided entirely for a use-case like this one. I'd also consider using Google Spreadsheets or my Evernote account as the backend. 

**Hosting** - Heroku for deploying the Ember app. Put it directly on S3 is also an option.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)
* Create a new app at [firebase.io](http://firebase.io) which will provide the backend data store

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`
* Rename or duplicate then rename `.env.example` to `.env` and update with your firebase app name created above

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

