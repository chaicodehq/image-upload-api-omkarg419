import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import imageRoutes from "./routes/image.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { notFound } from "./middlewares/notFound.middleware.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * TODO: Create Express app
 *
 * 1. Create app with express()
 * 2. Add express.json() middleware
 * 3. Create uploads directories if they don't exist:
 *    - uploads/
 *    - uploads/thumbnails/
 *    Use fs.mkdirSync with { recursive: true }
 * 4. Add GET /health route → { ok: true }
 * 5. Mount image routes at /api/images
 * 6. Add notFound middleware
 * 7. Add errorHandler middleware (must be last!)
 * 8. Return app
 */
export function createApp() {
	// Your code here
	const app = express();

	app.use(express.json());

	const uploadsDir = path.join(__dirname, "../uploads");
	const thumbnailsDir = path.join(uploadsDir, "thumbnails");
	if (!fs.existsSync(uploadsDir)) {
		fs.mkdirSync(uploadsDir, { recursive: true });
	}
	if (!fs.existsSync(thumbnailsDir)) {
		fs.mkdirSync(thumbnailsDir, { recursive: true });
	}

	app.get("/health", (req, res) => {
		res.json({ ok: true });
	});

	app.use("/api/images", imageRoutes);

	app.use(notFound);

	app.use(errorHandler);
	return app;
}
