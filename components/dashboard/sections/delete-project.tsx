"use client"

import {useRouter} from "next/navigation"

import { DeleteProject } from "@/lib/server/db-functions"
import { AlertDialogAction } from "@/components/ui/alert-dialog"

export default function DeleteProjectButton({ uniId }: { uniId: string }) {
  const router = useRouter()

  return (
    <AlertDialogAction
      onClick={async () => {
        try {
          await DeleteProject(uniId)
        } catch (e) {
          console.log(e)
        } finally {
          router.refresh()
        }
      }}
      className="text-red-500"
    >
      Delete
    </AlertDialogAction>
  )
}
