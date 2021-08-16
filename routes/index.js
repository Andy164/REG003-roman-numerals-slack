import express from 'express';
import { stringify, parse } from '@andy164/roman-numerals';

const router = express.Router();

const name = process.env.npm_package_name;
const version = process.env.npm_package_version;

const help = 'This is a command slash that allows you to convert Arabic numbers into Roman numbers and vice versa.';

router.get('/', (req, res) => {
  res.json({ name, version });
});

router.post('/', (req, res) => {
  const { text } = req.body;

  const response = {
    response_type: 'in_channel',
    text: '',
  };

  if (isNaN(text)) {
    try {
      response.text = text === 'version' ? version : text === 'help' ? help : parse(text);
    } catch (error) {
      response.text = error.message;
    }
  } else {
    try {
      response.text = stringify(+text);
    } catch (error) {
      response.text = error.message;
    }
  }

  res.json(response);
});

export default router;
