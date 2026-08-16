import { setRequestLocale } from "next-intl/server";
import { DemoFeaturedPlus } from "@/components/demo/DemoFeaturedPlus";

export default async function DemoFeaturedPlusPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DemoFeaturedPlus />;
}
