// utils/quill-register.js
import { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module';

if (typeof window !== 'undefined') {
  Quill.register('modules/imageResize', ImageResize);
}
