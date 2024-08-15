import Link from "next/link";

const Copyright = (props: any) => {
  return (
    <div>
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
