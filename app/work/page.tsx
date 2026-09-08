import Link from 'next/link';
import { cases } from '@/lib/data/cases';
import { MaskedHeading } from '@/components/ui/MaskedHeading';
import { Progress } from '@/components/ui/Progress';
import { CaseList } from '@/components/work/CaseList';

export default function WorkPage() {
  return (
    <>
      <Progress />

      <section className="shell pt-28 sm:pt-40 pb-16">
        <p className="meta mb-8">Case files &middot; 2021 to present</p>
        <MaskedHeading
          lines={['THE WORK', 'THAT SHIPPED.']}
          className="[--h:13vw] sm:[--h:9vw] lg:[--h:7.5vw]"
        />
        <p className="mt-12 max-w-[54ch] text-[1.0625rem] leading-[1.7] text-ash">
          {cases.length} systems, each with the problem that justified it and the number it
          moved. Most were built inside client teams, so the code is not public. Where it is,
          there is a link.
        </p>
      </section>

      <CaseList />

      <section className="border-t border-line bg-deep">
        <div className="shell py-16 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="disp text-[2.1rem] sm:text-[4rem]">
                Yours could be
                <br />
                case <span className="text-brass tnum">{cases.length + 1}</span>.
              </h2>
              <p className="mt-7 max-w-[48ch] text-[1.0625rem] leading-[1.7] text-ash">
                Every one of these started as somebody describing a task they were sick of
                doing. Twenty minutes on a call is enough to know whether yours is worth
                building.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link href="/contact" className="btn grp">
                Book 20 minutes <span className="arw">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
