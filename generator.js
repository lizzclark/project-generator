#!/usr/bin/env node

const fs = require("fs");

const newProjectName = "new-project";

fs.mkdir(`${newProjectName}`, null, err => {
  if (err) console.log(`oops, couldnt make a folder called ${newProjectName}`);
  else {
    console.log(`creating index.js ...`);
    fs.writeFile(`${newProjectName}/index.js`, "// your code here", err => {
      if (err) console.log(`oops, couldnt create index.js`);
      else {
        console.log(`creating gitignore ...`);
        fs.writeFile(`${newProjectName}/.gitignore`, "node_modules", err => {
          if (err) console.log(`oops, couldnt create a gitignore`);
          else {
            console.log(`creating readme ...`);
            fs.writeFile(
              `${newProjectName}/README.md`,
              "This is your README file!",
              err => {
                if (err) console.log(`oops, couldnt create a readme`);
                else {
                  console.log(`creating eslint config file`);
                  fs.writeFile(
                    `${newProjectName}/.eslintrc`,
                    `{
                        "parserOptions": {
                          "ecmaVersion": 6,
                          "sourceType": "module",
                          "ecmaFeatures": {
                            "jsx": true
                          }
                        },
                        "env": {
                          "node": true,
                          "mocha": true,
                          "browser": true,
                          "es6": true
                        },
                        "extends": ["eslint:recommended"],
                        "plugins": [
                        ],
                        "rules": {
                          "no-console": 0,
                          "space-before-blocks": 1,
                          "arrow-spacing": 1,
                          "keyword-spacing": 1,
                          "space-infix-ops": 1,
                          "space-in-parens": 1,
                          "spaced-comment": 1,
                          "semi": 1,
                          "no-multiple-empty-lines": 1
                        }
                      }
                      `,
                    err => {
                      if (err)
                        console.log(
                          `oops, couldnt create an eslint config file`
                        );
                      else {
                        console.log(`creating spec directory`);
                        fs.mkdir(`${newProjectName}/spec`, err => {
                          if (err)
                            console.log(`oops, couldnt create spec directory`);
                          else {
                            console.log(`creating index.spec.js`);
                            fs.writeFile(
                              `${newProjectName}/spec/index.spec.js`,
                              "// put your tests here",
                              err => {
                                if (err)
                                  console.log(
                                    `oops, couldnt create ${newProjectName}/spec/index.spec.js`
                                  );
                                else {
                                  console.log(
                                    `created index.spec.js - woohoo! your new project is all set up!`
                                  );
                                }
                              }
                            );
                          }
                        });
                      }
                    }
                  );
                }
              }
            );
          }
        });
      }
    });
  }
});
