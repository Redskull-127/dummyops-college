import { useState } from "react"
import { Projects } from "@/db/schema"
import { MoreHorizontal } from "lucide-react"

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import AddProject from "./add-project"
import DeleteProjectButton from "./delete-project"
import EditProject from "./edit-project"

export default function ContextMenuSection(project: Projects) {
  const [shouldDelete, setShouldDelete] = useState(false)
  const [shouldEdit, setShouldEdit] = useState(false)
  const [nameUpdate, setNameUpdate] = useState(project.name)
  const [documentationUpdate, setDocumentationUpdate] = useState(project.documentation)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button aria-haspopup="true" size="icon" variant="ghost">
            <MoreHorizontal className="size-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setShouldEdit(!shouldEdit)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setShouldDelete(!shouldDelete)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Delete Alert */}
      <AlertDialog open={shouldDelete}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShouldDelete(!shouldDelete)}>
              Cancel
            </AlertDialogCancel>
            <DeleteProjectButton uniId={project.uniId} />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Edit Dialog */}
      <Dialog open={shouldEdit} onOpenChange={() => {
        if(shouldEdit) setShouldEdit(!shouldEdit)
      }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
            <DialogDescription>
              Let&apos;s edit {project.name}.
            </DialogDescription>
            <div className="flex flex-col gap-3 pt-10">
              <form action={EditProject} className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="project-name-input">
                    1. Change Project Name:
                  </Label>
                  <Input
                    required
                    type="search"
                    placeholder="eg. dummyops-latest"
                    id="project-name-input"
                    name="project-name-input"
                    onChange={(e) => {
                      setNameUpdate(e.target.value)
                    }}
                    value={nameUpdate}
                    className="w-full rounded-lg bg-background md:w-[200px] lg:w-[320px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="project-file-input">
                    2. Upload New documentation:
                  </Label>
                  <Textarea
                    required
                    id="project-file-input"
                    name="project-file-input"
                    onChange={(e) => {
                      setDocumentationUpdate(e.target.value)
                    }}
                    value={documentationUpdate}
                    className="w-full rounded-lg bg-background md:w-[200px] lg:w-[320px]"
                  />
                </div>

                <div className="flex justify-between">
                  <Input
                    type="hidden"
                    name="project-uniId-input"
                    value={project.uniId}
                  />
                  <Button type="submit" size="sm" className="ml-auto w-[100px]">
                    Update
                  </Button>
                </div>
              </form>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
