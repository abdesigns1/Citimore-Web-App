import React, { useState } from "react";
import { BsImage } from "react-icons/bs";

export default function AddPhotoVideo() {
  const [uploads, setUploads] = useState({
    profilePhoto: null,
    ninSlip: null,
    nyscCard: null,
  });

  const handleFileChange = (field, file) => {
    if (file) {
      setUploads({ ...uploads, [field]: file });
    }
  };

  const handleSave = (field) => {
    console.log(`Saving ${field}:`, uploads[field]);
    // Handle save logic here
  };

  const handleNext = () => {
    console.log("All uploads:", uploads);
    // Navigate to next page
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-16">
          Add Photo / Video
        </h1>

        {/* Upload Cards Container */}
        <div className="space-y-12">
          {/* Top Row - Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Upload Picture Card */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-lg font-medium text-gray-900 mb-6">
                Upload a picture of yourself
              </h3>

              <div className="flex items-start gap-6 mb-6">
                {/* Image Placeholder */}
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BsImage className="text-4xl text-gray-400" />
                </div>

                {/* File Input Section */}
                <div className="flex-1">
                  <p className="text-sm italic text-gray-600 mb-3">
                    Please upload square image, size less than 100kB
                  </p>
                  <div className="flex items-center gap-3">
                    <label className="px-5 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium cursor-pointer hover:bg-gray-50 transition-colors">
                      Choose File
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) =>
                          handleFileChange("profilePhoto", e.target.files[0])
                        }
                      />
                    </label>
                    <span className="text-sm text-gray-600">
                      {uploads.profilePhoto
                        ? uploads.profilePhoto.name
                        : "No File Chosen"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => handleSave("profilePhoto")}
                  className="px-8 py-2.5 bg-teal-800 text-white font-semibold rounded-lg hover:bg-teal-900 transition-colors"
                >
                  Save
                </button>
              </div>
            </div>

            {/* Upload NIN Slip Card */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-lg font-medium text-gray-900 mb-6">
                Upload your NIN Slip
              </h3>

              <div className="flex items-start gap-6 mb-6">
                {/* Image Placeholder */}
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BsImage className="text-4xl text-gray-400" />
                </div>

                {/* File Input Section */}
                <div className="flex-1">
                  <p className="text-sm italic text-gray-600 mb-3">
                    Please upload square image, size less than 100kB
                  </p>
                  <div className="flex items-center gap-3">
                    <label className="px-5 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium cursor-pointer hover:bg-gray-50 transition-colors">
                      Choose File
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) =>
                          handleFileChange("ninSlip", e.target.files[0])
                        }
                      />
                    </label>
                    <span className="text-sm text-gray-600">
                      {uploads.ninSlip
                        ? uploads.ninSlip.name
                        : "No File Chosen"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => handleSave("ninSlip")}
                  className="px-8 py-2.5 bg-teal-800 text-white font-semibold rounded-lg hover:bg-teal-900 transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row - Single Centered Card */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-md p-8 w-full md:w-1/2">
              <h3 className="text-lg font-medium text-gray-900 mb-6">
                Upload NYSC I.D Card
              </h3>

              <div className="flex items-start gap-6 mb-6">
                {/* Image Placeholder */}
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BsImage className="text-4xl text-gray-400" />
                </div>

                {/* File Input Section */}
                <div className="flex-1">
                  <p className="text-sm italic text-gray-600 mb-3">
                    Please upload square image, size less than 100kB
                  </p>
                  <div className="flex items-center gap-3">
                    <label className="px-5 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium cursor-pointer hover:bg-gray-50 transition-colors">
                      Choose File
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) =>
                          handleFileChange("nyscCard", e.target.files[0])
                        }
                      />
                    </label>
                    <span className="text-sm text-gray-600">
                      {uploads.nyscCard
                        ? uploads.nyscCard.name
                        : "No File Chosen"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => handleSave("nyscCard")}
                  className="px-8 py-2.5 bg-teal-800 text-white font-semibold rounded-lg hover:bg-teal-900 transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={handleNext}
            className="px-16 py-3.5 bg-teal-800 text-white font-semibold rounded-full hover:bg-teal-900 transition-colors shadow-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
