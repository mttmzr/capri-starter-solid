export function ServerContent({ children }) {
  if (!children) {
    throw new Error('TEST: THIS CODE MUST NOT SHOW UP IN THE CLIENT BUNDLE')
  }

  return <div>{children}</div>
}
