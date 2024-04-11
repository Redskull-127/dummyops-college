export default async function FlaskAPI(message: string, documentation: string){
  const req = await fetch(process.env.FLASK_API_URL as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message,
      documentation: documentation
     })
  })
  return await req.json()
}
