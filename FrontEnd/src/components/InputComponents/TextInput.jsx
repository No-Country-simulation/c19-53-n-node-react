export const TextInput = ({ name, description }) => {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {name}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          placeholder={description}
          className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};
