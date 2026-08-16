import { setRequestLocale } from "next-intl/server";
import { DemoCompare } from "@/components/demo/DemoCompare";

export default async function DemoComparePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DemoCompare />;
}
