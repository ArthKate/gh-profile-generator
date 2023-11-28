/* eslint-disable react/prop-types */
import { useState } from 'react';
import { TextInput } from '@mantine/core';
import octocat from './assets/octocat.png';
// import fetchData from './fetchData.js'

function Avatar({ avatarImg }) {
  const isGithubAvatar = true;

  // if (avatarImg) {}

  return (
    <div className='w-36 h-36'>
      <img
        src={avatarImg}
        alt='my-gh-avatar image'
        className='object-cover w-full h-full rounded-full border-8 border-blue-700'
      />
    </div>
  );
}

function Heading(props) {
  const { name } = props;

  const isDisplayUsername = true;

  return (
    <div>
      {isDisplayUsername ? (
        <h1 className=' text-white font-bold text-4xl max-w-prose'>{name}</h1>
      ) : (
        <h1 className=' text-white font-bold text-4xl max-w-prose'>
          Find Your OctoProfile
        </h1>
      )}
    </div>
  );
}

function GithubLogin(props) {
  return <p className='text-blue-500 text-2xl'>{props.login}</p>;
}

function InputComponent(props) {
  return (
    <TextInput
      placeholder='Enter your github username'
      variant='filled'
      className='w-full'
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
}

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [githubAvatar, setGithubAvatar] = useState(octocat);
  const [githubUserName, setGithubUserName] = useState('Find Your OctoProfile');
  const [githubLogin, setGithubLogin] = useState('');

  const fetchData = async () => {
    try {
      const url = `https://api.github.com/users/${inputValue}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`invalid endpoint ${res.status}`);
      const results = await res.json();
      setGithubAvatar(results.avatar_url);
      setGithubUserName(results.name);
      setGithubLogin(`@${results.login}`);
      console.log(results);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmitOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      fetchData();
      setInputValue('');
    }
  };

  return (
    <div className='flex flex-col h-screen bg-gray-900'>
      <div className='flex flex-col mt-20 space-y-7 mx-auto place-items-center'>
        <Avatar avatarImg={githubAvatar} />
        <Heading name={githubUserName} />
        <GithubLogin login={githubLogin} />
        <InputComponent
          value={inputValue}
          onChange={handleInputValueChange}
          onKeyDown={handleSubmitOnKeyDown}
        />
      </div>
    </div>
  );
};

export default App;
