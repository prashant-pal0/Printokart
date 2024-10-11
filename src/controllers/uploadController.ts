import { Request, Response } from 'express';

// Upload image to Cloudinary
export const uploadImage = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
        res.status(400).json({ message: 'No file uploaded' });
    }

    // Cloudinary stores the file and returns its URL
    const imageUrl = (req.file as any).path;
    res.status(200).json({ message: 'File uploaded successfully', url: imageUrl });
  } catch (error) {
    res.status(500).json({ message: 'Failed to upload file', error });
  }
};
