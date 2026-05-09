/**
 * TODO: Global error handler
 *
 * Handle different error types:
 *
 * 1. Multer file size error (err.code === 'LIMIT_FILE_SIZE'):
 *    - Return 400 with { error: { message: 'File size exceeds 5MB limit' } }
 *
 * 2. Multer file type error (err.message includes 'Invalid file type'):
 *    - Return 400 with { error: { message: err.message } }
 *
 * 3. Mongoose validation error (err.name === 'ValidationError'):
 *    - Extract messages from err.errors
 *    - Return 400 with { error: { message: 'combined messages' } }
 *
 * 4. Mongoose duplicate key error (err.code === 11000):
 *    - Return 409 with { error: { message: 'Resource already exists' } }
 *
 * 5. Default error:
 *    - Return status from err.status or 500
 *    - { error: { message: err.message || 'Internal server error' } }
 */
export function errorHandler(err, req, res, next) {
	// Your code here
	if (err.code === "LIMIT_FILE_SIZE") {
		return res
			.status(400)
			.json({ error: { message: "File size exceeds 5MB limit" } });
	}
	if (err.message && err.message.includes("Invalid file type")) {
		return res.status(400).json({ error: { message: err.message } });
	}
	if (err.name === "ValidationError") {
		const messages = Object.values(err.errors)
			.map((e) => e.message)
			.join("; ");
		return res.status(400).json({ error: { message: messages } });
	}
	if (err.code === 11000) {
		return res
			.status(409)
			.json({ error: { message: "Resource already exists" } });
	}
	const status = err.status || 500;
	const message = err.message || "Internal server error";
	return res.status(status).json({ error: { message } });
}
