import { setRequestLocale } from "next-intl/server";
import { DemoIndex } from "@/components/demo/DemoIndex";

export default async function DemoIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DemoIndex />;
}
