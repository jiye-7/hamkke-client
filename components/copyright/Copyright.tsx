import Link from "next/link";

const Copyright = (props: any) => {
  return (
    <div className="text-xs font-semibold text-gray-800 text-center my-6">
      {"Copyright © "}
      <Link href="https://github.com/chipmunk-and-acorns" target="_blank">
        Hamkke
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </div>
  );
};

export default Copyright;
