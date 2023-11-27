import { useState, useEffect } from 'react';
import { TextInput } from '@mantine/core';
import octocat from './assets/octocat.png';
// import fetchData from './fetchData.js'

function Avatar({ avatarImg }) {
  const isGithubAvatar = false;

  return (
    <div className='w-20 h-20 '>
      {isGithubAvatar ? (
        <img
          src={avatarImg}
          alt='my-gh-avatar image'
          className='object-cover w-full h-full rounded-full'
        />
      ) : (
        <img
          src={octocat}
          alt='gh-octocatimage'
          className='object-cover w-full h-full rounded-full'
        />
      )}
    </div>
  );
}

function Heading(props) {
  const { username } = props;

  const isDisplayUsername = false;
  return (
    <div>
      {isDisplayUsername ? (
        <h1 className=' text-white font-bold text-4xl max-w-prose'>
          {username}
        </h1>
      ) : (
        <h1 className=' text-white font-bold text-4xl max-w-prose'>
          Find Your OctoProfile
        </h1>
      )}
    </div>
  );
}

function InputComponent(props) {
  return (
    <TextInput
      placeholder='Enter your github username'
      variant='filled'
      className='w-full'
      value={props.value}
      onChange={props.onChange}
      onKeyPress={props.handleSubmit}
    />
  );
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const [githubAvatar, setGithubAvatar] = useState(octocat);
  const [profileName, setProfileName] = useState('Find Your OctoProfile');

  const fetchData = async () => {
    try {
      const url = `https://api.github.com/users/${inputValue}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`invalid endpoint ${res.status}`);
      const results = await res.json();
      setGithubAvatar(results.avatar_url);
      setProfileName(results.login);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
    console.log(e);
  };

  const handleSubmit = () => {
    TextInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        fetchData();
      }
    });
  };

  useEffect(() => {}, []);

  return (
    <div className='flex flex-col h-screen bg-gray-900'>
      <div className='flex flex-col mt-20 space-y-7 mx-auto place-items-center'>
        <Avatar avatarImg={githubAvatar} />
        <Heading username={profileName} />
        <InputComponent
          value={inputValue}
          onChange={handleInputValueChange}
          onKeyPress={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
