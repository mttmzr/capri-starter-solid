import { createResource } from 'solid-js'

function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve('loaded!'), 500)
  )
}

export function AsyncData() {
  const [data] = createResource(fetchData)

  return <span> {data}</span>
}
