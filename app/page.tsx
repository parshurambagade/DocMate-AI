"use client"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function Page() {
  const [chatId, setChatId] = useState<string | null>(null)

  useEffect(() => {
    if (!chatId) {
      const newChatId = uuidv4()
      localStorage.setItem("chatId", newChatId)
      setTimeout(() => {
        setChatId(newChatId)
      }, 0)
    }
  }, [])

  console.log(chatId)
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>{chatId}</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
