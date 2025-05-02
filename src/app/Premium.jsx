import { useState } from 'react';
import '../styles/files.css';
import Header from '../components/Header_user';
import pdf from "../assets/pdf.png";
import ppt from "../assets/ppt.png";
import word from "../assets/word.svg";
import drive from "../assets/drive.svg";
import onedrive from "../assets/onedrive.svg";
import folder from "../assets/folder2.svg";

export default function Premium() {
  const files = [
    { name: 'ImportantReport', type: 'pdf', accessed: '3h ago', size: '1096kb' },
    { name: 'Secrets of Bettencourt the III', type: 'pptx', accessed: '6h ago', size: '1.56Gb' },
    { name: 'How to conquer the world', type: 'pptx', accessed: '1 day ago', size: '24Mb' },
    { name: 'Mission Report', type: 'docx', accessed: '1 week ago', size: '4024kb' },
  ];

  // Track which checkboxes are checked
  const [checkedItems, setCheckedItems] = useState(Array(files.length).fill(false));
  const allChecked = checkedItems.every(Boolean);

  const toggleAll = () => {
    setCheckedItems(Array(files.length).fill(!allChecked));
  };

  const toggleOne = (index) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
  };

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case 'pdf':
        return <img src={pdf} alt="PDF Icon" />;
      case 'pptx':
        return <img src={ppt} alt="PPT Icon" />;
      case 'docx':
        return <img src={word} alt="Word Icon" />;
      case 'png':
      case 'jpg':
        return '🖼️';
      default:
        return '📁';
    }
  };

  return (
    <>
      <Header />
      <div className="file-toolbar">
      <div className="toolbar-left">
        <button className="back-button" onClick={() => window.location.href = '/dashboard'}>
          ◀
        </button>
        <img src={folder} alt="Folder Icon" className="folder-icon" />
        <span className="files-label">Files</span>
      </div>

      <div className="toolbar-right">
      <button className="cloud-button">
        <img src={drive} alt="Google Drive" className="cloud-icon" />
      </button>
      <button className="cloud-button">
        <img src={onedrive} alt="OneDrive" className="cloud-icon" />
      </button>

        <button className="add-button">+ Add new file</button>
      </div>
    </div>
      <div className="files-page">
        <table className="file-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={allChecked}
                  onChange={toggleAll}
                  title="Select All"
                />
              </th>
              <th>Name</th>
              <th>Type</th>
              <th>Last accessed</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={checkedItems[index]}
                    onChange={() => toggleOne(index)}
                  />
                </td>
                <td>
                <div className="file-name-cell">
                  <span className="file-icon">{getFileIcon(file.type)}</span>
                  <span className="file-name-text">{file.name}</span>
                </div>
                </td>
                <td>{file.type}</td>
                <td>{file.accessed}</td>
                <td>{file.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
