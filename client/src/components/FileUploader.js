import React, { useRef } from 'react'
import { Button } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const FileUploader = ({ onFileSelectSuccess, onFileSelectError }) => {
	const fileInput = useRef(null)

	const handleFileInput = (e) => {
		const file = e.target.files[0];
		if (file.size / 1024 / 1024 > 5)
			onFileSelectError({ error: "File size cannot exceed more than 5MB" });
		else onFileSelectSuccess(file);
	}

	return (<div><Button variant="contained" component="label" color="primary" onClick={e => fileInput.current && fileInput.current.click()}>
		{" "}
		Загрузить изображение
		<FileUploadIcon />
		<input id='image' type="file" onChange={handleFileInput} hidden />
	</Button> </div>)
}

export default FileUploader