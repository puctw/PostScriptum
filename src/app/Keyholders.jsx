import { useState } from 'react';
import '../styles/keyholders.css';
import Header from '../components/Header_user';
import folder from "../assets/folder2.svg";
import family from "../assets/family.svg";
import clock from "../assets/clock.svg";
import back_button from '../assets/back-button.svg';

export default function Keyholders() {
  const guardians = [
    { name: 'Mariana Silva', email: 'mariana.silva84@hotmail.com', permissions: 'Gallery, Files, Accounts' },
    { name: 'Tiago Rodrigues', email: 'tiago.rodrigues@mail.com', permissions: 'Gallery, Files' },
  ];

  const pendingInvites = [
    'joanadoe@mail.com',
    'miguel.angelo@gmail.com',
    'ricardo.santos@outlook.com'
  ];

  const [checkedGuardians, setCheckedGuardians] = useState(Array(guardians.length).fill(false));
  const [checkedInvites, setCheckedInvites] = useState(Array(pendingInvites.length).fill(false));

  const toggleGuardian = index => {
    const updated = [...checkedGuardians];
    updated[index] = !updated[index];
    setCheckedGuardians(updated);
  };

  const toggleInvite = index => {
    const updated = [...checkedInvites];
    updated[index] = !updated[index];
    setCheckedInvites(updated);
  };

  return (
    <>
      <Header />
      <div className="file-toolbar">
        <div className="toolbar-left">
          <button className="back-button" onClick={() => window.location.href = '/dashboard'}>
            <img src={back_button} alt="Back" />
          </button>
          <img src={folder} alt="Folder Icon" className="folder-icon" />
          <span className="files-label">Guardians</span>
        </div>
      </div>

      <div className="guardians-container">
      <div className="guardians-section">
        <div className="section-header">
          <img src={family} alt="Guardians Icon" className="section-icon" />
          <h2>Guardians</h2>
        </div>
          <table className="file-table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Permissions</th>
              </tr>
            </thead>
            <tbody>
              {guardians.map((g, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={checkedGuardians[index]}
                      onChange={() => toggleGuardian(index)}
                    />
                  </td>
                  <td>{g.name}</td>
                  <td>{g.email}</td>
                  <td>{g.permissions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pending-section">
          <div className="section-header">
            <img src={clock} alt="Pending Invites Icon" className="section-icon" />
            <h2>Pending Invites</h2>
          </div>
          <table className="file-table">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {pendingInvites.map((email, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={checkedInvites[index]}
                      onChange={() => toggleInvite(index)}
                    />
                  </td>
                  <td>{email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
