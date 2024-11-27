import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../userContext';

function InputPage() {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserContext();

  const handleSubmit = () => {
    navigate('/confirm');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>入力ページ</h1>
      <div>
        <label>
          メールアドレス:
          <input
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            required
            style={{ display: 'block', margin: '10px 0' }}
          />
        </label>
      </div>
      <div>
        <label>
          メインテキスト:
          <textarea
            value={userData.text}
            onChange={(e) => setUserData({ ...userData, text: e.target.value })}
            required
            style={{ display: 'block', margin: '10px 0' }}
          />
        </label>
      </div>
      <button onClick={handleSubmit}>次へ</button>
    </div>
  );
}

export default InputPage;
