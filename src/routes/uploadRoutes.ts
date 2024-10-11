// src/routes/uploadRoutes.ts
import { Router } from 'express';
import upload from '../middlewares/multerConfig';
import { uploadImage } from '../controllers/uploadController';

const router = Router();

// POST route for image upload
/**
 * @swagger
 * tags:
 *   - name: Upload
 *     description: Image upload management operations
 * /upload:
 *   post:
 *     summary: Upload an image
 *     tags:
 *       - Upload
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *       400:
 *         description: No file uploaded
 */
router.post('/upload', upload.single('image'), uploadImage);

export default router;
