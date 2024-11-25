import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InputPage() {
  const [email, setEmail] = useState<string>('');
  const [text, setText] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/confirm', { state: { email, text } });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>入力ページ</h1>
      <div>
        <label>
          メールアドレス:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: 'block', margin: '10px 0' }}
          />
        </label>
      </div>
      <div>
        <label>
          メインテキスト:
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
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
