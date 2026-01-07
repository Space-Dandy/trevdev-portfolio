interface BackgroundLayerProps {
  backEndMode: boolean;
  scrollY: number;
}
export const BackgroundLayer = ({
  backEndMode,
  scrollY,
}: BackgroundLayerProps) => {
  return (
    <>
      <div
        className={`fixed inset-0 w-full h-screen transition-colors duration-300 ${
          backEndMode ? 'bg-stone-700' : 'bg-yellow-500'
        }`}
        style={{
          transform: `translateY(${scrollY}px)`,
          willChange: 'transform',
        }}
      />
      <div
        className={`fixed inset-0 w-full h-screen transition-opacity duration-300 ${
          backEndMode ? 'opacity-0' : ''
        } bg-[#222222]`}
        style={{
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
          transform: `translateY(${-scrollY}px)`,
          willChange: 'transform',
        }}
      />
      <div
        className={`fixed inset-0 w-full h-screen z-30 glow-bg`}
        style={{
          transform: `translateY(${scrollY}px)`,
          willChange: 'transform',
        }}
      />
    </>
  );
};
