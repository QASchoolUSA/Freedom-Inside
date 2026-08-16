import { setRequestLocale } from "next-intl/server";
import { DemoStack } from "@/components/demo/DemoStack";

export default async function DemoStackPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DemoStack />;
}
