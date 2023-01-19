import './index.css';
import { useEffect, useState } from 'react';

// function getMeme(memeTemplate, topText, bottomText) {
//   const effMemeUrl = `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.gif`;
//   return effMemeUrl;
// }

export default function App() {
  const [memeTemplate, setMemeTemplate] = useState('morpheus');
  const [topText, setToptext] = useState(
    'alright_code_-_I_may_have_broken_you',
  );
  const [bottomText, setBottomText] = useState('but_you_wont_break_me');
  const [effMemeUrl, setEffMemeUrl] = useState();

  useEffect(() => {
    setEffMemeUrl(
      `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.gif`,
    );
  }, [memeTemplate, topText, bottomText]);

  return (
    <div>
      {' '}
      <button
        onClick={() => {
          console.log(effMemeUrl);
        }}
      >
        DONT TOUCH
      </button>
    </div>
  );
}
// next insert image with effMemeUrl (should be updating from start)
