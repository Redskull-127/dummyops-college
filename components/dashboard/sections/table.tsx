import Image from "next/image"
import { Projects } from "@/db/schema"
import { Badge } from "@/components/ui/badge"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import DeleteProject from "./delete-project"
import EditProjectSection from "./edit-project"
import ContextMenuSection from "./context-menu"

export default function TableSection({ projects }: { projects?: Projects[] }) {
  if (!projects || projects.length === 0)
    return (
      <div>
        <p>No projects found</p>
      </div>
    )

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="hidden md:table-cell">Deployed At</TableHead>
          <TableHead className="hidden md:table-cell">Created at</TableHead>
          <TableHead className="hidden md:table-cell">URL</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow>
            <TableCell className="hidden sm:table-cell">
              <Image
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="64"
                src="/favicon.ico"
                width="64"
              />
            </TableCell>
            <TableCell className="font-medium">{project.name}</TableCell>
            <TableCell>
              <Badge variant="outline">{project.status}</Badge>
            </TableCell>
            <TableCell>Free</TableCell>
            <TableCell className="hidden md:table-cell">
              {project.deployedAt}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {parseDate(project.createdAt)}
            </TableCell>

            <TableCell className="hidden md:table-cell">
              <a
                className="text-blue-600 hover:underline"
                href={"/api/" + project.uniId}
                rel="noreferrer"
                target="_blank"
              >
                {"/api/" + project.uniId}
              </a>
            </TableCell>
            <TableCell>
              <ContextMenuSection {...project} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function parseDate(date: string) {
  return new Date(date).toISOString().split("T")[0]
}
