export default function Layout(props) {
  return (
    <>
      <header>This is the header</header>
      {props.children}
      <footer>This is the footer</footer>
    </>
  );
}
