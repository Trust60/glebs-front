import { useTranslations } from "next-intl";

import { Keyinfo as KeyinfoType } from "@/types";
import Separator from "./ui/separator";

interface KeyinfoProps {
  items: KeyinfoType;
}

const colorImages: { [key: string]: string } = {
  camouflage:
    "https://i.pinimg.com/564x/b5/0c/e9/b50ce9b303fdead3bff03c9fa6466051.jpg",
  pixel:
    "https://i.pinimg.com/564x/0c/68/d4/0c68d4ffc59922d48928457590a6e930.jpg",
  multicam:
    "https://i.pinimg.com/564x/e3/35/67/e33567409b9b6d2f308f77b0fa655855.jpg",
  flecktarn:
    "https://i.pinimg.com/564x/8d/5a/c5/8d5ac5b8cb94e5641ad461786e559a6a.jpg",
  "black multicam":
    "https://i.pinimg.com/564x/7b/67/e0/7b67e0830e67fe086e56d8c6c022da35.jpg",
  "desert camo":
    "https://i.pinimg.com/564x/61/6e/45/616e45af138b0233010c355ce93b413c.jpg",
};

const Keyinfo: React.FC<KeyinfoProps> = ({ items }) => {
  const t = useTranslations();
  return (
    <div className="md:flex md:gap-8 md:mb-5 xl:mx-20 xl:mt-5 xl:mb-5">
      <div className="mt-6 p-4 -mx-4 md:mx-0 md:w-full lg:max-w-xl min-[1756px]:max-w-3xl rounded-lg bg-neutral-900/5">
        <div className="text-lg font-medium mb-2">
          <p>{t("key-information")}</p>
        </div>
        <div className="flex justify-between py-2">
          <div>
            <p>{t("country-of-manufacture")}</p>
          </div>
          <div className="font-semibold">
            <p>{items.country}</p>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between py-2">
          <div>
            <p>{t("volume")}</p>
          </div>
          <div className="font-semibold">
            <p>{items.volume} {t('Liter')}</p>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between py-2 flex-col md:flex-row">
          <div className="mb-2 md:mb-0">
            <p>{t("colors")}</p>
          </div>
          <div className="font-semibold grid grid-cols-2 gap-y-1 gap-x-5 w-full md:w-2/3">
            {items.colors.map((color) => {
              const imageUrl = colorImages[color.value];
              return (
                <div
                  key={color.id}
                  className="flex justify-between items-center"
                >
                  <p>{color.name}</p>
                  <div
                    className="w-6 h-6 rounded-full border bg-cover flex-shrink-0"
                    style={
                      imageUrl
                        ? { backgroundImage: `url(${imageUrl})` }
                        : { backgroundColor: color.value }
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Separator />
        <div className="flex justify-between py-2">
          <div>
            <p>{t("material")}</p>
          </div>
          <div className="font-semibold">
            <p>{items.material}</p>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between py-2">
          <div>
            <p>{t("weight")}</p>
          </div>
          <div className="font-semibold">
            <p>{items.weight} {t('kg')}</p>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between py-2">
          <div>
            <p>{t("by-type-of-construction")}</p>
          </div>
          <div className="font-semibold">
            <p>{items.construction}</p>
          </div>
        </div>
        <Separator />
      </div>
      <div className="mt-6 mb-8 p-4 -mx-4 md:mx-0 rounded-lg bg-neutral-900/5 md:w-full lg:max-w-sm">
        <div className="text-lg font-medium mb-2">
          <p>{t("overall-dimensions")}</p>
        </div>
        <div className="flex justify-between py-2">
          <div>
            <p>{t("length")}</p>
          </div>
          <div className="font-semibold">
            <p>{items.dimensions.length} {t('sm')}</p>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between py-2">
          <div>
            <p>{t("width")}</p>
          </div>
          <div className="font-semibold">
            <p>{items.dimensions.width} {t('sm')}</p>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between py-2">
          <div>
            <p>{t("height")}</p>
          </div>
          <div className="font-semibold">
            <p>{items.dimensions.height} {t('sm')}</p>
          </div>
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default Keyinfo;
