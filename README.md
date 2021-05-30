# MERCADO LIBRE CHALLENGE

This small repository has use to store the front end test for MERCADO LIBRE

##  :floppy_disk: Technical requirements

**prerequisites**

1. [Nodejs](https://nodejs.dev/)
2. [npm](https://www.npmjs.com/) | [yarn](https://yarnpkg.com/)
3. [NextJs](https://nextjs.org/)

**Frameword NextJs**

Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

In this setup Nextjs has tow additional configurations:

1. Sass to handle all styles
2. Ts  as superset

##  :rocket: How to use it (Build)?

To install and use the project you can run the following command: 
```
yarn && npm run dev
```

## Unit Test
```
npm run test
```

## Notes

This and example of the integration and api from Mercado Libre with a NextJs ecosystem. We handle all the api calls for the own backend that NextJS give us this backend has si own nodejs ecosystem.

## Api considerations:

**Valid Endpoints:**
  **Default hostname** localhost:3000

  **Search Request get Products**
    GET {hostname}/api/search?q=adidas&limit=1

  **Get product Information**
    GET {hostname}/api/items/MLA878809844

## Front Preview
<img width="629" alt="ml_1" src="https://user-images.githubusercontent.com/42686771/120083969-141af000-c092-11eb-84fa-3a6a41ead72c.png">

## Api Request Preview
<img width="732" alt="ml_api" src="https://user-images.githubusercontent.com/42686771/120084001-60fec680-c092-11eb-8388-40bf4229bfeb.png">
