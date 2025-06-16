const ContentScreenLayout = async ({
  children,
  className,
}: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={`flex h-[calc(100vh-5rem)] items-end mix-blend-difference ${className}`}
    >
      <div className="flex size-full flex-col items-end justify-between pt-15">
        {children}
      </div>
    </div>
  );
};

export default ContentScreenLayout;
