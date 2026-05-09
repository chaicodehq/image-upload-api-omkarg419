import { Router } from 'express';
import {
  uploadImage,
  listImages,
  getImage,
  downloadImage,
  downloadThumbnail,
  deleteImage,
} from '../controllers/image.controller.js';
import { upload } from '../middlewares/upload.middleware.js';
import { validateObjectId } from '../middlewares/validateObjectId.middleware.js';

/**
 * TODO: Define image routes
 *
 * POST   /                  → uploadImage (use upload.single('image') middleware)
 * GET    /                  → listImages
 * GET    /:id               → getImage (use validateObjectId middleware)
 * GET    /:id/download      → downloadImage (use validateObjectId middleware)
 * GET    /:id/thumbnail     → downloadThumbnail (use validateObjectId middleware)
 * DELETE /:id               → deleteImage (use validateObjectId middleware)
 */

const router = Router();

// Your routes here
router.post('/', upload.single('image'), uploadImage);
router.get('/', listImages);
router.get('/:id', validateObjectId, getImage);
router.get('/:id/download', validateObjectId, downloadImage);
router.get('/:id/thumbnail', validateObjectId, downloadThumbnail);
router.delete('/:id', validateObjectId, deleteImage);
  

export default router;
