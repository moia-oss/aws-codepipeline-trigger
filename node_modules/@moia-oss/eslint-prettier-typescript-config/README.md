# eslint-prettier-typescript-config

Shared MOIA TypeScript, eslint and prettier configuration

## Usage

1. Install

   ```sh
   yarn add -D typescript eslint prettier
   yarn add -D @moia-oss/eslint-prettier-typescript-config

   # in some cases, you may need to install these packages directly:
   yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
   ```

2. Link configurations

   (customise paths as needed)

   - `tsconfig.json`

     ```jsonc
     {
       "extends": "@moia-oss/eslint-prettier-typescript-config",
       "compilerOptions": {
         "outDir": "./build",
         "rootDir": "./src"
       },
       "include": ["./src"]
     }
     ```

   - `.eslintrc` (remove `react` and `strict` if not required. more info further down in this README).

     ```jsonc
     {
       "extends": [
         "./node_modules/@moia-oss/eslint-prettier-typescript-config/config/eslint",
         "./node_modules/@moia-oss/eslint-prettier-typescript-config/config/eslint-react",
         "./node_modules/@moia-oss/eslint-prettier-typescript-config/config/eslint-strict"
       ],
       // Only add if you have a CDK directory, customise path as needed
       "overrides": [
         {
           "files": ["cdk/**/*"],
           "extends": ["./node_modules/@moia-oss/eslint-prettier-typescript-config/config/eslint-cdk"]
         }
       ]
     }
     ```

   - `.prettierrc`

     ```jsonc
     "@moia-oss/eslint-prettier-typescript-config/config/prettier"
     ```

3. Add scripts to `package.json`

   (customise paths as needed)

   ```jsonc
   {
     "scripts": {
       "build": "tsc",
       "lint": "eslint ./src/",
       "format": "prettier . --write",
       "format:check": "prettier . --check"
     }
   }
   ```

4. Done! Don't forget to run `build`, `lint` and `format:check` in your CI workflow.

## Strict eslint mode

The strict config enables a few more things that not every team may want:

- **Arrow (expression) function style preferred:**

  ```ts
  // Not allowed

  function foo() {
    return 1;
  }

  // Allowed

  const foo = () => {
    return 1;
  };
  ```

- **Type assertions not allowed:**

  Due to the design goal of type erasure (no runtime overhead), type assertions are not ever checked.

  When you assert a type, it may look suspiciously like type casting in a language such as Kotlin, but it isn't the same thing. TypeScript just "trusts" you and doesn't check the type.

  At runtime, you wouldn't get a cast error if the type is not the same, but only see a problem if you try to access or use a value that doesn't match the expected type.

  Use parsing libraries such as [zod](https://github.com/colinhacks/zod/tree/v3).

  ```ts
  // Error:

  type Foo = {
    x: 1;
  };
  // no error thrown, silently continues
  const foo = JSON.parse('{"y":1}') as Foo;

  // evauluates silently to NaN:
  foo.x + 1;

  // this also silently continues:
  const bar = JSON.parse('{"xyz":1}') as { x: { y: number } };

  // you won't see a problem in runtime until somewhere
  // else in the code, making it hard to trace:

  // throws `Uncaught TypeError: Cannot read property 'y' of undefined`
  console.log(bar.x.y);
  ```

  ```ts
  // OK:

  import * as z from 'zod';

  const FooSchema = z.object({
    x: z.number(),
  });

  type Foo = z.infer<typeof FooSchema>;

  // parses successfully
  const foo = FooSchema.parse(JSON.parse('{"x":1}'));

  // throws an error detailing why the JSON doesn't match
  const bar = FooSchema.parse(JSON.parse('{"y":1}'));
  ```

## Optional Additions

- VSCode lint/format settings in `.vscode/settings.json`

  ```jsonc
  {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }
  ```

- VSCode extension recommendations in `.vscode/extensions.json`

  ```jsonc
  { "recommendations": ["esbenp.prettier-vscode", "dbaeumer.vscode-eslint"] }
  ```

- `.editorconfig`

  ```ini
  [*]
  end_of_line = lf
  insert_final_newline = true
  charset = utf-8
  indent_style = space
  indent_size = 2
  ```

## Config Development

> This relates to the development of _this package_. Ignore this section as a consumer.

This package uses its own exported config to build, lint and format itself. This also makes sure that the configs are valid, as the steps are run during the GitHub Actions build step.

Because of this, you _must_ run `yarn build` before linting or formatting during development

## Release

In order to get a new version released based on the latest commits first you can get the git log by running the following command, the version tag you can verify it on [tags](https://github.com/moia-oss/eslint-prettier-typescript-config/tags)
`git log --oneline VERSION_TAG..HEAD | tail -r`

copy the printed log and go to the [new release](https://github.com/moia-oss/eslint-prettier-typescript-config/releases/new)

- Add a new title to the next release
- Paste the previously copied log
- Click on release

After this a github action will be triggered and the new version will be published.
