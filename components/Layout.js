import Header from './Header';

export default function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <footer>This is the footer</footer>
    </>
  );
}
