import '../styles/files.css';
import Header from '../components/Header_user';

export default function FilesPage() {
  const files = [
    { name: 'ImportantReport', type: 'pdf', accessed: '3h ago', size: '1096kb' },
    { name: 'Secrets of Bettencourt the III', type: 'pptx', accessed: '6h ago', size: '1.56Gb' },
    { name: 'Cool picture', type: 'png', accessed: '1 day ago', size: '24Mb' },
    { name: 'Mission Report', type: 'docx', accessed: '1 week ago', size: '4024kb' },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'pptx': return '📊';
      case 'docx': return '📝';
      case 'png': return '🖼️';
      case 'jpg': return '🖼️';
      default: return '📁';
    }
  };

  return (
    <>
      <Header />
    <div className="files-page">
      <table className="file-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Type</th>
            <th>Last accessed</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
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