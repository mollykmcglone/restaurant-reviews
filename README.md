# _GitHub_

#### _Epicodus: Restaurant Reviews_

#### By _**Molly Mcglone & Noah Yasskin**_

## Description: Restaurant Reviews

Restaurant Reviews
An app where a user can create a description of a restaurant and other users can rate it by submitting a form.

The restaurant includes:

* Name
* Specialty (italian, mexican, etc.)
* Address
* An estimate of how expensive it is (this could be from one to five dollar signs, or just a string such as "cheap", "moderate", "expensive".
* When a user rates it, they should enter a value from 1 to 5 stars and the amount of time that they had to wait for their food.


* User Stories
* As a user, I want to see a list of all the available restaurant names.
* When I click on a restaurant I want to see the other details about it.
* I would like to see only the restaurants of a particular specialty.
* As a user, I want to be able to edit a restaurant record.
* As a user, I want to see the average wait time for each restaurant and the average rating.

Component | Action | Parent
:------------- | :-------------: | :------------- |
*AppComponent*: Hold data. | --
*ReviewListComponent*: Display Restaurant Reviews and Filter Reviews. | AppComponent
*ReviewComponent*: Display a single Restaurant with its name, specialty, address, price, [wait time, rating] | ReviewListComponent
*EditReviewComponent*: Allow user to modify Rrstaurant properties. | ReviewListComponent
*NewReviewComponent*: Allow user to add a restaurant. | ReviewListComponent
*RatingReviewComponent*: Allow user to rate a restaurant from 1 to 5 stars and enter the amount of time they had to wait. | ReviewListComponent

_This is an Epicodus [http://www.epicodus.com/] student  project_

Requirement & Objectives | Complete
:------------- | :-------------: |
*Requirement*: Tk. | X
*Objective*: Tk. | X

## Setup/Installation Requirements

* _Clone the repository from GitHub_
https://github.com/ [insert URL here] .git

1. Install globals if needed (gulp, bower, sass, typescript, typescript packages.)
4. gem install sass
5. npm install typescript -g
6. apm install atom-typescript
7. gulp build
8. gulp serve

1. Gather the back-end packages the program requires
```
$ npm install <!-- saved into node_modules/ -->
```
2. Gather the front-end packages the program requires
```
$ bower install <!-- saved into bower_components/ -->
```

## Known Bugs

* _None so far_

## Support and contact details

* _View the repository on GitHub at:_
https://github.com/yasskin/github-user

_If you run into any issues or have questions, ideas, or concerns, please feel free to contact Noah:_

* _Noah Yasskin: <a href="mailto:noahyasskin@gmail.com">noahyasskin@gmail.com</a>_

## Technologies Used

* _HTML & CSS_
* _SASS_
* _JavaScript_
* _Node.js_
* _Gulp_
* _Bower_
* _GitHub API_

### License

*MIT License*

Copyright (c) 2016 **_Noah Yasskin_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
