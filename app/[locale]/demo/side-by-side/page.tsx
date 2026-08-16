import { setRequestLocale } from "next-intl/server";
import { DemoSideBySide } from "@/components/demo/DemoSideBySide";

export default async function DemoSideBySidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DemoSideBySide />;
}
