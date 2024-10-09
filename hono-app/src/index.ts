import { Hono } from 'hono'

const app = new Hono()

app.use(async(c,next)=>{
  const path=c.req.url;
  const method=c.req.method;
  const timeStamp=new Date();
  const authtoken=c.req.header("Authorization");
  console.log(`${timeStamp} method:${method} path: ${path} auth:${authtoken}`);
  await next();
})

app.get('/', async(c) => {
  console.log(typeof c);
  return c.json({
    message: 'Hello, World!',
  })
})


app.post('/', async(c) => {

  
  const body=await c.req.json();

  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("vinod"))
  return c.json({
    message: 'Hello, World!',
    body:body
  })
})

export default app
