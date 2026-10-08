import RevealItem from "../RevealItem";
import LoopingVideo from "../LoopingVideo";

type FocusCardProps={
  video: string;
  title: string;
  description: string;
  wide?: boolean;
  delay?: number;
  containVideoOnMobile?: boolean;
};

export default function FocusCard({
  video,
  title,
  description,
  wide=false,
  delay=0,
  containVideoOnMobile=false,
}: FocusCardProps) {
  return (
    <RevealItem independent duration={0.45} delay={delay} className={wide? "lg:col-span-3":"lg:col-span-2"}>
      <article className="h-full overflow-hidden rounded-xl bg-[#F8F7F5]">
        <LoopingVideo
          src={video}
          className={`w-full lg:h-55 ${containVideoOnMobile? "object-contain p-2 lg:object-cover lg:p-0":"object-cover"} ${wide? "aspect-360/220 lg:aspect-550/220":"aspect-360/220"}`}
        />
        <div className="space-y-3 p-6">
          <h3 className="text-[20px] font-semibold lg:text-2xl">{title}</h3>
          <p className="text-base text-[15px] leading-relaxed text-[#636363]">
            {description}
          </p>
        </div>
      </article>
    </RevealItem>
  );
}
