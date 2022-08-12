export default function StaticContent({ children }) {
  console.log('Rendering StaticContent. This should only happen during build or in SPA mode.')

  return <div class="box">{children}</div>
}
