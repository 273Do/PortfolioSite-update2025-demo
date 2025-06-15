const ContentScreenLayout = async ({
  children,
  className,
}: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`flex h-[calc(100vh-5rem)] items-end border ${className}`}>
      <div className="flex size-full flex-col items-end justify-between pt-20">
        {children}
      </div>
    </div>
  );
};

export default ContentScreenLayout;
