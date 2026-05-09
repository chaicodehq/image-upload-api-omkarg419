/**
 * TODO: Handle 404 errors
 *
 * Return 404 with { error: { message: 'Route not found' } }
 */
export function notFound(req, res) {
  // Your code here
  res.status(404).json({ error: { message: 'Route not found' } });
    
}
