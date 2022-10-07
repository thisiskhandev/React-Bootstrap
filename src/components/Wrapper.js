const Wrapper = ({ children }) => {
  return (
    <>
      <main className="container">
        <section className="row">{children}</section>
      </main>
    </>
  );
};
export default Wrapper;
