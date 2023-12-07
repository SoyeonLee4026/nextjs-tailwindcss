/**
 * Render custom `404 Not Found` page when a route is requested that doesn't match
 * with locale associated with it
 *
 */
export default async function NotFound() {
  return (
    <html lang="en">
      <body>
        {/* TODO: Customize error page accoridng to locale */}
        <h1>404</h1>
        <p>Page not found</p>
      </body>
    </html>
  );
}
