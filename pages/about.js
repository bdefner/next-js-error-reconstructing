export default function About(props) {
  return (
    <>
      <hr />
      <p>variable in about page: {props.variable}</p>
      <p>setVariable in about page:</p>{' '}
      <button
        onClick={() => {
          props.setVariable(1);
        }}
      >
        {' '}
        to 1
      </button>
      <button
        onClick={() => {
          props.setVariable(0);
        }}
      >
        {' '}
        to 0
      </button>
      <hr />
    </>
  );
}
