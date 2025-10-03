import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/setting')({
  component: Setting,
})

function Setting() {
  return <div>Hello "/setting"!</div>
}
