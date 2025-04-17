import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Pagina inicial do si3cloud</h1>
      <Link href={"http://si3cloud.ufsj.edu.br/riasec360/"}>RIASEC360</Link>
      <Link href={"/extra"}>Pagina de teste neste projeto</Link>
    </div>
  );
}
