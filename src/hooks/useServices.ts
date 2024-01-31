import { useQuery } from '@tanstack/react-query';
import { getServices } from '@/api/admin/services/services.api';

const useServices = () => {
  const servicesInfo = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    select: (data: any) => {
      const services = data?.data?.map((service: any) => ({
        id: service._id,
        name: service.name,
        description: service.description,
        price: service.price,
      }));

      return services;
    },
  });

  return servicesInfo;
};

export default useServices;
