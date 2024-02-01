import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { URL } from '@/config/config';
import { Button } from '@/components/ui/button';

const ServicesAdd = () => {
  const [servicesAdd, setServicesAdd] = useState({
    name: '',
    description: '',
    price: 0,
    devices: ['Smartphone', 'Laptop', 'Tablet'],
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const queryClient = useQueryClient();

  const { mutateAsync, isSuccess, isError } = useMutation({
    mutationFn: () => {
      return axios.post(`${URL}services`, servicesAdd);
    },
    onSuccess: (data) => {
      setSuccess(data.data.message);
      queryClient.invalidateQueries({ queryKey: ['services'] });
    },
    onError: (err) => {
      setError(
        err?.response.data.errorSources[0].message || err.response.data.error
      );
      console.error(
        'Error from server:',
        err?.response.data.errorSources[0].message || err.response.data.error
      );
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const updatedValue = name === 'price' ? Number(value) : value;

    setServicesAdd((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutateAsync(servicesAdd);

    setTimeout(() => {
      (e.target as HTMLFormElement).reset();
    }, 100);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-lg space-y-2">
        <div>
          <label
            htmlFor="name"
            className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
          >
            name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50   text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border border-blue-600 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="John"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="bg-gray-50   text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border border-blue-600 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="bg-gray-50   text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border border-blue-600 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit">Add</Button>
      </form>
      {isError && <p className="text-red-500">{error}</p>}
      {isSuccess && <p className="text-red-500">{success}</p>}
    </div>
  );
};

export default ServicesAdd;
