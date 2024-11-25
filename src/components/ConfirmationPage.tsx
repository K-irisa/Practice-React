import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface LocationState {
    email: string;
    text: string;
}

function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, text } = location.state || { email: '', text: '' };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>確認ページ</h1>
      <div>
        <p><strong>メールアドレス:</strong> {email}</p>
        <p><strong>メインテキスト:</strong> {text}</p>
      </div>
      <button onClick={goBack}>戻る</button>
    </div>
  );
}

export default ConfirmationPage;
