# Yet Another Scroll-aware Layout

## 1. Install and Run

Install dependencies and start listening on `localhost:3000`.

```bash
npm install
npm run start:dev
```

## 2. Test

```bash
npm test
```

## 2. Pagination

No async pagination as been implemented. For a complete demo using infinite scroll pagination take a look to the [yafv](https://github.com/gagle/yafv) project.

## 3. Error handling

No error handling has been implemented. All errors are logged in the console.

## 4. State management

Redux has not been used to avoid over complicating the project but it could be used to decouple certain components from its source of data. Instead, React.Context replaces this need.

## 5. Async UI customization

The color customization of the menu icon and the underline of the active tab has been done through the Context API. Material UI tabs have been also used with a custom theme. Both themes (Context and Material UI) have been integrated.

There are 2 contexts: `InitApp` and `Theme`. The first one gets the initial data (blocking all the app rendering) and the second encapsulates all the theming functionality. In a real app, the first one would be replaced by Redux.

The init data can be customized from the file `src\app\Init\getInitAppData.js`.
