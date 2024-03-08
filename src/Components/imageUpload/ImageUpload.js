// src/components/ImageUpload.js

import React from 'react';
import { analyzeImage } from '../../utils/visionAPI' // Adjust the path as per your project structure

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: null, analysisResult: null };
        this.onImageChange = this.onImageChange.bind(this);
    }

    async onImageChange(event) {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                file: URL.createObjectURL(img)
            });

            try {
                const analysisData = await analyzeImage(img);
                this.setState({ analysisResult: analysisData });
            } catch (error) {
                console.error("Error analyzing image:", error);
            }
        }
    }

    render() {
        const { file, analysisResult } = this.state;

        return (
            <div>
                <h2>Upload your image</h2>
                <input type="file" onChange={this.onImageChange} />
                {file && <img src={file} alt="Uploaded" />}
                {analysisResult && (
                    <div>
                        <h3>Analysis Result</h3>
                        <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
                    </div>
                )}
            </div>
        );
    }
}

export default ImageUpload;
