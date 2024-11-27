import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../userContext';

function ConfirmationPage() {
  const navigate = useNavigate();
  const { userData } = useUserContext();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>確認ページ</h1>
      <div>
        <p><strong>メールアドレス:</strong> {userData.email}</p>
        <p><strong>メインテキスト:</strong> {userData.text}</p>
      </div>
      <button onClick={goBack}>戻る</button>
    </div>
  );
}

export default ConfirmationPage;
