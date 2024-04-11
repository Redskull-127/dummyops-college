"use client";
// @ts-ignore
import pdfToText from 'react-pdftotext'

function extractText(event: any) {
  const file = event.target.files[0]
  pdfToText(file)
      .then((text: any) => console.log(text))
      .catch((error: any) => console.error("Failed to extract text from pdf"))
}

export default function ParsePDF(event: any) {
  return extractText(event)
}
