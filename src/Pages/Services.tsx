import BatteryReplacement from '@/components/ServiceTiles/BatteryReplacement';
import ChipsReplacement from '@/components/ServiceTiles/ChipsReplacement';
import DataRecovery from '@/components/ServiceTiles/DataRecovery';
import Container from '@/components/ui/Container';

const Services = () => {
  return (
    <Container className="my-20">
      <div className="flex flex-col items-center justify-between text-center">
        <h2>
          {' '}
          Services that <span className="text-primary">we provide.</span>{' '}
        </h2>
        <p className="mb-20 mt-10 max-w-[80ch]">
          All our technicians are fully qualified and licensed. Moreover,
          theyare incredibly skillful and proficient in various aspects of
          computer repair.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-[20px]">
        <BatteryReplacement />
        <ChipsReplacement />
        <DataRecovery />
        <div className="col-span-12 h-[415px] rounded-2xl bg-dark-gray/70 " />
        <div className="col-span-12 h-[415px] rounded-2xl bg-dark-gray/70 md:col-span-6 lg:col-span-4" />
        <div className="col-span-12 h-[415px] rounded-2xl bg-dark-gray/70 md:col-span-6 lg:col-span-4" />
        <div className="col-span-12 h-[415px] rounded-2xl bg-dark-gray/70 md:col-span-12 lg:col-span-4" />
      </div>
    </Container>
  );
};

export default Services;
