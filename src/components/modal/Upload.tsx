import React, { useState } from "react";

type UploadModalProps = {
    onClose: () => void;
    onSuccess: () => void;
    onError: () => void;
};

const UploadModal: React.FC<UploadModalProps> = ({ onClose, onSuccess, onError }) => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileUpload = () => {
        if (file) {
            // Simulate a successful file upload
            setTimeout(() => {
                const success = Math.random() > 0.5; // Simulate random success or failure
                if (success) {
                    onSuccess();
                } else {
                    onError();
                }
            }, 1000);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Upload Your Assignment</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        ✕
                    </button>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                        type="file"
                        className="hidden"
                        id="file-upload"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer text-green-600 hover:underline"
                    >
                        {file ? file.name : "Browse Files"}
                    </label>
                </div>
                <button
                    onClick={handleFileUpload}
                    disabled={!file}
                    className={`mt-4 px-4 py-2 w-full text-white rounded ${file ? "bg-green-600 hover:bg-green-700" : "bg-gray-300"
                        }`}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default UploadModal;
