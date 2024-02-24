function Loader() {
  return (
    // The way to make an element take the entire view port is to set the right, left, top and bottom to zero
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
