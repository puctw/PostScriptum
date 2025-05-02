import { useState } from 'react';
import '../styles/files.css';
import Header from '../components/Header_user';

export default function FilesPage() {
  const files = [
    { name: 'ImportantReport', type: 'pdf', accessed: '3h ago', size: '1096kb' },
    { name: 'Secrets of Bettencourt the III', type: 'pptx', accessed: '6h ago', size: '1.56Gb' },
    { name: 'Cool picture', type: 'png', accessed: '1 day ago', size: '24Mb' },
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

  const getIcon = (type) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'pptx': return '📊';
      case 'docx': return '📝';
      case 'png':
      case 'jpg': return '🖼️';
      default: return '📁';
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
        <span className="folder-icon">📁</span>
        <span className="files-label">Files</span>
      </div>

      <div className="toolbar-right">
        <button className="cloud-button">🟡</button> {/* Replace with actual Google icon if needed */}
        <button className="cloud-button">🔵</button> {/* Replace with actual OneDrive icon if needed */}
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
                  <span className="file-icon">{getIcon(file.type)}</span>
                  {file.name}
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
