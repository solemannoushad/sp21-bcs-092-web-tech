import fs from 'fs';
import { PythonShell } from 'python-shell';

// Define the directory to save the uploaded images
const uploadDir = './uploads/';

// Create the uploads directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

export const imgController = async (req, res) => {
  const imageBuffer = req.file.buffer;

  // Save the image to the uploads directory with a unique filename
  const fileName = Date.now() + '_' + req.file.originalname;
  const filePath = uploadDir + fileName;

  fs.writeFile(filePath, imageBuffer, (err) => {
    if (err) {
      console.error('Error saving the uploaded image:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    let options = {
      mode: 'text',
      args: [filePath]
    };

    PythonShell.run('python.py', options).then(messages=>{
      console.log('finished', messages);
      fs.unlinkSync(filePath);
      return res.status(200).json({msg: messages})
    });

  });
};
