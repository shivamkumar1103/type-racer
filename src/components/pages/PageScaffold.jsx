function PageScaffold({ backgroundClassName, containerClassName, children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className={backgroundClassName} />
      <div className={containerClassName}>{children}</div>
    </div>
  );
}

export default PageScaffold;
