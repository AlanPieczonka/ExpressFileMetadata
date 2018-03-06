import express from 'express';
import multer from 'multer';

const router = express.Router();

const upload = multer({ dest: 'uploads/' })
router.post('/', upload.single('file'), (req, res) => {
  res.json({
    'name': req.file.originalname,
    'size': req.file.size 
  })
});

export default router;