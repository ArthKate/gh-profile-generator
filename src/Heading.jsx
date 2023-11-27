// eslint-disable-next-line react/prop-types
export default function Heading({ displayUsername }) {
  // eslint-disable-next-line react/prop-types

  const isDisplayUsername = false;
  return (
    <div>
      {isDisplayUsername ? (
        <h1 className=' text-white font-bold text-4xl max-w-prose'>
          {displayUsername}
        </h1>
      ) : (
        <h1 className=' text-white font-bold text-4xl max-w-prose'>
          Find Your OctoProfile
        </h1>
      )}
    </div>
  )
}

// Heading.defaultProps = {
//   displayUsername: 'githubUsername',
// }
