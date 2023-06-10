# Tracket

The project is about tracking your progress with customers, supply, personal and more

## Developing

Once you've cloned the project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

To connect to a database create the .env file base on the .env.example file, and set the `DATABASE_URL` variable

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Running tests

To run UI tests:

```bash
npm run test:ui
```

To run unit tests:

```bash
npm run test:unit
```
