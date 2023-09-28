import { Icon } from '@iconify/react';
import React, { useState, ChangeEvent } from 'react';

interface FileInputProps {
  accept: string;
  fileInfo: string;
}

const FileInput: React.FC<FileInputProps> = ({ accept, fileInfo }) => {
  const [res, setRes] = useState<string | null>(null);
  const [bgImage, setBgImage] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setRes(file?.name || null);
    console.log(res);

    // Set the background image when a file is uploaded
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBgImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setBgImage(null);
    }
  };

  return (
    <div className="mb-6">
      <div className="flex flex-col w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-4 border-dashed rounded-lg cursor-pointer bg-gray-6 bg-opacity-10 hover:bg-brand hover:bg-opacity-10"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {res ? (
            <div className="flex items-center flex-col">
              <Icon icon="mdi:file-check" className="text-[44px] text-green" />
              <p className="text-xs text-gray-3 mt-2">{res}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Icon
                icon="ion:cloud-upload-outline"
                className="text-[44px] mb-4 text-brand"
              />
              <p className="mb-2 text-sm text-gray-2">
                <span className="font-semibold">Upload cover image</span>
              </p>
              <p className="text-xs text-gray-3">{fileInfo}</p>
            </div>
          )}
          <input
            id="dropzone-file"
            onChange={handleChange}
            accept={accept}
            type="file"
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default FileInput;
