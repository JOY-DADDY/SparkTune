import { useTRPC } from "@/trpc/client";
const Page = () => {
  const trpc = useTRPC();
  trpc.hello.queryOptions({ text: "Hello" });
  return (
    <div className="font-bold text-blue-300">
      <h1>hello sire</h1>
    </div>
  );
};
export default Page;