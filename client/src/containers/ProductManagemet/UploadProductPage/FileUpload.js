import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

function FileUpload(props) {

    const [Product_image, setProduct_image] = useState([]);

    const onDrop = (files) => {
        let formData = new FormData();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append("file", files[0]);
        
        axios.post('http://localhost:5000/product/uploadImage', formData, config)
            .then(response => {
                if (response.data.success) {
                      
                    setProduct_image([...Product_image, response.data.image]);
                    props.refreshFunction([...Product_image, response.data.image]);

                } else {
                    alert('Failed to save the Image in Server');
                }
            })
    }

    const onDelete = (image) => {
        const currentIndex = Product_image.indexOf(image);

        let newImages = [...Product_image] 
        newImages.splice(currentIndex, 1)

        setProduct_image(newImages)
        props.refreshFunction(newImages)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone
                onDrop={onDrop}
                multiple={false} 
                maxSize={8000000000}>

                {({ getRootProps, getInputProps }) => (
                    <div style={{
                        width: '300px', height: '240px', border: '1px solid lightgray',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <i className="fa fa-plus"></i>
                    </div>
                )}
            </Dropzone>

            <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll' }}>

                {Product_image.map((image, index) => (
                    <div key={index} onClick={() => onDelete(image)}>
                        <img style={{ minWidth: '300px', width: '300px', height: '240px' }} src={`http://localhost:5000/${image}`} alt={`productImg-${index}`} />
                    </div>
                ))}

            </div>

        </div>
    )
}

export default FileUpload;
