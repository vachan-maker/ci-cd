import express from 'express';

const app = express();

app.get('/', (_request, response) => {
  const version = process.env.APP_VERSION ?? 'development';

  response.type('html').send(`
    <h1>CI/CD Lab</h1>
    <p>The application is running.</p>
    <p>Version ${version}</p>
  `);
});

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
  });
});


app.get('/hello',(_request,response)=>{
  response.json({
    message:'Hello i am from the future',
  });
});
export default app;
