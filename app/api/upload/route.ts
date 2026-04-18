export async function POST(req: Request) {
  const formData = await req.formData()
  const file: File | null = formData.get("file") as File | null
  const fileType = file?.type

  // check if file is pdf, if not then return error
  if (!fileType?.endsWith("pdf")) {
    return Response.json({ error: "Please upload a PDF file" }, { status: 400 })
  }

  return Response.json({ success: true })
}
