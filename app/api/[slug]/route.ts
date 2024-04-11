import { NextResponse } from "next/server";
import { GetProjectDetails } from "@/lib/server/db-functions";
import FlaskAPI from "@/lib/server/flask";

export async function POST(request: Request, context: any) {
  const { slug } = context.params
  const body = await request.json()
  console.log(body)
  if( slug ) {
    console.log(slug)
    const project = await GetProjectDetails(slug)
    if( project ) {
      const resp = await FlaskAPI(body.message, project.documentation)
      return NextResponse.json({ response: resp })
    }
  }
  return NextResponse.json({ error: "couldn't found model" })
}
