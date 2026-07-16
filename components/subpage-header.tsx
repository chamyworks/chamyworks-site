import Image from "next/image";
import Link from "next/link";

type SubpageHeaderProps = {
  active?: "apps";
  showAppsMenu?: boolean;
};

const menus = [{ href: "/apps/", label: "Apps", value: "apps" }] as const;

export function SubpageHeader({
  active,
  showAppsMenu = true,
}: SubpageHeaderProps) {
  return (
    <header className="border-b border-[#e8ded5] dark:border-[#bda995]/16">
      <div className="flex h-14 items-center justify-between sm:h-16">
        <Link
          href="/"
          aria-label="Chamyworks 홈으로 이동"
          className="inline-flex items-center"
        >
          <Image
            src="/chamyworks-logo.png"
            alt="Chamyworks"
            width={1246}
            height={351}
            className="h-auto w-[5.75rem] object-contain sm:w-32"
            sizes="(min-width: 640px) 128px, 92px"
          />
        </Link>

        {showAppsMenu ? (
          <nav aria-label="주요 메뉴" className="flex items-center gap-5 sm:gap-6">
            {menus.map((menu) => {
              const isActive = active === menu.value;

              return (
                <Link
                  key={menu.value}
                  href={menu.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`border-b py-1 text-[0.82rem] transition sm:text-sm ${
                    isActive
                      ? "border-[#6b5448] font-semibold text-[#6b5448] dark:border-[#d9cabb] dark:text-[#f8efe4]"
                      : "border-transparent font-medium text-warm-muted hover:text-warm-ink dark:text-[#cdbdac] dark:hover:text-[#f8efe4]"
                  }`}
                >
                  {menu.label}
                </Link>
              );
            })}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
