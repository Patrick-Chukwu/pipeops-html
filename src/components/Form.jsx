import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ fields, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFormSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'logo') {
        formData.append(key, data[key][0]); // Append file
      } else {
        formData.append(key, data[key]);
      }
    });

    try {
      const response = await fetch(onSubmit.url, {
        method: onSubmit.method,
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        onSubmit.success(result);
      } else {
        onSubmit.error('Registration failed!');
      }
    } catch (error) {
      onSubmit.error('An error occurred!');
    }
  };

  return (
    <form className="flex flex-col gap-5 p-4" onSubmit={handleSubmit(handleFormSubmit)}>
      {fields.map(field => (
        <div className='flex gap-2 justify-between flex-col sm:flex-row items-center ml-8' key={field.name}>
          <label className='hidden  sm:block h-[50px] bg-primary text-white px-4 text-lg py-2 rounded-xl w-60 md:min-w-[250px] md:text-xl font-normal' htmlFor={field.name}>{field.label}:</label>
          <input className='sm:placeholder-transparent border border-grey rounded-lg focus:outline-none px-2 w-60 md:max-w-60 h-[50px]'
            id={field.name}
            placeholder={field.label}
            type={field.type}
            {...register(field.name, { required: `${field.label} is required` })}
          />
          {errors[field.name] && <p>{errors[field.name].message}</p>}
        </div>
      ))}
      <button className='ml-6 bg-secondary w-fit text-white px-8 font-normal text-2xl py-2 self-center rounded-xl md:self-end' type="submit">Onboard</button>
    </form>
  );
};

export default Form;
