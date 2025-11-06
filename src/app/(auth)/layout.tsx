import StoreProvider from "@/providers/StoreProvider";
export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <StoreProvider>{children}</StoreProvider>
    </div>
  );
}
