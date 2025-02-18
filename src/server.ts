import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { validatorCompiler, serializerCompiler } from 'fastify-type-provider-zod';

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, {
  origin: true
});

app.get('/hello', () => {
  return 'hello';
});

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
});