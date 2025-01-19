import Image from "next/image";
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
                const success = Math.random() > 0.5;
                if (success) {
                    onSuccess();
                } else {
                    onError();
                }
            }, 1000);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <div className="text-right"><button onClick={onClose} className="text-gray-700 hover:text-text">
                    ✕
                </button></div>
                <div className="text-center">
                    <h3 className="text-xl text-primary font-bold">Videography Assignment</h3>
                <p className="text-center mb-4 text-text">01/09/2025 <br /> 11:40AM</p>
                </div>
                <div className="border-2 border-dashed flex flex-col justify-center items-center border-gray-300 rounded-lg p-6 ">
                    <Image
                                            src="/dashboard/upload.svg"
                                            alt="Sort Icon"
                                            width={22}
                                            height={16}
                                        />
                    <input
                        type="file"
                        className="hidden"
                        id="file-upload"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                    <p className="text-[#030F2D] text-sm mt-2">Format: Doc, PDF, JPG</p>
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer text-xs text-[#FFC145] hover:underline"
                    >
                        {file ? file.name : "Browse Files"}
                    </label>
                </div>
                <button
                    onClick={handleFileUpload}
                    disabled={!file}
                    className={`mt-4 px-4 py-2 w-full text-white rounded ${file ? "bg-green-500 hover:bg-green-600" : "bg-gray-300"
                        }`}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default UploadModal;