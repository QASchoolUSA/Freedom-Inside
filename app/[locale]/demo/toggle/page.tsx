import { setRequestLocale } from "next-intl/server";
import { DemoToggle } from "@/components/demo/DemoToggle";

export default async function DemoTogglePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DemoToggle />;
}
