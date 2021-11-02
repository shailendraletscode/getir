import {default as app} from './app';

app.listen(process.env.PORT || 8081, () => {
  console.log(`Server is running`);
});
