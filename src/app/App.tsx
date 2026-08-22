export function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Przejdź do treści
      </a>
      <main id="main-content" tabIndex={-1} />
    </>
  )
}
