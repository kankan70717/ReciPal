import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sub/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sub/"!</div>
}
